import { Origin } from "src/enums/origin";

export interface ResponseExceptionDto {
  message: string;
  statusCode: number;
  cause: any;
  origin: Origin;
  path: string;
  timestamp: string;
  stack?: any;
}
