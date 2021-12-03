import type { Identifier } from "../Identifier";

/**
 * The same identifier is present two or more times in the same list.
 */
export type DuplicateIdentifierInListEvent = {
  /**
   * Identifies the type of event.
   */
  readonly type: `duplicateIdentifierInList`;

  /**
   * The line from which the event originates.
   */
  readonly line: number;

  /**
   * The first occurrence of the identifier.
   */
  readonly first: Identifier;

  /**
   * The second occurrence of the identifier.
   */
  readonly second: Identifier;
};
