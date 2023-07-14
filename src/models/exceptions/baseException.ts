import { HttpException } from "@nestjs/common";
import { Origin } from "src/enums/origin";

export class BaseException extends HttpException {
  origin: Origin;
  cause: any;
  path: string;
  timestamp: string;

  constructor(
    message: string | object,
    status: number,
    origin: Origin,
    cause: any,
    path: string,
    timestamp: string
  ) {
    super(message, status);
    this.cause = cause;
    this.origin = origin;
    this.path = path;
    this.timestamp = timestamp;
  }
}
