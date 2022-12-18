import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuoteAuthor } from 'entities/QuoteAuthor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([QuoteAuthor])],
  exports: [TypeOrmModule],
})
export class AuthorModule {}
