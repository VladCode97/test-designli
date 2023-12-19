import { SESRecordModel } from '../domain/model/RecordModel';
import { TSESOutput } from '../domain/types/SESType';

export function transformerInformationSESRecord(
  sesRecord: SESRecordModel,
): TSESOutput {
  const transformedData: TSESOutput = {
    spam: '',
    virus: '',
    dns: '',
    mes: '',
    retrasado: '',
    emisor: '',
    receptor: [],
  };
  const domainRegex = /@dominio\.com$/i;
  sesRecord.Records.forEach((record) => {
    const { ses } = record;
    const { receipt, mail } = ses;
    const { spamVerdict, virusVerdict, spfVerdict, dkimVerdict, dmarcVerdict } =
      receipt;

    const isSpam = spamVerdict.status === 'PASS';
    const isVirus = virusVerdict.status === 'PASS';
    const isDns =
      spfVerdict.status === 'PASS' &&
      dkimVerdict.status === 'PASS' &&
      dmarcVerdict.status === 'PASS';

    transformedData.spam = `spamVerdic a boolean, PASS = ${isSpam}`;
    transformedData.virus = `virusVerdic a boolean, PASS = ${isVirus}`;
    transformedData.dns = `spfVerdic, dkimVeredict, dmarcVeredict a boolean, si todos PASS = ${isDns}`;
    const date = new Date(mail.timestamp);
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const month = monthNames[date.getMonth()];
    transformedData.mes = `mail.timestamp a mes como texto: ${month}`;
    const isRetrasado = receipt.processingTimeMillis > 1000;
    transformedData.retrasado = `processingTimeMillis a boolean, > 1000 = ${isRetrasado}`;
    transformedData.emisor = `mail.source a usuario de correo sin @dominio.com: ${
      domainRegex.test(mail.source) ? '' : mail.source
    }`;
    transformedData.receptor = mail.destination.map(
      (recipient) =>
        `mail.source a usuario de correo sin @dominio.com: ${
          domainRegex.test(recipient) ? '' : recipient
        }`,
    );
  });
  return transformedData;
}
