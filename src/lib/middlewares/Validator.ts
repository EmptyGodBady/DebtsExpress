import { Request, Response, NextFunction } from "express";
import createHttpError from "http-errors";
import Joi from "joi";
import Validators from "../validators";

type ValidatorKeys = keyof typeof Validators;

export default function (validator: ValidatorKeys) {
  if (!Validators.hasOwnProperty(validator)) {
    throw new Error(`'${validator}' validator does not exist`);
  }

  return async function (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const validated = await (
        Validators[validator] as Joi.ObjectSchema
      ).validateAsync(req.body);
      req.body = validated;
      next();
    } catch (err) {
      if (err instanceof Error && "isJoi" in err) {
        return next(createHttpError(422, { message: err.message }));
      }
      next(createHttpError(500));
    }
  };
}
