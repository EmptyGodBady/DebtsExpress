import Joi from "joi";

const messageSchema = Joi.object({
  description: Joi.string().min(1).required(),
  sender_id: Joi.string().min(1).required(),
  debt_id: Joi.string().min(1).required(),
});
export default messageSchema;
