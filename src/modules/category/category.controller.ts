import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dtos/create-category.dto';
import { UpdateCategoryDto } from './dtos/update-category.dto';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService:CategoryService) {
    }

    @Get(':id')
    getCategory(@Param('id', ParseIntPipe) id:number){ 
        return this.categoryService.get(id);
    }

    @Get()
    getRoles(){
        return this.categoryService.getAll();
    }
    
    @Post()
    create(@Body() category:CreateCategoryDto){ 
        return this.categoryService.create(category);
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id:number, @Body() category:UpdateCategoryDto){ 
        return this.categoryService.update(id, category);
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id:number){ 
        return this.categoryService.delete(id);
    }
}
