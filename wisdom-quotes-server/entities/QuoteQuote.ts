import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { QuoteAuthor } from "./QuoteAuthor";

@Index("fk_Quote_Author_idx", ["authorId"], {})
@Entity("Quote__Quote", { schema: "WisdomQuotesApp" })
export class QuoteQuote {
  @Column("int", { name: "AuthorId", unsigned: true })
  authorId: number;

  @PrimaryGeneratedColumn({ type: "int", name: "QuoteId" })
  quoteId: number;

  @Column("varchar", { name: "Contents", comment: "명언", length: 200 })
  contents: string;

  @Column("datetime", { name: "CreatedAt", comment: "생성시기" })
  createdAt: Date;

  @Column("varchar", {
    name: "UpdatedAt",
    nullable: true,
    comment: "수정시기",
    length: 45,
  })
  updatedAt: string | null;

  @ManyToOne(() => QuoteAuthor, (quoteAuthor) => quoteAuthor.quoteQuotes, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "AuthorId", referencedColumnName: "authorId" }])
  author: QuoteAuthor;
}
