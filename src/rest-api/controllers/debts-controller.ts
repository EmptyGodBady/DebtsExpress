import { IDebt } from "../../lib/interfaces/interfaces";
import { Request, Response } from "express";
import debtsModel from "../models/debts-model";

class DebtsController {
  async getAllDebts(req: Request, res: Response) {
    const debts = await debtsModel.getAllDebts();
    res.status(200).json(debts);
  }

  async createDebt(req: Request, res: Response) {
    const { amount, debtor_id, creditor_id }: IDebt = req.body;
    await debtsModel.createDebt({ amount, debtor_id, creditor_id });
  }

  async updateDebt(req: Request, res: Response) {
    const { id } = req.params;
    const { amount, debtor_id, creditor_id } = req.body;
    await debtsModel.updateDebt(id, { amount, debtor_id, creditor_id });
  }
  async deleteDebt(req: Request, res: Response) {
    const { id } = req.params;
    await debtsModel.deleteDebt(id);
  }
}
export default new DebtsController();
