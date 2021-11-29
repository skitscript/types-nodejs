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
   * The name of the background to display.
   */
  readonly background: Identifier;
};
