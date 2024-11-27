export interface IUser {
  id?: string;
  name: string;
}
export interface IMessage {
  id?: string;
  description: string;
  sender_id: string;
  debt_id: string;
}
export interface IDebt {
  id?: string;
  amount: number;
  debtor_id: string;
  creditor_id: string;
  messages?: IMessage;
}
