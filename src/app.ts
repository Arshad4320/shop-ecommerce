import express, { Request, Response } from "express";
import router from "./app/routes";
import cors from "cors";
// express
const app = express();

// parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// application routes
app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
