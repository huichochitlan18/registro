import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

import { Usuario,UsuarioDatosMedicos, UsuariosDatosContacto, UsuariosDatosContactoEmergencia } from './entities';
import { validate as isUUID } from 'uuid';
import createReport from 'docx-templates';
import * as fs from 'fs';
import { join } from 'path';




@Injectable()
export class UsuariosService {

  private readonly logger = new Logger('UsuariosService');

  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
    @InjectRepository(UsuarioDatosMedicos)
    private readonly usuarioDatosMedicosRepository: Repository<UsuarioDatosMedicos>,
    @InjectRepository(UsuariosDatosContacto)
    private readonly usuarioDatosContactoRepository: Repository<UsuariosDatosContacto>,
    @InjectRepository(UsuariosDatosContactoEmergencia)
    private readonly usuarioDatosContactoEmergenciaRepository: Repository<UsuariosDatosContactoEmergencia>

  ) { }

  async create(createUsuarioDto: CreateUsuarioDto) {

    try {
      const {datosContactoEmergencia={},datosContacto={}, datosMedicos={} ,...crearUsuario }=createUsuarioDto;

      console.log(datosContacto,datosMedicos,crearUsuario);

      // const {...crearUsuario }=createUsuarioDto;
      // const {...datosMedicos }=createUsuarioDto.datosMedicos;
      // const {...datosContacto }=createUsuarioDto.datosContacto;

      // const usuario = this.usuarioRepository.cre
      const usuario = this.usuarioRepository.create({
        ...crearUsuario,
        datosMedicos: this.usuarioDatosMedicosRepository.create(datosMedicos),
        datosContacto:this.usuarioDatosContactoRepository.create(datosContacto),
        datosContactoEmergencia:this.usuarioDatosContactoEmergenciaRepository.create(datosContactoEmergencia)
      });

      await this.usuarioRepository.save(usuario);
      return usuario;
    } catch (error) {
      this.handleDBExceptions(error);
    }

  }

  async findAll(paginationDto: PaginationDto) {
    //const apiSecret = fs.readFileSync(join(process.cwd(), './src/docs/inscripcion-plantilla.docx')).toString();
    //console.log(apiSecret);
    // const template = fs.readFileSync(join(process.cwd(),'./src/docs/inscripcion-plantilla.docx'));
    // //console.log(template);
    // const buffer = await createReport({
    //   template,
    //   data: {
    //     test: 'John',
    //     surname: 'Appleseed',
    //   },
    //   cmdDelimiter: ['{{', '}}']
    // });
    // return buffer
    //fs.writeFileSync('report.docx', buffer);
    const { limit = 10, offset = 0 } = paginationDto;

    return await this.usuarioRepository.find({
      take: limit,
      skip: offset,
      relations:{
        datosMedicos:true
      }
      //to do relaciones
    });
  }

  async findOne(q: string) {

    let usuario: Usuario;

    if (isUUID(q)) {
      usuario = await this.usuarioRepository.findOneBy({ id: q });
    } else {
      const queryBuilder = this.usuarioRepository.createQueryBuilder();
      usuario = await queryBuilder.where('correo = :correo or curp = :curp' , {
        correo: q,
        curp:q,
      }).getOne();
      // const queryBuilder = this.usuarioRepository.createQueryBuilder();
      // usuario = await queryBuilder.where('UPPER(nombre) = :nombre', {
      //   nombre: q.toUpperCase()
      // }).getOne();
    }

    // const usuario = await this.usuarioRepository.findOneBy({id});
    if (!usuario)
      throw new NotFoundException(`Usuario con el id ${q} no encontrado`)
    return usuario;
  }

  async update(id: string, updateUsuarioDto: UpdateUsuarioDto) {

    // const usuario = await this.usuarioRepository.preload({
    //   id: id,
    //   ...updateUsuarioDto
    // })

    // if (!usuario) throw new NotFoundException(`Usuario con el id ${id} no encontrado`)

    // try {
    //   await this.usuarioRepository.save(usuario);
    //   return usuario;
    // } catch (error) {
    //   this.handleDBExceptions(error);
    // }

    // return usuario;
  }

  async remove(id: string) {
    const usuario = await this.findOne(id);
    await this.usuarioRepository.remove(usuario);
  }

  private handleDBExceptions(error: any) {
    if (error.code == '23505') {
      throw new BadRequestException(error.detail);
    }
    this.logger.error(error);
    throw new InternalServerErrorException('view server logs')
  }
}
