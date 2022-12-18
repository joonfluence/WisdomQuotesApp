import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("E_Image", { schema: "WisdomQuotesApp" })
export class EImage {
  @PrimaryGeneratedColumn({ type: "int", name: "ImageId", unsigned: true })
  imageId: number;

  @Column("varchar", { name: "fileUrl", length: 45 })
  fileUrl: string;
}
