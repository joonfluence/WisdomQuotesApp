import { DataSource, Repository } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AuthorRepository {}

export const AuthorProviders = [
  {
    provide: 'AuthorRepository',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(AuthorRepository),
    inject: ['DATA_SOURCE'],
  },
];
