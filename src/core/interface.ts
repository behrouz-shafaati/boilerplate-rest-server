export {
  IModel,
  // IReqDataSources,
  IResponse,
  IPagination,
  ICreate,
  IFind,
  IFindById,
  IFindOne,
  IUpdate,
  IQueryResult,
};

// req contetnt interface
// interface IReqDataSources {
//   readonly ip: string;
//   readonly user: IUser;
// }

// All mongoose interfaces extends from this interface
interface IModel {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
  deleted?: Boolean;
}

// All server response interface
interface IResponse<T> {
  ok: number;
  message: string;
  data: IResponseData<T>;
}

interface IResponseData<T> {
  result: T[];
  nextPage: number;
  totalPages: number;
  totalDocument: number;
}

type IPagination = {
  page: number;
  perPage: number;
};

interface ILog {
  variables?: any;
  successful: boolean;
  error: any;
}

// DB Query interfaces

interface ICreate {
  params: any;
  saveLog?: boolean;
}
interface IFind {
  filters?: object;
  pagination?: IPagination;
  saveLog?: boolean;
}
interface IFindById {
  id: any;
  saveLog?: boolean;
}
interface IFindOne {
  filters: any;
  saveLog?: boolean;
}
interface IUpdate {
  filters: any;
  params: any;
  saveLog?: boolean;
}

interface IQueryResult {
  data: any;
  nextPage: number;
  totalPages: number;
  totalDocument: number;
}
