import { IsString, IsNotEmpty,IsNumber } from 'class-validator'
import { Exclude, Expose, Type } from "class-transformer";
import { ReadCategoryDto } from '../../category/dtos/read-category.dto';

@Exclude()
export class ReadProductDto {

    @Expose()
    @IsNumber()
    readonly id:number;

    @Expose()
    @IsString()
    @IsNotEmpty()
    readonly name:string;

    @Expose()
    @IsString()
    readonly description:string;

    @Expose()
    @IsString()
    readonly price:number;

    @Expose()
    @Type(type => ReadCategoryDto)
    readonly category:ReadCategoryDto
}