/**
 * A line was not in any known format.
 */
export type UnparsableEvent = {
  /**
   * Identifies the type of event.
   */
  readonly type: `unparsable`;

  /**
   * The line from which the event originates.
   */
  readonly line: number;
};
