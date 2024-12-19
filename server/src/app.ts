
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import router from "./routes";
import rateLimit from "express-rate-limit";
import config from "./config";
import cors from 'cors';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

//rate limiter
const limiter = rateLimit({
  windowMs: 1000, 
  max: 4, 
  message: 'Too many requests, please try again later.',
  statusCode: config.HTTP_STATUS_CODE.MANY_REQUEST, 
});

app.use(cors());
app.use(limiter);

app.use('/api', router);


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});