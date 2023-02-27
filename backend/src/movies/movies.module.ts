import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { DataMovieConstants } from './constants';

@Module({
  imports: [HttpModule],
  controllers: [MoviesController],
  providers: [MoviesService, DataMovieConstants],
})
export class MoviesModule {}
