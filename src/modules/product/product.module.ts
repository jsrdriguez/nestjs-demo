import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductRepository } from './product.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryRepository } from '../category/category.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ProductRepository, CategoryRepository])],
  providers: [ProductService],
  controllers: [ProductController]
})
export class ProductModule {}
