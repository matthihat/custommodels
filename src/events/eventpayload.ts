export interface EventPayload {
  // the data carried by this event; specifics would depend on the event type
  // it could be anything: string, number, object, etc.
  [key: string]: any;
}