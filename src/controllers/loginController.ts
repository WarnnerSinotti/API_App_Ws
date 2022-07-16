import { Request, Response } from "express";
import loginModel from "../api/database/loginModel";

const loginControler = {
  async index(req: Request, res: Response): Promise<Response> {
    var users = await loginModel.find();
    return res.json(users);
  },

  async findById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    let user = await loginModel.findById(id);
    return res.json(user);
  },

  async create(req: Request, res: Response): Promise<Response> {
    const {
      name,
      email, 
      password, 
      passwordConfirm, 
      dataNascimento,
     } = req.body;

    let users:any = await loginModel.create(req.body);
    return res.json(users);

  },
};

export default loginControler;
