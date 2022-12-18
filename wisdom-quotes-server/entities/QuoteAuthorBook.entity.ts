import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { QuoteAuthor } from './QuoteAuthor.entity';

@Index('Quote__Author__Book_AuthorId_IDX', ['authorId'], {})
@Entity('Quote__Author__Book', { schema: 'WisdomQuotesApp' })
export class QuoteAuthorBook {
  @Column('int', { primary: true, name: 'BookId', comment: '작가ID' })
  bookId: number;

  @Column('varchar', { name: 'Title', length: 50 })
  title: string;

  @Column('varchar', { name: 'E_Image', nullable: true, length: 100 })
  eImage: string | null;

  @Column('varchar', { name: 'Description', nullable: true, length: 100 })
  description: string | null;

  @Column('date', { name: 'PublishedAt', nullable: true })
  publishedAt: string | null;

  @Column('int', { name: 'AuthorId', unsigned: true })
  authorId: number;

  @ManyToOne(() => QuoteAuthor, (quoteAuthor) => quoteAuthor.quoteAuthorBooks, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'AuthorId', referencedColumnName: 'authorId' }])
  author: QuoteAuthor;
}
