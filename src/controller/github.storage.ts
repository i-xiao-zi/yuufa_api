import multer from "multer";
import e from "express";
import {hash} from "typeorm/util/StringUtils";

class GithubStorage implements multer.StorageEngine {
  _handleFile(req: e.Request, file: Express.Multer.File, callback: (error?: any, info?: Partial<Express.Multer.File>) => void): void {
    const chunks: Buffer[] = [];
    file.stream.on('data',  (chunk: Buffer) => chunks.push(chunk))
    file.stream.on('error', (error) => callback(error));
    file.stream.on('end', () => {
      const buffer = Buffer.concat(chunks);
      callback(null, {
        filename: file.filename,
        path: file.path,
        size: buffer.length,
        originalname: file.originalname,
        mimetype: file.mimetype,
        destination: 'github',
        // buffer,
      });
      console.log(hash(buffer.toString()))
    })
    callback()
  }

  _removeFile(req: e.Request, file: Express.Multer.File, callback: (error: (Error | null)) => void): void {
    callback(null)
  }
}

export default () => new GithubStorage()