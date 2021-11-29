import type { Identifier } from "../Identifier";

/**
 * A condition which passes when all flags in a set are clear.
 */
export type EveryFlagClearCondition = {
  /**
   * Indicates the type of condition.
   */
  readonly type: `everyFlagClear`;

  /**
   * The names of the flags which must be clear for the condition to pass.
   */
  readonly flags: ReadonlyArray<Identifier>;
};
