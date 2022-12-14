import { IsBoolean, IsIn, IsNumber, IsOptional, IsPositive, isString, IsString, MinLength } from "class-validator";
import { UsuariosDatosContactoEmergencia } from "../entities";
import { CreateUsuarioDatosMedicosDto } from "./create-usuario-datos-contacto.dto";
import { CreateUsuarioDatosContactoDto } from './create-usuario-datos-medicos.dto';

export class CreateUsuarioDto {

    @IsString()
    @MinLength(1)
    correo: string;

    @IsString()
    @MinLength(5)
    @IsOptional()
    contrasena:string

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
    // @MinLength(1)
    fechaNacimiento:string;

    @IsIn(['hombre','mujer'])
    sexo:string;

    @IsString()
    @MinLength(1)
    curp:string;

    @IsIn(['activo','baja'])
    @IsOptional()
    estado?:string;

    @IsIn(['admin','alumno','instructor'])
    @IsOptional()
    rol:string;

    @IsOptional()
    datosMedicos?: CreateUsuarioDatosMedicosDto

    @IsOptional()
    datosContacto?: CreateUsuarioDatosContactoDto

    @IsOptional()
    datosContactoEmergencia?: UsuariosDatosContactoEmergencia



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
