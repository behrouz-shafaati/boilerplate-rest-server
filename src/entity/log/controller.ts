import db from "../../core/db";
import baseController from "../../core/controller";
import logService from "./service";

class controller extends baseController {
  private variables: string;
  private targetId: any;
  private success: boolean;
  private error: any;
  private previousValues: string;
  /**
   * constructor function for controller.
   *
   * @remarks
   * This method is part of the logController class extended of the main parent class baseController.
   *
   * @param service - logService
   *
   * @beta
   */
  constructor(service: any) {
    super(service);
    this.variables = "";
    this.previousValues = "";
    this.success = false;
  }

  setVariables(variables: string) {
    this.variables = variables;
  }

  setTarget(id: any) {
    this.targetId = id;
  }

  setResultStatus(success: boolean) {
    this.success = success;
  }
  setError(error: any) {
    this.error = error;
  }
  setPreviousValues(previousValues: any) {
    this.previousValues = JSON.stringify(previousValues);
  }
  save() {
    this.create({
      params: {
        variables: this.variables,
        targetId: this.targetId,
        success: this.success,
        error: this.error,
      },
    });
  }
}

export default new controller(new logService(db.Log));
