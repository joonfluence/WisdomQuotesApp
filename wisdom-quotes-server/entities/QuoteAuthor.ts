import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { QuoteAuthorMajor } from "./QuoteAuthorMajor";
import { QuoteAuthorBook } from "./QuoteAuthorBook";
import { QuoteQuote } from "./QuoteQuote";

@Index("Quote__Author_FK", ["majorId"], {})
@Entity("Quote__Author", { schema: "WisdomQuotesApp" })
export class QuoteAuthor {
  @PrimaryGeneratedColumn({ type: "int", name: "AuthorId", unsigned: true })
  authorId: number;

  @Column("varchar", { name: "Name", comment: "작가이름", length: 45 })
  name: string;

  @Column("int", {
    name: "BornedAt",
    nullable: true,
    comment: "탄생시기",
    unsigned: true,
  })
  bornedAt: number | null;

  @Column("varchar", {
    name: "E_Image",
    nullable: true,
    comment: "작가 이미지",
    length: 100,
  })
  eImage: string | null;

  @Column("int", { name: "DiedAt", nullable: true, unsigned: true })
  diedAt: number | null;

  @Column("varchar", {
    name: "Job",
    nullable: true,
    comment: "직업명",
    length: 20,
  })
  job: string | null;

  @Column("int", { name: "MajorId", nullable: true })
  majorId: number | null;

  @Column("varchar", {
    name: "Twitter",
    nullable: true,
    comment: "트위터 계정",
    length: 100,
  })
  twitter: string | null;

  @ManyToOne(
    () => QuoteAuthorMajor,
    (quoteAuthorMajor) => quoteAuthorMajor.quoteAuthors,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "MajorId", referencedColumnName: "majorId" }])
  major: QuoteAuthorMajor;

  @OneToMany(() => QuoteAuthorBook, (quoteAuthorBook) => quoteAuthorBook.author)
  quoteAuthorBooks: QuoteAuthorBook[];

  @OneToMany(() => QuoteQuote, (quoteQuote) => quoteQuote.author)
  quoteQuotes: QuoteQuote[];
}
