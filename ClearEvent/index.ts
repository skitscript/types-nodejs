import type { Identifier } from "..";

/**
 * Specifies that one or more flags are to be cleared.
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
   * The names of the flags which are to be cleared.
   */
  readonly flags: ReadonlyArray<Identifier>;
};
