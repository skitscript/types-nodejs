import type { Identifier } from "../Identifier";

/**
 * Specifies that a label exists.
 */
export type LabelInstruction = {
  /**
   * Identifies the type of instruction.
   */
  readonly type: `label`;

  /**
   * The line from which the instruction originates.
   */
  readonly line: number;

  /**
   * The name of the label.
   */
  readonly name: Identifier;
};
