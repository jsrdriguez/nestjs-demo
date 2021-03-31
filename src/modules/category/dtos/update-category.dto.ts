import { IsString, IsNotEmpty, IsBoolean, IsEmpty, MaxLength, } from 'class-validator'

export class UpdateCategoryDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(50, { message: 'This name is not valid'})
    readonly name?:string;

    @IsString()
    readonly description:string;
}