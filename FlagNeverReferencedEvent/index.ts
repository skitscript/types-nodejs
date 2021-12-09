import type { Identifier } from "../Identifier";

/**
 * A flag is set but never referenced.
 */
export type FlagNeverReferencedEvent = {
  /**
   * Identifies the type of event.
   */
  readonly type: `flagNeverReferenced`;

  /**
   * The line from which the event originates.
   */
  readonly line: number;

  /**
   * The name of the flag.
   */
  readonly name: Identifier;
};
