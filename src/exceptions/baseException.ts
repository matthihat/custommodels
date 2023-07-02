import {HttpException, HttpStatus} from "@nestjs/common";
import {HttpExceptionOptions} from "@nestjs/common/exceptions/http.exception";
import {Origin} from "../enums/origin";

export class BaseException extends HttpException {
  origin: Origin;

  constructor(message: string, status: HttpStatus, origin: Origin, options?: HttpExceptionOptions) {
    super(message, status, options);
    this.origin = origin;
  }
}