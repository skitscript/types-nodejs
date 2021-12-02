import type { IdentifierReference } from "../IdentifierReference";

/**
 * Two or more identifiers are different but normalize to the same value.
 */
export type InconsistentIdentifierEvent = {
  /**
   * Identifies the type of event.
   */
  readonly type: `inconsistentIdentifier`;

  /**
   * The first occurrence of the identifier.
   */
  readonly first: IdentifierReference;

  /**
   * The second occurrence of the identifier.
   */
  readonly second: IdentifierReference;
};
