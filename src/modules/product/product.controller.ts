import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseInterceptors } from '@nestjs/common';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
import { LoggingInterceptor } from './product.interceptor';
import { ProductService } from './product.service';

@UseInterceptors(LoggingInterceptor)
@Controller('product')
export class ProductController {
    constructor(private readonly productService:ProductService) {
    }

    @Get()
    getProducts(){
        return this.productService.getAll();
    }

    @Get(':id')
    getProduct(@Param('id', ParseIntPipe) id:number){ 
        return this.productService.get(id);
    }

    @Post()
    create(@Body() product:CreateProductDto){ 
        return this.productService.create(product);
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id:number, @Body() product:UpdateProductDto){ 
        return this.productService.update(id, product);
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id:number){ 
        return this.productService.delete(id);
    }
}
