import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuoteAuthor } from 'entities/QuoteAuthor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(QuoteAuthor)
    private authorRepository: Repository<QuoteAuthor>,
  ) {}

  // GET DETAIL
  async findByName(name: string): Promise<QuoteAuthor> {
    return this.authorRepository.findOneBy({
      name,
    });
  }

  // GET LIST
  async findAll(): Promise<QuoteAuthor[]> {
    return this.authorRepository.find();
  }

  // INSERT
  async insertAuthor(QuoteCreateDto: QuoteAuthor): Promise<QuoteAuthor> {
    const author = new QuoteAuthor();
    author.name = QuoteCreateDto.name;
    author.authorId = QuoteCreateDto.authorId;
    author.bornedAt = QuoteCreateDto.bornedAt;
    author.diedAt = QuoteCreateDto.diedAt;
    author.job = QuoteCreateDto.job;
    author.twitter = QuoteCreateDto.twitter;
    author.major = QuoteCreateDto.major;
    this.authorRepository.save(author).catch((err: any) => {
      console.log(err);
    });
    return author;
  }
}
