import type { Condition } from "../Condition";
import type { Identifier } from "../Identifier";

/**
 * Specifies that the interpreter is to jump to a label.
 */
export type JumpStatement = {
  /**
   * Identifies the type of statement.
   */
  readonly type: `jump`;

  /**
   * The line from which the statement originates.
   */
  readonly line: number;

  /**
   * The name of the label to which to jump.
   */
  readonly label: Identifier;

  /**
   * The condition which must be met for the jump to occur; when null, the jump
   * is unconditional.
   */
  readonly condition: null | Condition;
};
