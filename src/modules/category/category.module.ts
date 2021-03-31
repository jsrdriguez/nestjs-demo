import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryRepository } from './category.repository';
import { categoryMiddleware } from '../../middlewares/functional.middlewares';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryRepository])],
  providers: [CategoryService],
  controllers: [CategoryController],
})
export class CategoryModule implements NestModule{
  configure(consumer: MiddlewareConsumer){
    consumer.apply(categoryMiddleware).forRoutes(CategoryController);
  }
}
