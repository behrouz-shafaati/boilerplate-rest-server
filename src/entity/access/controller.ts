import db from "../../core/db";
import baseController from "../../core/controller";
import accessService from "./service";

class controller extends baseController {
  /**
   * constructor function for controller.
   *
   * @remarks
   * This method is part of the accessController class extended of the main parent class baseController.
   *
   * @param service - accessService
   *
   * @beta
   */
  constructor(service: any) {
    super(service);
  }
}

export default new controller(new accessService(db.access));
