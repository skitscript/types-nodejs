/**
 * A line was not in any known format.
 */
export interface UnparsableError {
  /**
   * Identifies the type of error.
   */
  readonly type: 'unparsable'

  /**
   * The line from which the error originates.
   */
  readonly line: number

  /**
   * The column on which the error started in the original document.
   */
  readonly fromColumn: number

  /**
   * The column on which the error ended in the original document.
   */
  readonly toColumn: number
}
