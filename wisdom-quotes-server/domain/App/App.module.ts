import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './App.service';
import { QuoteServiceImpl as QuoteService } from '../Quote/Quote.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EImage } from 'entities/EImage.entity';
import { Quote } from 'entities/Quote.entity';
import { QuoteAuthor } from 'entities/QuoteAuthor.entity';
import { QuoteAuthorBook } from 'entities/QuoteAuthorBook.entity';
import { QuoteAuthorMajor } from 'entities/QuoteAuthorMajor.entity';
import { QuoteModule } from 'domain/Quote/Quote.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from '../../config/configuration';
import * as dotenv from 'dotenv';
import { AuthorModule } from 'domain/Author/author.module';
import { AuthorService } from 'domain/Author/Author.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      database: 'WisdomQuotesApp',
      password: '!@#gmlfkr7236',
      entities: [EImage, Quote, QuoteAuthor, QuoteAuthorBook, QuoteAuthorMajor],
      synchronize: false,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      envFilePath:
        process.env.NODE_ENV === 'development' ? '.env.dev' : '.env.test',
    }),
    QuoteModule,
    AuthorModule
  ],
  controllers: [AppController],
  providers: [AppService, QuoteService, AuthorService],
})
export class AppModule {}
