import { Type } from "class-transformer";
import { IsOptional, IsPositive, Min } from "class-validator";


export class PaginationDto {
    @IsOptional()
    @IsPositive()
    //transforma el tupo de dato de string a number
    @Type(()=>Number)
    limit?: number;

    @IsOptional()
    @Min(0)
    @Type(()=>Number)//enableImplicitConversions:true
    offset?: number;
}