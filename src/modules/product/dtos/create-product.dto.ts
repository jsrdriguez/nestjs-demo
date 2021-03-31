import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, IsNumber, MaxLength } from 'class-validator'
import { Category } from '../../category/category.entity';

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(50, { message: 'This name is not valid'})
    name:string;

    @IsString()
    description:string;

    @IsNumber()
    @IsNotEmpty()
    price:number;

    @IsNumber()
    @IsNotEmpty()
    @Type(type => Category)
    category_id:number;
}