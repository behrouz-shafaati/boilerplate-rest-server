import { IModel } from "../../core/interface";

export interface IRolePayload {
  slug: string;
  method: string;
  name?: string;
  description?: string;
  acceptTiket?: boolean;
  titleInTiket?: string;
  active?: boolean;
}

export default interface IRole extends IModel, IRolePayload {}
