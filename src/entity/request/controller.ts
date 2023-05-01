import db from "../../core/db";
import baseController from "../../core/controller";
import requestService from "./service";

class controller extends baseController {
  /**
   * constructor function for controller.
   *
   * @remarks
   * This method is part of the requestController class extended of the main parent class baseController.
   *
   * @param service - requestService
   *
   * @beta
   */
  constructor(service: any) {
    super(service);
  }
}

export default new controller(new requestService(db.Request));
