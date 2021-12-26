import type { MapStateInteraction } from "../MapStateInteraction";
import type { MapStateCharacter } from "../MapStateCharacter";
import type { MapStateRun } from "../MapStateRun";

/**
 * A state within a map of a parsed document.
 */
export type MapState = {
  /**
   * The states of the characters, in the same order as the array of characters
   * in the mapping result.  This may include characters which are never
   * visible.
   */
  readonly characters: ReadonlyArray<MapStateCharacter>;

  /**
   * The (normalized) names of the characters which speak the current
   * line/present the current menu.  This may include characters which are never
   * or not currently visible.
   */
  readonly speakers: ReadonlyArray<string>;

  /**
   * The (normalized) name of the background which is displayed in this state.
   * This may be null, in which case, a white background should be displayed
   * instead.
   */
  readonly background: null | string;

  /**
   * The runs of text of the current line.  This may be null.
   */
  readonly line: null | ReadonlyArray<MapStateRun>;

  /**
   * Describes how the user can interact with this state.
   */
  readonly interaction: MapStateInteraction;
};
