import { Inject, Injectable } from '@nestjs/common';
import * as request from 'request';
import * as cheerio from 'cheerio';
import { QuoteServiceImpl } from 'domain/Quote/Quote.service';
import { AuthorService } from 'domain/Author/Author.service';
import { QuoteAuthor } from 'entities/QuoteAuthor.entity';
import { Quote } from 'entities/Quote.entity';

@Injectable()
export class AppService {
  constructor(
    private readonly quoteService: QuoteServiceImpl,
    private readonly authorService: AuthorService,
  ) {}

  getHello(): any {
    request(
      'https://dzone.com/articles/best-programming-jokes-amp-quotes',
      (error, response, html) => {
        const cheerioAPI = cheerio.load(html);
        // body 값을 가져온다.
        const content = cheerioAPI('div[class=content-html]');
        content.find('ol li em').map(async (i, element) => {
          let scrapingObj = {};
          let newAuthor: QuoteAuthor;
          const text = cheerioAPI(element).text();
          if (text.includes('–')) {
            const quoteArr = text.split('–');
            scrapingObj['quotes'] = quoteArr[0]
              .replace('“', '')
              .replace('”', '')
              .trim();
            scrapingObj['authors'] = quoteArr[1].trim();

            // 이름이 DB에 저장되어 있는지 조회한다.
            const author: QuoteAuthor = await this.authorService.findByName(
              scrapingObj['authors'],
            );

            // 값이 없으면 추가해준다.
            if (author == null) {
              const createDto = new QuoteAuthor();
              createDto.name = scrapingObj['authors'];
              newAuthor = await this.authorService.insertAuthor(createDto);
            }

            // 인용구가 이미 저장되어 있는지 조회한다.
            const quote: Quote = await this.quoteService.findByContents(
              scrapingObj['quotes'],
            );

            // 값이 없으면 추가해준다.
            if (quote == null) {
              const QuoteCreateDto = new Quote();
              if (author !== null) {
                QuoteCreateDto.authorId = author.authorId;
              } else {
                QuoteCreateDto.authorId = newAuthor.authorId;
              }
              QuoteCreateDto.contents = scrapingObj['quotes'];
              QuoteCreateDto.createdAt = new Date();
              this.quoteService.insertQuote(QuoteCreateDto);
            }
          }
        });
      },
    );
  }
}
