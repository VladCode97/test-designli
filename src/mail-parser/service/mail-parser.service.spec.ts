import { MailParserErrorEnum } from '../domain/enums/errors.enum';
import { MailParserService } from './MailParser.service';

describe('MailParserService', () => {
    let mailParserService: MailParserService;

    beforeEach(() => {
        mailParserService = new MailParserService();
    });

    describe('findJson', () => {


        it('should return NOT_FOUND_FILE when there are no attachments and no HTML content', async () => {
            const emailFilePath = '/Users/luisbonilla/Downloads/🎅 Advent of CSS.ml';
            await expect(mailParserService.findJsonInMail(emailFilePath)).rejects.toThrow(MailParserErrorEnum.NOT_FOUND_FILE);
        });

        it('should return JSON content from the attachments', async () => {
            const emailFilePath = '/Users/luisbonilla/Downloads/Hello world.eml';
            const result = await mailParserService.findJsonInMail(emailFilePath);
            expect(result).toEqual({
                "Records": [
                    {
                        "name": "Luis",
                        "age": 35
                    },
                    {
                        "name": "Paola",
                        "age": 34
                    }
                ]

            });
        });
    });
});