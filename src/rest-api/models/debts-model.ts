import { Debt } from "@prisma/client";
import { IDebt } from "../../lib/interfaces/interfaces";
import prisma from "../../lib/prisma/prismaClient";

class DebtsModel {
  async createDebt({ amount, debtor_id, creditor_id }: IDebt) {
    return prisma.debt.create({
      data: {
        amount,
        debtor_id,
        creditor_id,
      },
    });
  }

  async getAllDebts(): Promise<Debt[]> {
    return prisma.debt.findMany();
  }

  async updateDebt(
    id: string,
    { amount, debtor_id, creditor_id }: Partial<IDebt>
  ) {
    return prisma.debt.update({
      where: { id },
      data: {
        ...(amount !== undefined && { amount }),
        ...(debtor_id !== undefined && { debtor_id }),
        ...(creditor_id !== undefined && { creditor_id }),
      },
    });
  }

  async deleteDebt(id: string): Promise<Debt> {
    return prisma.debt.delete({
      where: { id },
    });
  }
}
export default new DebtsModel();
