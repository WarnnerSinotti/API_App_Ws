import { Express } from "express";
import { connectMongoDB } from "../database";
import appMiddleware from "./middleware";

export default function appConfig(app: Express): void {
  
  connectMongoDB();
  appMiddleware(app);

}
