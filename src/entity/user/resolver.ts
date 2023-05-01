import { Request, Response } from "express";
import { IRequestPayload } from "../request/interface";
import requestCtrl from "../request/controller";
module.exports = resolver;

function resolver(app: any) {
  // resolve login
  const loginRequestPaylod: IRequestPayload = {
    slug: "login",
    method: "POST",
    name: "ورود",
  };
  requestCtrl.create({ params: loginRequestPaylod });
  app.get("/login", (req: Request, res: Response) => {
    res.send("Hello login!");
  });
}
