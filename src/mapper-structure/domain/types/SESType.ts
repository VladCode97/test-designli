import { MailModel } from '../model/MailModel';
import { ReceiptModel } from '../model/ReceiptModel';

export type TSES = {
  receipt: ReceiptModel;
  mail: MailModel;
};

export type TSESOutput = {
  spam: string;
  virus: string;
  dns: string;
  mes: string;
  retrasado: string;
  emisor: string;
  receptor: Array<string>;
};

export type TRecordInput = {
  eventVersion: string;
  ses: TSES;
  eventSource: string;
};
