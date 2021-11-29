import type { Identifier } from "../Identifier";

/**
 * Two or more identifiers are different but normalize to the same value.
 */
export type InconsistentIdentifierEvent = {
  /**
   * Identifies the type of event.
   */
  readonly type: `inconsistentIdentifier`;

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
