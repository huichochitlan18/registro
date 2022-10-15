import { IsBoolean, IsIn, IsNumber, IsOptional, IsPositive, isString, IsString, MinLength } from "class-validator";

export class CreateUsuarioDatosContactoDto {

    @IsString()
    @MinLength(1)
    afiliacionMedica: string;

    @IsString()
    @MinLength(5)
    @IsOptional()
    alergias:string

    @IsString()
    @MinLength(1)
    padecimientos:string;

    @IsNumber()
    @IsPositive()
    estatura:number;

    @IsNumber()
    @IsPositive()
    peso:number;

    @IsString()
    @IsIn(['Tipo A','Tipo B','Tipo AB','Tipo O'])
    tipoSangre:string;

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
