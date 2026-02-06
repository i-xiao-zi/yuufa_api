import { Injectable } from '@nestjs/common';
import NoteContentModelService from "./note_content.model";
import NoteCategoryModelService from './note_category.model';

@Injectable()
export default class NoteService {
  constructor(private readonly noteCategoryModelService: NoteCategoryModelService, private readonly noteContentModelService: NoteContentModelService) {}
  async index() {
    return this.noteCategoryModelService.all();
    // return this.noteContentModelService.all();
  }
}
