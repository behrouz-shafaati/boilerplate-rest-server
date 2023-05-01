import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

import auth from "./src/core/auth";

dotenv.config();

let app: Express = express();
const port = process.env.PORT;

// middlwares
app.use(auth);

// resolvers
require("./src/entity/user/resolver")(app);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
