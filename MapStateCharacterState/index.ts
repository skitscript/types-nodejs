import type { EnteringMapStateCharacterState } from "../EnteringMapStateCharacterState";
import type { ExitingMapStateCharacterState } from "../ExitingMapStateCharacterState";
import type { NotPresentMapStateCharacterState } from "../NotPresentMapStateCharacterState";
import type { PresentMapStateCharacterState } from "../PresentMapStateCharacterState";

/**
 * The state of a character in a mapped document.
 */
export type MapStateCharacterState =
  | NotPresentMapStateCharacterState
  | EnteringMapStateCharacterState
  | PresentMapStateCharacterState
  | ExitingMapStateCharacterState;
