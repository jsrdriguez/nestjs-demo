import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, IsNumber, } from 'class-validator'
import { Category } from '../../category/category.entity';

export class UpdateProductDto {
    @IsString()
    @IsNotEmpty()
    readonly name?:string;

    @IsString()
    readonly description:string;

    @IsNumber()
    @IsNotEmpty()
    price:number;

    @IsNumber()
    @IsNotEmpty()
    @Type(type => Category)
    category_id:number;
}