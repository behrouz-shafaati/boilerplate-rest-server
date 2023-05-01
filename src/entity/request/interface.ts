import { IModel } from "../../core/interface";

export interface IRequestPayload {
  parentSlug?: string;
  slug: string;
  method: string;
  name?: string;
  description?: string;
  active?: boolean;
}

export default interface IRequest extends IModel, IRequestPayload {}
