import type { Identifier } from "../Identifier";

/**
 * Specifies a change of location.
 */
export type LocationEvent = {
  /**
   * Identifies the type of event.
   */
  readonly type: `location`;

  /**
   * The line from which the event originates.
   */
  readonly line: number;

  /**
   * The name of the background to display.
   */
  readonly background: Identifier;
};
