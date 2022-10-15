import { IsOptional } from "class-validator";
import { ChildEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UsuariosDatosContactoEmergencia{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @IsOptional()
    @Column('text',{
        
        // unique:true
        nullable:true
    })
    nombre:string;

    @Column('text',{
        // unique:true
        nullable:true
    })
    apellidoPaterno:string;

    @Column('text',{
        // unique:true
        nullable:true
    })
    apellidoMaterno:string;

    @Column('text',{
        // unique:true
        // default:"ninguna"
        nullable:true
    })
    parentesco:string;

    @Column('text',{
        // unique:true
        default:"-"
    })
    numeroCelular:string;

    @Column('text',{
        // unique:true
        default:"-"
    })
    numeroCasa:string;

    @Column('text',{
        // unique:true
        default:"-"
    })
    correo:string;

    // @Column('text',{
    //     // unique:true
    //     // default:"ninguna"
    //     nullable:true
    // })
    // cp:string;
    
    // @Column('text',{
    //     // nullable:true
    //     nullable:true
    // })
    // estado:string;

    // @Column('text',{
    // //   nullable:true
    // nullable:true
    // })
    // municipio:string;
  
    // @Column('text',{
    //     // nullable:true
    //     nullable:true
    // })
    // colonia:string;

    // @Column('text',{
    //     nullable:true
    //     // nullable:true
    // })
    // calle:string;

    // @Column('text',{
    //     // nullable:true
    //     default:"-"
    // })
    // numero:string;
    
    // @OneToOne(
    //     ()=>Usuario,
    //     (usuario)=> usuario.datosContacto
    // )
    // @JoinColumn()
    // usuario:Usuario

}