import { IsBoolean, IsIn, IsNumber, IsOptional, IsPositive, isString, IsString, MinLength } from "class-validator";

export class CreateUsuarioDatosMedicosDto {

    @IsString()
    @MinLength(1)
    numeroCelular: string;

    @IsString()
    @MinLength(5)
    @IsOptional()
    numeroCasa:string

    @IsString()
    @MinLength(1)
    cp:string;

    @IsNumber()
    @IsPositive()
    estado:string;

    @IsNumber()
    @IsPositive()
    municipio:number;

    @IsString()
    colonia:string;

    @IsString()
    calle:string;

    @IsString()
    numero:string;

    // @IsIn(['hombre','mujer'])
    // sexo:string;

    // @IsString()
    // @MinLength(1)
    // curp:string;

    // @IsIn(['activo','baja'])
    // @IsOptional()
    // estado?:string;

    // @IsIn(['admin','alumno','instructor'])
    // @IsOptional()
    // rol:string;

    // @IsOptional()
    // datosMedicos?: UsuarioDatosMedicos


    // @IsNumber()
    // @IsPositive()
    // estatura:number;

    // @IsNumber()
    // @IsPositive()
    // peso:number;
    
    // @IsOptional()
    // rutaFoto?:string;
    
    // @IsOptional()
    // telefonoCasa?:string;
    
    // @IsOptional()
    // telefonoCelular?:string;
    
    // @IsOptional()
    // correoElectronico?:string;
    
    // @IsOptional()
    // password?:string;
    // codigoPostal:string;
    // estado:string;
    // municipio:string;
    // colonia:string;
    // calle:string;
    // afiliacionMedica:string;
    
    // @IsOptional()
    // alergias?:string;
    
    // @IsOptional()
    // padecimientos?:string;
    // fechaDeRegistro:Date;

    // @IsBoolean()
    // @IsOptional()
    // activo?:boolean;
    
    // @IsOptional()
    // numero?:string;

    // @IsIn(['Tipo A','Tipo B','Tipo AB','Tipo O'])
    // tipoDeSangre:string;
    
    // @IsOptional()
    // folio?:number;
}
