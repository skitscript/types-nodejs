/**
 * A line was determined to be impossible to reach.
 */
export type UnreachableWarning = {
  /**
   * Identifies the type of warning.
   */
  readonly type: `unreachable`;

  /**
   * The line from which the warning originates.
   */
  readonly line: number;
};
