import { Router } from "express";

const routes = Router();

routes.get("/", (req: any, res: any) => res.send("hello world"));
routes.get('/user', (req: any, res: any) => res.send('user'));

export default routes;
