import { CommonHeadersModel } from './CommonHeadersModel';

export interface MailModel {
  timestamp: string;
  source: string;
  messageId: string;
  destination: string[];
  headersTruncated: boolean;
  headers: { name: string; value: string }[];
  commonHeaders: CommonHeadersModel;
}
