import type { Event } from "../Event";

/**
 * A Skitscript document.
 */
export type Document = {
  /**
   * The events parsed from the document.
   */
  readonly events: ReadonlyArray<Event>;
};
