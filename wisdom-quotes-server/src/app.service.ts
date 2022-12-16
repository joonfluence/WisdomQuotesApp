import { Injectable } from '@nestjs/common';
import * as request from 'request';
import * as cheerio from 'cheerio';

@Injectable()
export class AppService {
  getHello(): any {
    const scrapingResult = {};

    request('https://twitter.com/CodeWisdom', (error, response, html) => {
      const $ = cheerio.load(html);
      const bodyList = $(
        '.css-901oao .css-16my406 .r-poiln3 .r-bcqeeo .r-qvutc0',
      ).map((i, element) => {
        console.log(`TCL ~ [aprp.service.ts] ~ line ~ 30 ~ element`, element);
      });
    });

    // request("https://finance.naver.com/marketindex/exchangeDailyQuote.nhn", function (err, res, body) {
    //   const $ = cheerio.load(body);
    //   const bodyList = $(".tbl_exchange tbody tr").map(function (i, element) {
    //       scrapingResult['date'] = String($(element).find('td:nth-of-type(1)').text());
    //       scrapingResult['the_basic_rate'] =  String($(element).find('td:nth-of-type(2)').text());
    //       scrapingResult['buy'] =  String($(element).find('td:nth-of-type(4)').text());
    //       scrapingResult['sell'] =  String($(element).find('td:nth-of-type(5)').text());
    //       console.log(scrapingResult)
    //   });
    // });
  }
}
