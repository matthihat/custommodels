import { EventMessage } from "../eventmessage";

export interface GetUserEvent extends EventMessage {
  payload: {
    userId: string;
    email: string;
    username: string;
  };
}
