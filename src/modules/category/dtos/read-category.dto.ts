import { IsString, IsNotEmpty,IsNumber,MaxLength } from 'class-validator'
import { Exclude, Expose } from "class-transformer";

@Exclude()
export class ReadCategoryDto {

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
}