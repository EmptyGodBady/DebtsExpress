import { Request, Response } from "express";
import UsersModel from "../models/users-model";
import { IUser } from "../../lib/interfaces/interfaces";

class UsersController {
  async getAllUsers(req: Request, res: Response) {
    const users = await UsersModel.getAllUsers();
    res.status(200).json(users);
    console.log("Returning users:", users);
    console.log(123);
  }

  async createUser(req: Request, res: Response) {
    const { name }: IUser = req.body;
    await UsersModel.createUser({ name });
  }

  async deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    await UsersModel.deleteUser(id);
  }
}
export default new UsersController();
