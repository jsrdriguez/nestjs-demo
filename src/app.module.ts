import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './modules/product/product.module';
import { CategoryModule } from './modules/category/category.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from './config/config.module';
import { LoggerMiddleware } from './middlewares/route.middleware';

@Module({
  imports: [ConfigModule,DatabaseModule, ProductModule, CategoryModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{

  configure(consumer: MiddlewareConsumer){
    consumer.apply(LoggerMiddleware).forRoutes('product');
  }

}
