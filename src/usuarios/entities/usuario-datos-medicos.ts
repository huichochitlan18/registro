import { ChildEntity, Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./usuario.entity";
// import { Usuario } from './';

@Entity()
export class UsuarioDatosMedicos{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text',{
        // unique:true
        default:"ninguna"
    })
    afiliacionMedica:string;

    @Column('text',{
        // unique:true
        default:"ninguna"
    })
    alergias:string;

    @Column('text',{
        // unique:true
        default:"ninguna"
    })
    padecimientos:string;
    
    @Column('float',{
        nullable:true
    })
    estatura:number;

    @Column('float',{
      nullable:true
    })
    peso:number;
  
    @Column('text',{
        nullable:true
    })
    tipoSangre:string;

    
    // @OneToOne(
    //     ()=>Usuario,
    //     (usuario)=> usuario.datosMedicos
    // )
    // @JoinColumn()
    // usuario:Usuario

}