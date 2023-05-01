// import { IAction } from "../entity/action/interface";
import ILog, { ILogPayload } from "../entity/log/interface";
import log from "../entity/log/controller";
import {
  ICreate,
  IFind,
  IFindById,
  IFindOne,
  IPagination,
  IResponse,
  IUpdate,
} from "./interface";
import logController from "../entity/log/controller";

export default class controller {
  private service: any;
  // private log: ILog;
  /**
   * constructor function for baseController.
   *
   * @remarks
   * This method is part of the main parent class baseController.
   *
   * @param service - The service of the desired entity
   *
   * @beta
   */
  constructor(service: any) {
    this.service = service;
  }
  /**
   * Returns the model as an object.
   *
   * @remarks
   * This method is part of the main parent class baseController.
   *
   * @param filters - The filters to find models
   * @returns the desired entity model as an object
   *
   * @beta
   */
  async find(payload: IFind) {
    payload = { filters: {}, ...payload };
    let result: any;
    log.setVariables(JSON.stringify(payload));
    try {
      result = await this.service.find(payload.filters, payload.pagination);
      if (payload.saveLog) {
        if (result) {
          log.setTarget(result.id);
          log.setResultStatus(true);
        } else {
          log.setResultStatus(false);
        }
        log.save();
      }
    } catch (error: any) {
      log.setResultStatus(false);
      log.setError(error);
      log.save();
    }
    return result;
  }
  /**
   * Returns the model as an object.
   *
   * @remarks
   * This method is part of the main parent class baseController.
   *
   * @param id - The string id of the model
   * @returns the desired entity model as an object
   *
   * @beta
   */
  async findById(payload: IFindById) {
    payload = { saveLog: false, ...payload };
    let result: any;
    log.setVariables(JSON.stringify({ id: payload.id }));
    log.setTarget(payload.id);
    try {
      result = await this.service.findById(payload.id);
      if (result) log.setResultStatus(true);
      else log.setResultStatus(false);
      log.save();
    } catch (error: any) {
      log.setResultStatus(false);
      log.setError(error);
      log.save();
    }
    return result;
  }
  /**
   * Search for an entity with specific attributes
   *
   * @remarks
   * This method is part of the main parent class baseController.
   *
   * @param filters - The object with attributes for search
   * @returnsThe first existing model that matches filters as an object
   *
   * @beta
   */
  async findOne(payload: IFindOne) {
    payload = { saveLog: false, ...payload };
    let result: any;
    if (
      typeof payload.filters === "string" ||
      typeof payload.filters === "number"
    ) {
      log.setTarget(payload.filters);
    }
    log.setVariables(JSON.stringify(payload));
    try {
      result = await this.service.findOne(payload.filters);
      if (result) log.setResultStatus(true);
      else log.setResultStatus(false);
      log.save();
    } catch (error: any) {
      log.setResultStatus(false);
      log.setError(error);
      log.save();
    }
    return result;
  }
  /**
   * Returns the new created model as an object.
   *
   * @remarks
   * This method is part of the main parent class baseController.
   *
   * @param payload - The initialize data of the desired entity that you want create it
   * @returns the new created desired entity model as an object
   *
   * @beta
   */
  async create(payload: ICreate): Promise<any> {
    payload = { saveLog: false, ...payload };

    log.setVariables(JSON.stringify(payload));
    let result: any;
    try {
      result = await this.service.create(payload.params);
      if (payload.saveLog) {
        if (result) {
          log.setTarget(result.id);
          log.setResultStatus(true);
        } else {
          log.setResultStatus(false);
        }
        log.save();
      }
    } catch (error: any) {
      log.setResultStatus(false);
      log.setError(error);
      log.save();
    }
    return result;
  }
  /**
   * Update one user.
   *
   * @remarks
   * This method is part of the main parent class baseController.
   *
   * @param filters - filter can be Id user or fields to do serach and find one user
   * @param data - The data that we want update
   * @returns Updated user
   *
   * @beta
   */
  async findOneAndUpdate(payload: IUpdate) {
    payload = { saveLog: false, ...payload };
    let result: any;
    const previousValues = await this.service.findOne({
      filters: payload.filters,
    });
    if (typeof payload.filters === "string" || payload.filters === "number") {
      log.setTarget(payload.filters);
    }
    log.setVariables(JSON.stringify(payload));
    log.setPreviousValues(previousValues);
    try {
      result = await this.service.findOneAndUpdate(
        payload.filters,
        payload.params
      );
      if (result) log.setResultStatus(true);
      else log.setResultStatus(false);
      log.save();
    } catch (error: any) {
      log.setResultStatus(false);
      log.setError(error);
      log.save();
    }
    return result;
  }
  /**
   * Returns the total of documents.
   *
   * @remarks
   * The result does not include deleted documents.
   *
   * @returns The count of documents.
   *
   * @beta
   */
  async countAll(): Promise<number> {
    return this.service.countDocuments({ deleted: false });
  }
  /**
   * Response of successful request
   *
   * @remarks
   * This method is the format for all successful requests
   *
   * @param data - The result of client request
   * @param message - Optional message to understand the result
   * @returns Request result in global format in success
   *
   * @beta
   */
  //   successResponse(
  //     data: any = null,
  //     message: string = ""
  //   ): IResponse | IFindResponse {
  //     // console.log({ ok: 1, message: message, data: data })
  //     return { ok: 1, message: message, data: data };
  //   }
  /**
   * Response of in error request
   *
   * @remarks
   * This method is the format for all in error requests
   *
   * @param message - Optional message for error reason
   * @param data - The result of client request
   * @returns Request result in global format in error
   *
   * @beta
   */
  //   errorResponse(message: string = "", data: any = null): IResponse {
  //     return { ok: 0, message: message, data: data };
  //   }
}
