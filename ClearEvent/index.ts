import type { Identifier } from "..";

/**
 * Specifies that a flag is to be cleared.
 */
export type ClearEvent = {
  /**
   * Identifies the type of event.
   */
  readonly type: `clear`;

  /**
   * The line from which the event originates.
   */
  readonly line: number;

  /**
   * The name of the flag which is to be cleared.
   */
  readonly flag: Identifier;
};
