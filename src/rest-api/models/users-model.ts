import { Users } from "@prisma/client";
import { IUser } from "../../lib/interfaces/interfaces";
import prisma from "../../lib/prisma/prismaClient";

class UsersModel {
  async createUser({ name }: IUser) {
    return prisma.users.create({
      data: {
        name,
      },
    });
  }

  async getAllUsers(): Promise<Users[]> {
    return prisma.users.findMany();
  }

  async deleteUser(id: string): Promise<Users> {
    return prisma.users.delete({
      where: { id },
    });
  }
}
export default new UsersModel();
