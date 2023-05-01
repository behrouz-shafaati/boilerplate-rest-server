import { Request, Response } from "express";
import { IRequestPayload } from "../request/interface";
import requestCtrl from "../request/controller";
module.exports = resolver;

function resolver(app: any) {
  // resolve create post
  const loginRequestPaylod: IRequestPayload = {
    slug: "create_access",
    method: "POST",
    name: "ایجاد دسترسی جدید",
  };
  requestCtrl.create({ params: loginRequestPaylod });
  app.post("/access", (req: Request, res: Response) => {
    res.send("for create new access");
  });
}
