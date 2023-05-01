import db from "../../core/db";
import baseController from "../../core/controller";
import roleService from "./service";

class controller extends baseController {
  /**
   * constructor function for controller.
   *
   * @remarks
   * This method is part of the roleController class extended of the main parent class baseController.
   *
   * @param service - roleService
   *
   * @beta
   */
  constructor(service: any) {
    super(service);
  }
}

export default new controller(new roleService(db.Role));
