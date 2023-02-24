import {
  Controller,
  Get,
  InternalServerErrorException,
  Param,
  Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get('searchByTitle')
  async searchByTitle(@Query('title') title: string) {
    try {
      return await this.moviesService.searchByTitle(title);
    } catch (error) {
      throw new InternalServerErrorException(
        'Ocorreu algum erro ao acessar a API',
      );
    }
  }

  @Get('searchById/:id')
  async searchById(@Param('id') id: string) {
    try {
      return await this.moviesService.searchById(id);
    } catch (error) {
      throw new InternalServerErrorException(
        'Ocorreu algum erro ao acessar a API',
      );
    }
  }
}
