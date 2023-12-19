import { SES_RECORD_DTO_EXAMPLE, SES_RECORD_OUTPUT_TEST } from "./mapperJsonInformation.util";
import { transformerInformationSESRecord } from "./transformerInformation.util";

describe('Mapper structure', () => {

    beforeEach(() => {
    });

    describe('Tranformer parser', () => {
        it('Verify transformer', () => {
            expect(transformerInformationSESRecord(
                {
                    Records: SES_RECORD_DTO_EXAMPLE
                } as any
            )).toEqual(SES_RECORD_OUTPUT_TEST);
        })
    })
});