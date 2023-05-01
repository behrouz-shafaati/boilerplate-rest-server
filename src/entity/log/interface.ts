import { IModel } from "../../core/interface";

export interface ILogPayload {
  userId: any;
  actionId: any;
  targetId?: any;
  ip: string;
  allowed: boolean;
  success?: boolean;
  previousValues?: object;
  variables?: object;
  error?: any;
}

export default interface ILog extends IModel, ILogPayload {}
