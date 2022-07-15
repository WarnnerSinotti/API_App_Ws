import routes from "../../routes";
import cors from "cors";
import express, { Express } from "express";

export default function appMiddleware(app: Express): void {

  app.use(cors());
  app.use(express.json());
  app.use(routes);
}
