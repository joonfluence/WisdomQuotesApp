import { DataSource, Repository } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class QuoteRepository {}

export const QuoteProviders = [
  {
    provide: 'QuoteRepository',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(QuoteRepository),
    inject: ['DATA_SOURCE'],
  },
];
