import { Messages } from "@prisma/client";
import { IMessage } from "../../lib/interfaces/interfaces";
import prisma from "../../lib/prisma/prismaClient";

class MessagesModel {
  async createMessage({ description, sender_id, debt_id }: IMessage) {
    return prisma.messages.create({
      data: {
        description,
        sender_id,
        debt_id,
      },
    });
  }

  async getAllMessages(): Promise<Messages[]> {
    return prisma.messages.findMany();
  }
}
export default new MessagesModel();
