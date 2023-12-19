import { Injectable } from '@nestjs/common';
import { simpleParser } from 'mailparser';
import { readFile } from 'fs/promises';
import axios from 'axios';
import { MailParserErrorEnum } from '../domain/enums/errors.enum';

@Injectable()
export class MailParserService {


  async findJsonInMail(emailFilePath: string): Promise<any> {
    try {
      const emailContent = await readFile(emailFilePath, 'utf8');
      const parsedEmail = await simpleParser(emailContent);
      // #1 Case in which the following is attached
      if (parsedEmail.attachments.length > 0) {
        return this.findJsonAttachment(parsedEmail.attachments);
      }
      // #2 Case when the json is in the body
      else if (parsedEmail.html) {
        return this.findJsonBody(parsedEmail.html.toString());
      } else {
        return MailParserErrorEnum.NOT_FOUND_FILE;
      }
    } catch (_) {
      throw new Error(MailParserErrorEnum.NOT_FOUND_FILE);
    }
  }

  private async findJsonBody(htmlContent: string) {
    const regex = /href="(.*?)"/;
    const urlMatchRegex = htmlContent.match(regex);
    if (urlMatchRegex && urlMatchRegex[1]) {
      try {
        const urlExtracted = urlMatchRegex[1];
        return (await axios.get(urlExtracted)).data;
      } catch (exception) {
        throw new Error(exception.message);
      }
    }
  }

  private findJsonAttachment(attachments: Array<unknown>) {
    const jsonAttachment: any = attachments.find(
      (attachment: any) => attachment.contentType === 'application/json',
    );
    if (jsonAttachment) {
      const jsonContent = Buffer.from(
        jsonAttachment.content.toString('base64'),
        'base64',
      ).toString('utf-8');
      return JSON.parse(jsonContent);
    } else {
      return MailParserErrorEnum.NOT_FOUND_JSON_ATTACHED_FILE;
    }
  }
}
