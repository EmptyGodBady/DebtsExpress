import Joi from "joi";

const debtSchema = Joi.object({
  amount: Joi.number().min(1).required(),
  debtor_id: Joi.string().min(1).required(),
  creditor_id: Joi.string().min(1).required(),
});
export default debtSchema;
