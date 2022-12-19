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
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      envFilePath:
        process.env.NODE_ENV === 'development' ? '.env.dev' : '.env.test',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: function (configService: ConfigService) {
        return {
          type: 'mysql',
          host: configService.get('database.host'),
          port: +configService.get('database.port'),
          username: configService.get('database.username'),
          password: configService.get('database.password'),
          database: configService.get('database.name'),
          entities: [
            EImage,
            Quote,
            QuoteAuthor,
            QuoteAuthorBook,
            QuoteAuthorMajor,
          ],
          synchronize: true,
        };
      },
      inject: [ConfigService],
    }),
    QuoteModule,
    AuthorModule,
  ],
  controllers: [AppController],
  providers: [AppService, QuoteService, AuthorService],
})
export class AppModule {}
