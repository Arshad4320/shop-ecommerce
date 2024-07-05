import mongoose from "mongoose";

import app from "./app";
import config from "./app/config/config";

const port = config;
const main = async () => {
  try {
    await mongoose.connect(config.database_url as string);
    app.listen(port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

main();
