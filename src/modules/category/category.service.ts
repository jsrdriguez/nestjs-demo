import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { Category } from './category.entity';
import { CategoryRepository } from './category.repository';
import { CreateCategoryDto } from './dtos/create-category.dto';
import { ReadCategoryDto } from './dtos/read-category.dto';
import { UpdateCategoryDto } from './dtos/update-category.dto';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(CategoryRepository)
        private readonly categoryRepository:CategoryRepository
    ) {}

    async get(id:number): Promise<ReadCategoryDto> {
        if (!id) {
            throw new BadRequestException('id must be sent');
        }

        const category:Category = await this.categoryRepository.findOne(id, {
            where: { status: true }
        });

        if (!category) {
            throw new NotFoundException();
        }

        return plainToClass(ReadCategoryDto, category);
    }

    async getAll(): Promise<ReadCategoryDto[]> {
        const categories:Category[] = await this.categoryRepository.find({
            where: { status: true }
        });

        return categories.map((category:Category) => plainToClass(ReadCategoryDto,category ));
    }

    async create(category:CreateCategoryDto): Promise<ReadCategoryDto> {
        return await this.categoryRepository.save(category);
    }

    async update(categoryId:number, category: UpdateCategoryDto): Promise<ReadCategoryDto> {
        const foundCategory:Category = await this.categoryRepository.findOne(categoryId, {
            where: { status: true}
        }); 
        
        if (!foundCategory) {
            throw new NotFoundException('This category does not exist')
        }

        foundCategory.name = category.name;
        foundCategory.description = category.description; 
        
        const updatedCategory: Category = await this.categoryRepository.save(foundCategory);

        return plainToClass(ReadCategoryDto, updatedCategory);
    }

    async delete(id:number): Promise<any> {
        if (!id) {
            throw new BadRequestException('id must be sent');
        }

        const categoryExists:Category = await this.categoryRepository.findOne(id, {
            where: { status: true }
        });

        if (!categoryExists) {
            throw new NotFoundException();
        }

        return await this.categoryRepository.delete(id);
    }

}
