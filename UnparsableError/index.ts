/**
 * A line was not in any known format.
 */
export type UnparsableError = {
  /**
   * Identifies the type of error.
   */
  readonly type: `unparsable`;

  /**
   * The line from which the error originates.
   */
  readonly line: number;
};
