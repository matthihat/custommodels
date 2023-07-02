import {EventMetadata} from "./eventmetadata";
import {EventPayload} from "./eventpayload";

export interface EventMessage {
  metadata: EventMetadata;
  payload: EventPayload;
}