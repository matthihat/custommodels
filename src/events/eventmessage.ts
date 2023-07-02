import {EventMetadata} from "./eventmetadata";

export interface EventMessage {
  metadata: EventMetadata;
  payload: EventPayload;
}