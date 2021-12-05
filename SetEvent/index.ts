import type { Identifier } from "..";

/**
 * Specifies that a flag is to be set.
 */
export type SetEvent = {
  /**
   * Identifies the type of event.
   */
  readonly type: `set`;

  /**
   * The line from which the event originates.
   */
  readonly line: number;

  /**
   * The names of the flag which is to be set.
   */
  readonly flag: Identifier;
};
