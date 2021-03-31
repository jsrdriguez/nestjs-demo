import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { Category } from '../category/category.entity';
import { CategoryRepository } from '../category/category.repository';
import { CreateProductDto } from './dtos/create-product.dto';
import { ReadProductDto } from './dtos/read-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
import { Product } from './product.entity';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductRepository)
        private readonly productRepository:ProductRepository,
        @InjectRepository(CategoryRepository)
        private readonly categoryRepository:CategoryRepository,
    ){}

    async getAll(): Promise<ReadProductDto[]> {
        const products:Product[] = await this.productRepository.find({
            
            where: { status: true }
        });

        return products.map((product:Product) => plainToClass(ReadProductDto,product ));
    }

    async get(id:number): Promise<ReadProductDto> {
        if (!id) {
            throw new BadRequestException('id must be sent');
        }

        const product:Product = await this.productRepository.findOne(id, {
            where: { status: true }
        });

        if (!product) {
            throw new NotFoundException();
        }

        return plainToClass(ReadProductDto, product);
    }

    async create(product:CreateProductDto): Promise<ReadProductDto> {
        const { name, description, price, category_id} = product;
        
        const newProduct = new Product();
        newProduct.name = name;
        newProduct.description = description;
        newProduct.price = price;

        const defaultCategory:Category = await this.categoryRepository.findOne({
            where: { id: category_id }
        });

        newProduct.category = defaultCategory;

        const insertedProduct = await newProduct.save();

        return plainToClass(ReadProductDto, insertedProduct);
    }

    async update(productId:number, product: UpdateProductDto): Promise<ReadProductDto> {
        const foundProduct:Product = await this.productRepository.findOne(productId, {
            where: { status: true}
        }); 
        
        if (!foundProduct) {
            throw new NotFoundException('This product does not exist')
        }

        const category:Category = await this.categoryRepository.findOne({
            where: { id: product.category_id }
        });

        foundProduct.name = product.name;
        foundProduct.description = product.description; 
        foundProduct.price = product.price; 
        foundProduct.category = category; 

        const updatedProduct: Product = await this.productRepository.save(foundProduct);

        return plainToClass(ReadProductDto, updatedProduct);
    } 

    async delete(id:number): Promise<any> {
        if (!id) {
            throw new BadRequestException('id must be sent');
        }

        const productExists:Product = await this.productRepository.findOne(id, {
            where: { status: true }
        });

        if (!productExists) {
            throw new NotFoundException();
        }

        return await this.productRepository.delete(id);
    }

}
