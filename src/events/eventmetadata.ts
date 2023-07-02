import {Origin} from "../enums/origin";

export interface EventMetadata {
  eventId: string; // unique identifier for this event
  eventName: string; // name of the event
  timestamp: Date; // time the event was generated
  origin: Origin; // the service or component that generated this event
}