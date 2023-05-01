import db from "../../core/db";
import baseController from "../../core/controller";
import userService from "./service";

class controller extends baseController {
  /**
   * constructor function for controller.
   *
   * @remarks
   * This method is part of the userController class extended of the main parent class baseController.
   *
   * @param service - userService
   *
   * @beta
   */
  constructor(service: any) {
    super(service);
  }
}

export default new controller(new userService(db.User));
