import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn('uuid')
    id:string;
        
    @Column('text',{
        // unique:true
    })
    nombre

    @Column('text',{
        // unique:true
    })
    apellidoPaterno

    @Column('text',{
        // unique:true
    })
    apellidoMaterno

    @Column('text',{
        unique:true
    })
    curp

    @Column('date',{
        // unique:true
        nullable:true
    })
    fechaDeNacimiento

    @Column('text',{
        // unique:true
    })
    sexo

    @Column('float',{
        // unique:true
        // precision:2,
        // scale:2,
        // default:0
    })
    estatura

    @Column('float',{
        // unique:true
        // precision:3,
        // scale:2,
        // default:0
    })
    peso

    @Column('text',{
        // unique:true
        nullable:true
    })
    rutaFoto

    @Column('text',{
        // unique:true
        nullable:true
    })
    telefonoCasa

    @Column('text',{
        // unique:true
        nullable:true
    })
    telefonoCelular

    @Column('text',{
        // unique:true
        nullable:true
    })
    correoElectronico

    @Column('text',{
        // unique:true
        nullable:true
    })
    password

    @Column('text',{
        // unique:true
        nullable:true
    })
    codigoPostal

    @Column('text',{
        // unique:true
        nullable:true
    })
    estado

    @Column('text',{
        // unique:true
        nullable:true
    })
    municipio

    @Column('text',{
        // unique:true
        nullable:true
    })
    colonia

    @Column('text',{
        // unique:true
        nullable:true
    })
    calle

    @Column('text',{
        // unique:true
        nullable:true
    })
    afiliacionMedica

    @Column('text',{
        // unique:true
        nullable:true
    })
    alergias

    @Column('text',{
        // unique:true
        nullable:true
    })
    padecimientos

    @Column('timestamp',{
        // default:Date.now()
        // unique:true
        nullable:true
    })
    fechaDeRegistro:Date

    @Column('boolean',{
        // unique:true
        nullable:true
    })
    activo

    @Column('text',{
        // unique:true
        nullable:true
    })
    numero

    @Column('text',{
        // unique:true
    })
    tipoDeSangre

    @Column('int',{
        // unique:true
        nullable:true
    })
    folio

    // @BeforeInsert()
    // validarCURP(){
    //     this.curp = this.curp.toUpperCase()
    //     // if (this.curp) {
            
    //     // }
    // }
}
