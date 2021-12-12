import type { Condition } from "../Condition";
import type { Identifier } from "../Identifier";

/**
 * Specifies that the interpreter is to jump to a label.
 */
export type JumpInstruction = {
  /**
   * Identifies the type of instruction.
   */
  readonly type: `jump`;

  /**
   * The line from which the instruction originates.
   */
  readonly line: number;

  /**
   * The name of the label to which to jump.
   */
  readonly label: Identifier;

  /**
   * The statement index to which to jump.
   */
  readonly statementIndex: number;

  /**
   * The condition which must be met for the jump to occur; when null, the jump
   * is unconditional.
   */
  readonly condition: null | Condition;
};
