import { Injectable } from '@nestjs/common';
import * as request from 'request';
import * as cheerio from 'cheerio';

@Injectable()
export class AppService {
  getHello(): any {
    const scrapingResult = [];
    const scrapingObj = {};

    request(
      'https://dzone.com/articles/best-programming-jokes-amp-quotes',
      (error, response, html) => {
        const cheerioAPI = cheerio.load(html);
        // body 값을 가져온다.
        const content = cheerioAPI('div[class=content-html]');
        content.find('ol li em').map((i, element) => {
          const text = cheerioAPI(element).text();
          if (text.includes('–')) {
            const quoteArr = text.split('–');
            scrapingObj['quotes'] = quoteArr[0]
              .replace('“', '')
              .replace('”', '')
              .trim();
            scrapingObj['authors'] = quoteArr[1].trim();
            scrapingResult.push(scrapingObj);
          }
        });
        
        console.log(
          `TCL ~ [app.service.ts] ~ line ~ 28 ~ scrapingResult`,
          scrapingResult,
        );
      },
    );
  }
}
