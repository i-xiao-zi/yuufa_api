import {IsNumber, IsOptional, IsString, Length} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateNoteContent {
  @ApiProperty()
  @IsNumber()
  category_id: number;

  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  content: string;

  @ApiProperty({required: false})
  @IsNumber()
  sort?: number;
}
export class UpdateNoteContent {
  @ApiProperty({required: false})
  @IsNumber()
  category_id?: number;

  @ApiProperty({required: false})
  @IsString()
  title?: string;

  @ApiProperty({required: false})
  @IsString()
  content?: string;

  @ApiProperty({required: false})
  @IsNumber()
  sort?: number;
}