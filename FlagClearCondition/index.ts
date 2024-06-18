import type { Identifier } from '../Identifier'

/**
 * A condition which passes when a flag is clear.
 */
export interface FlagClearCondition {
  /**
   * Indicates the type of condition.
   */
  readonly type: 'flagClear'

  /**
   * The name of the flag which must be clear for the condition to pass.
   */
  readonly flag: Identifier
}
