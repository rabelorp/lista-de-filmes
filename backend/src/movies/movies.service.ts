import { DataMovieConstants } from './constants';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';

@Injectable()
export class MoviesService {
  constructor(
    private readonly http: HttpService,
    private readonly constants: DataMovieConstants,
  ) {}

  url = `${this.constants.DATA_MOVIE_URI}=${process.env.DATA_MOVIE_API_KEY}`;

  async searchByTitle(title: string) {
    const { data }: any = await lastValueFrom(
      this.http.get<string>(`${this.url}&s=${title}`).pipe(map((resp) => resp)),
    );
    return data;
  }

  async searchById(id: string) {
    const { data }: any = await lastValueFrom(
      this.http.get<string>(`${this.url}&i=${id}`),
    );
    return data;
  }
}
