import type { Identifier } from "..";

/**
 * A reference to an identifier on a specific line.
 */
export type IdentifierReference = {
  /**
   * The line from which the identifier originates.
   */
  readonly line: number;

  /**
   * The referenced identifier.
   */
  readonly identifier: Identifier;
};
