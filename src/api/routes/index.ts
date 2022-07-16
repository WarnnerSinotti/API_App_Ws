import { Router } from "express";
import loginControler from '../../controllers/loginController'

const routes = Router();

routes.get("/", (req: any, res: any) => res.send("hello world"));
routes.get('/users', loginControler.index);
routes.get('/user/:id', loginControler.findById)
routes.post('/users', loginControler.create)

export default routes;
