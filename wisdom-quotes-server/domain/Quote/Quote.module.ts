import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quote } from 'entities/Quote.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Quote])],
  exports: [TypeOrmModule],
})
export class QuoteModule {}
