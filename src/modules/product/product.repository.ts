import { EntityRepository, getConnection, Repository } from "typeorm";
import { Category } from "../category/category.entity";
import { CategoryRepository } from "../category/category.repository";
import { CreateProductDto } from "./dtos/create-product.dto";
import { UpdateProductDto } from "./dtos/update-product.dto";
import { Product } from "./product.entity";


@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {

  
}