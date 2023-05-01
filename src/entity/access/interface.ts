import { IModel } from "../../core/interface";

export interface IaccessPayload {
  slug: string;
  method: string;
  name?: string;
  description?: string;
  acceptTiket?: boolean;
  titleInTiket?: string;
  active?: boolean;
}

export default interface Iaccess extends IModel, IaccessPayload {}
