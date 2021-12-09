/**
 * A line was determined to be impossible to reach.
 */
export type UnreachableEvent = {
  /**
   * Identifies the type of event.
   */
  readonly type: `unreachable`;

  /**
   * The line from which the event originates.
   */
  readonly line: number;
};
