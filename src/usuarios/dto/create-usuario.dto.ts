import { IsBoolean, IsIn, IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator";

export class CreateUsuarioDto {
    @IsString()
    @MinLength(1)
    nombre:string;

    @IsString()
    @MinLength(1)
    apellidoPaterno:string;

    @IsString()
    @MinLength(1)
    apellidoMaterno:string;

    @IsString()
    @MinLength(1)
    curp:string;

    fechaDeNacimiento:Date;

    @IsIn(['hombre','mujer'])
    sexo:string;

    @IsNumber()
    @IsPositive()
    estatura:number;

    @IsNumber()
    @IsPositive()
    peso:number;
    
    @IsOptional()
    rutaFoto?:string;
    
    @IsOptional()
    telefonoCasa?:string;
    
    @IsOptional()
    telefonoCelular?:string;
    
    @IsOptional()
    correoElectronico?:string;
    
    @IsOptional()
    password?:string;
    codigoPostal:string;
    estado:string;
    municipio:string;
    colonia:string;
    calle:string;
    afiliacionMedica:string;
    
    @IsOptional()
    alergias?:string;
    
    @IsOptional()
    padecimientos?:string;
    fechaDeRegistro:Date;

    @IsBoolean()
    @IsOptional()
    activo?:boolean;
    
    @IsOptional()
    numero?:string;

    @IsIn(['Tipo A','Tipo B','Tipo AB','Tipo O'])
    tipoDeSangre:string;
    
    @IsOptional()
    folio?:number;
}
