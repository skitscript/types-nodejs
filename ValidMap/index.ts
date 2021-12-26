import type { MapCharacter } from "../MapCharacter";
import type { MapState } from "../MapState";

/**
 * The result of successfully mapping a parsed document.
 */
export type ValidMap = {
  /**
   * Indicates the type of result.
   */
  readonly type: `valid`;

  /**
   * The characters found within the parsed document.
   */
  readonly characters: ReadonlyArray<MapCharacter>;

  /**
   * The states which were found in the parsed document.
   * There is always at least one.
   * The user is first be shown the first.
   */
  readonly states: ReadonlyArray<MapState>;
};
