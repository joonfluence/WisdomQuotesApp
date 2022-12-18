import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Quote } from 'entities/Quote.entity';
import { Repository } from 'typeorm';
import { QuoteService } from './QuoteService.interface';

@Injectable()
export class QuoteServiceImpl implements QuoteService {
  constructor(
    @InjectRepository(Quote)
    private quoteRepository: Repository<Quote>,
  ) {}

  // GET DETAIL
  async findById(quoteId: number): Promise<Quote> {
    return this.quoteRepository.findOneBy({
      quoteId,
    });
  }

  // GET DETAIL
  async findByContents(contents: string): Promise<Quote> {
    return this.quoteRepository.findOneBy({
      contents,
    });
  }

  // GET LIST
  async findAll(): Promise<Quote[]> {
    return this.quoteRepository.find();
  }

  // INSERT
  async insertQuote(QuoteCreateDto: Quote): Promise<void> {
    const quote = new Quote();
    quote.author = QuoteCreateDto.author;
    quote.authorId = QuoteCreateDto.authorId;
    quote.contents = QuoteCreateDto.contents;
    quote.createdAt = new Date();
    this.quoteRepository.save(quote).catch((err: any) => {
      console.log(err);
    });
  }
}
