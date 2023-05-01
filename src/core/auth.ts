import { Request, Response, NextFunction } from "express";
export default (req: Request, res: Response, next: NextFunction) => {
  console.log("Time:", Date.now());
  console.log(req.method);
  console.log(req.url);
  console.log(req.originalUrl);
  console.log(req.headers["content-type"]);
  console.log(req.params);
  console.log("");
  next();
};
