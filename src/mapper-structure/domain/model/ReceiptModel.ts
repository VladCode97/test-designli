import { ActionModel } from './ActionModel';
import { VerdictModel } from './VerdictModel';

export interface ReceiptModel {
  timestamp: string;
  processingTimeMillis: number;
  recipients: string[];
  spamVerdict: VerdictModel;
  virusVerdict: VerdictModel;
  spfVerdict: VerdictModel;
  dkimVerdict: VerdictModel;
  dmarcVerdict: VerdictModel;
  dmarcPolicy: string;
  action: ActionModel;
}
