import { Response } from "express";

export type TypeMeta = {
  code: number;
  message: string;
};

export interface ResponseData<TypeData> extends Response {
  meta: TypeMeta;
  data: TypeData;
}

export default {};
