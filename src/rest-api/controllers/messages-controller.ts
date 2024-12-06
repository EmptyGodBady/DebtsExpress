import { Request, Response } from "express";
import messagesModel from "../models/messages-model";
import { IMessage } from "../../lib/interfaces/interfaces";

class MessagesController {
  async getMessages(req: Request, res: Response) {
    const { debt_id } = req.params;
    const messages = await messagesModel.getMessages(debt_id);
    console.log(messages);
    res.status(200).json(messages);
  }
  async createMessage(req: Request, res: Response) {
    const { description, sender_id, debt_id }: IMessage = req.body;
    await messagesModel.createMessage({ description, sender_id, debt_id });
  }
}
export default new MessagesController();
