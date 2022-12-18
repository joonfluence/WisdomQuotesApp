import { Quote } from 'entities/Quote.entity';

export interface QuoteService {
  findAll(): Promise<Quote[]>;
  insertQuote(Quote: Quote): Promise<void>;
}
