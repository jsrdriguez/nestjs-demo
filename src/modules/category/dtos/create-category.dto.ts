import { IsString, IsNotEmpty, MaxLength } from 'class-validator'

export class CreateCategoryDto {

    @IsString()
    @IsNotEmpty()
    @MaxLength(50, { message: 'This name is not valid'})
    name:string;

    @IsString()
    description:string;
}