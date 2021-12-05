import type { Identifier } from "..";

/**
 * Specifies that one or more flags are to be set.
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
   * The names of the flags which are to be set.
   */
  readonly flags: ReadonlyArray<Identifier>;
};
