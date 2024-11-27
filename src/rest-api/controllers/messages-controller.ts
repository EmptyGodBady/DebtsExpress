import { Request, Response } from "express";
import messagesModel from "../models/messages-model";
import { IMessage } from "../../lib/interfaces/interfaces";
import { deflateRaw } from "zlib";

class MessagesController {
  async getAllMessages(req: Request, res: Response) {
    const messages = await messagesModel.getAllMessages();
    res.status(200).json(messages);
  }
  async createMessage(req: Request, res: Response) {
    const { description, sender_id, debt_id }: IMessage = req.body;
    await messagesModel.createMessage({ description, sender_id, debt_id });
  }
}
export default new MessagesController();
