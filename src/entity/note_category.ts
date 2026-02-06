import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  JoinColumn,
  OneToMany,
  ManyToOne
} from 'typeorm';
import {Exclude} from "class-transformer";
import NoteContent from './note_content';

@Entity("note_categories")
export default class NoteCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  parent_id: number;

  @Column()
  name: string;

  @Column()
  sort: number;

  @OneToMany(_ => NoteContent, noteContent => noteContent.category)
  @JoinColumn({ name: "id" })
  contents: NoteContent[]

  @ManyToOne(_ => NoteCategory, noteCategory => noteCategory.children)
  @JoinColumn({ name: "parent_id" })
  parent: NoteCategory

  @OneToMany(_ => NoteCategory, noteCategory => noteCategory.parent)
  @JoinColumn({ name: "id" })
  children: NoteCategory[]

  @Exclude()
  @CreateDateColumn()
  created_at: Date;

  @Exclude()
  @UpdateDateColumn()
  updated_at: Date;

  @Exclude()
  @DeleteDateColumn()
  deleted_at: Date;
}