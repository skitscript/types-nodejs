import type { Identifier } from "../Identifier";

/**
 * A condition which passes when at least one flag in a set is set.
 */
export type SomeFlagsSetCondition = {
  /**
   * Indicates the type of condition.
   */
  readonly type: `someFlagsSet`;

  /**
   * The names of the flags of which at least one must be set for the condition to pass.
   */
  readonly flags: ReadonlyArray<Identifier>;
};
