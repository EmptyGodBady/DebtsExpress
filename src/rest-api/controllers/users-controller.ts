import { Request, Response } from "express";
import UsersModel from "../models/users-model";

class UsersController {
  async getAllUsers(req: Request, res: Response) {
    const { id } = req.params;
    await UsersModel.getAllUsers();
  }

  async createUser(req: Request, res: Response) {
    const { name } = req.body;
    await UsersModel.createUser(name);
  }

  async deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    await UsersModel.deleteUser(id);
  }
}
