import type { IdentifierReference } from "../IdentifierReference";

/**
 * Two or more labels share a name.
 */
export type DuplicateLabelEvent = {
  /**
   * Identifies the type of event.
   */
  readonly type: `duplicateLabel`;

  /**
   * The first occurrence of the label.
   */
  readonly first: IdentifierReference;

  /**
   * The second occurrence of the label.
   */
  readonly second: IdentifierReference;
};
