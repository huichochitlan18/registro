import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario, UsuarioDatosMedicos, UsuariosDatosContacto, UsuariosDatosContactoEmergencia } from './entities';


@Module({
  controllers: [UsuariosController],
  providers: [UsuariosService],
  imports: [
    TypeOrmModule.forFeature([
      Usuario, 
      UsuarioDatosMedicos, 
      UsuariosDatosContacto, 
      UsuariosDatosContactoEmergencia
    ])
  ]
})
export class UsuariosModule { }
