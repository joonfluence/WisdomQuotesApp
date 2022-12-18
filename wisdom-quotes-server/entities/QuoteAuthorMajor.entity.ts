import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { QuoteAuthor } from './QuoteAuthor.entity';

@Entity('Quote__Author__Major', { schema: 'WisdomQuotesApp' })
export class QuoteAuthorMajor {
  @PrimaryGeneratedColumn({ type: 'int', name: 'MajorId' })
  majorId: number;

  @Column('varchar', { name: 'Name', nullable: true, length: 20 })
  name: string | null;

  @OneToMany(() => QuoteAuthor, (quoteAuthor) => quoteAuthor.major)
  quoteAuthors: QuoteAuthor[];
}
