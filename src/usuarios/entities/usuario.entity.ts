import { IsOptional } from "class-validator";
import { BeforeInsert, Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

import { UsuarioDatosMedicos, UsuariosDatosContacto,UsuariosDatosContactoEmergencia } from './';
// import { UsuariosDatosContactoEmergencia } from './usuario-datos-contacto-emergencia';

@Entity()
export class Usuario {
    
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column('text',{
        unique:true
    })
    correo:string;

    @Column('text',{
        nullable:true,
        // default:""
    })
    contrasena:string;
    
    @Column('text',{
        // unique:true
    })
    nombre:string;

    @Column('text',{
        // unique:true
    })
    apellidoPaterno:string;

    @Column('text',{
        // unique:true
    })
    apellidoMaterno:string;

    @Column('date',{
        // unique:true
        // nullable:true
    })
    fechaNacimiento:string;

    @Column('text',{
        // unique:true
    })
    sexo:string;

    @Column('text',{
        unique:true
    })
    curp:string;

    @Column('text',{
        default: 'activo'
    })
    estado:string;

    @Column('text',{
        default: 'alumno'
    })
    rol:string;

    @OneToOne(
        ()=>UsuarioDatosMedicos,
        (datosMedicos)=> datosMedicos.id,
        { cascade:true }        
    )
    // @IsOptional()
    @JoinColumn()
    datosMedicos?:UsuarioDatosMedicos
    // datosMedicos?:UsuarioDatosMedicos
    
    @OneToOne(
        ()=>UsuariosDatosContacto,
        (datosContacto)=> datosContacto.id,
        { cascade:true }        
    )
    // @IsOptional()
    @JoinColumn()
    datosContacto?:UsuariosDatosContacto
    // datosMedicos?:UsuarioDatosMedicos

    @OneToOne(
        ()=>UsuariosDatosContactoEmergencia,
        (datosContactoEmergencia)=> datosContactoEmergencia.id,
        { cascade:true }        
    )
    // @IsOptional()
    @JoinColumn()
    datosContactoEmergencia?:UsuariosDatosContactoEmergencia
    // datosMedicos?:UsuarioDatosMedicos

   

    

    // @Column('numeric',{
    //     // unique:true
    //     // precision:2,
    //     // scale:2,
    //     // default:0
    // })
    // estatura
    // @Column('float',{
    //     // unique:true
    //     // precision:2,
    //     // scale:2,
    //     // default:0
    // })
    // estatura

    // @Column('float',{
    //     // unique:true
    //     // precision:3,
    //     // scale:2,
    //     // default:0
    // })
    // peso

    // @Column('text',{
    //     // unique:true
    //     nullable:true
    // })
    // rutaFoto

    // @Column('text',{
    //     // unique:true
    //     nullable:true
    // })
    // telefonoCasa

    // @Column('text',{
    //     // unique:true
    //     nullable:true
    // })
    // telefonoCelular

    // @Column('text',{
    //     // unique:true
    //     nullable:true
    // })
    // correoElectronico

    // @Column('text',{
    //     // unique:true
    //     nullable:true
    // })
    // password

    // @Column('text',{
    //     // unique:true
    //     nullable:true
    // })
    // codigoPostal

    // @Column('text',{
    //     // unique:true
    //     nullable:true
    // })
    // estado

    // @Column('text',{
    //     // unique:true
    //     nullable:true
    // })
    // municipio

    // @Column('text',{
    //     // unique:true
    //     nullable:true
    // })
    // colonia

    // @Column('text',{
    //     // unique:true
    //     nullable:true
    // })
    // calle

    // @Column('text',{
    //     // unique:true
    //     nullable:true
    // })
    // afiliacionMedica

    // @Column('text',{
    //     // unique:true
    //     nullable:true
    // })
    // alergias

    // @Column('text',{
    //     // unique:true
    //     nullable:true
    // })
    // padecimientos

    // @Column('timestamp',{
    //     // default:Date.now()
    //     // unique:true
    //     nullable:true
    // })
    // fechaDeRegistro:Date

    // @Column('boolean',{
    //     // unique:true
    //     nullable:true
    // })
    // activo

    // @Column('text',{
    //     // unique:true
    //     nullable:true
    // })
    // numero

    // @Column('text',{
    //     // unique:true
    // })
    // tipoDeSangre

    // @Column('int',{
    //     // unique:true
    //     nullable:true
    // })
    // folio

    // @BeforeInsert()
    // validarCURP(){
    //     this.curp = this.curp.toUpperCase()
    //     // if (this.curp) {
            
    //     // }
    // }
    // Nataci??n - Pensionado/Jubilado/Adulto Mayor - 1 d??a a la semana 1 clase a la semana
    // Nataci??n - Pensionado/Jubilado/Adulto Mayor - 2 d??as a la semana 2 clase a la semana
    // Nataci??n - Pensionado/Jubilado/Adulto Mayor - 3 d??as a la semana 3 clase a la semana
    // Nataci??n - Pensionado/Jubilado/Adulto Mayor - 4 d??as a la semana 4 clase a la semana
    // Nataci??n - Pensionado/Jubilado/Adulto Mayor - 5 d??as a la semana 5 clase a la semana
    // Nataci??n - Pensionado/Jubilado/Adulto Mayor - 6 d??as a la semana 6 clase a la semana
    // Nataci??n - Pensionado/Jubilado/Adulto Mayor - 7 d??as a la semana 7 clase a la semana
    // Nataci??n - Individual - 1 d??a a la semana 1 clase a la semana
    // Nataci??n - Individual - 2 d??as a la semana 2 clases a la semana
    // Nataci??n - Individual - 3 d??as a la semana 3 clases a la semana
    // Nataci??n - Individual - 4 d??as a la semana 4 clases a la semana
    // Nataci??n - Individual - 5 d??as a la semana 5 clases a la semana
    // Nataci??n - Individual - 6 d??as a la semana 6 clases a la semana
    // Nataci??n - Individual - 7 d??as a la semana 7 clases a la semana
    // Nataci??n - Cuervos - Lunes a viernes 5 clases a la semana 
    // Nataci??n - Cuervos - S??bado 1 clase a la semana

}
