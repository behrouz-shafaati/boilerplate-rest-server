import { IModel } from "../../core/interface";

export interface IUserPayload extends IModel {
  roleIds: number[];
  mobile: string;
  email: string;
  passwordHash: string;
  firstName: string;
  lastName: string;
  imageId: number;
  imageUrl: string;
  language: string;
  darkMode: boolean;
  active: boolean;
}
export interface IUser extends IModel, IUserPayload {}
