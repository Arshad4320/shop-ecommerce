import mongoose from "mongoose";
import { Server } from "http";

import app from "./app";
import config from "./app/config/config";

let server: Server;
const port = config;
async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    server = app.listen(port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();
