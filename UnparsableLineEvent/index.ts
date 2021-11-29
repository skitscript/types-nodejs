/**
 * A line was not in any known format.
 */
export type UnparsableLineEvent = {
  /**
   * Identifies the type of event.
   */
  readonly type: `unparsableLine`;

  /**
   * The line from which the event originates.
   */
  readonly line: number;
};
