import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { validate as isUUID } from 'uuid';
@Injectable()
export class UsuariosService {

  private readonly logger = new Logger('UsuariosService');

  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,

  ) { }

  async create(createUsuarioDto: CreateUsuarioDto) {
    try {
      const usuario = this.usuarioRepository.create(createUsuarioDto);
      await this.usuarioRepository.save(usuario);
      return usuario;
    } catch (error) {
      this.handleDBExceptions(error);
    }

  }

  findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;

    return this.usuarioRepository.find({
      take: limit,
      skip: offset,
    });
  }

  async findOne(q: string) {
    let usuario: Usuario;
    if (isUUID(q)) {
      usuario = await this.usuarioRepository.findOneBy({ id: q });
    } else {
      const queryBuilder = this.usuarioRepository.createQueryBuilder();
      usuario = await queryBuilder.where('nombre = :nombre', {
        nombre: q
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

    const usuario = await this.usuarioRepository.preload({
      id: id,
      ...updateUsuarioDto
    })
    
    if (!usuario) throw new NotFoundException(`Usuario con el id ${id} no encontrado`)

    try {
      await this.usuarioRepository.save(usuario);
      return usuario;
    } catch (error) {
      this.handleDBExceptions(error);
    }
    
    return usuario;
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
