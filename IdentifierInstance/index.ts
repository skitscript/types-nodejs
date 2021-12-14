import type { IdentifierReference } from "..";
import type { IdentifierType } from "../IdentifierType";

/**
 * An instance of an identifier within a document.
 */
export type IdentifierInstance = {
  readonly type: IdentifierType;
} & IdentifierReference;
