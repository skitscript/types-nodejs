import type { Identifier } from "../Identifier";

/**
 * A flag is referenced but never set.
 */
export type FlagNeverSetEvent = {
  /**
   * Identifies the type of event.
   */
  readonly type: `flagNeverSet`;

  /**
   * The line from which the event originates.
   */
  readonly line: number;

  /**
   * The name of the flag.
   */
  readonly name: Identifier;
};
