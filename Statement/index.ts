import type { ClearStatement } from "../ClearStatement";
import type { EmoteStatement } from "../EmoteStatement";
import type { EntryAnimationStatement } from "../EntryAnimationStatement";
import type { ExitAnimationStatement } from "../ExitAnimationStatement";
import type { JumpStatement } from "../JumpStatement";
import type { LabelStatement } from "../LabelStatement";
import type { LineStatement } from "../LineStatement";
import type { LocationStatement } from "../LocationStatement";
import type { MenuOptionStatement } from "../MenuOptionStatement";
import type { SetStatement } from "../SetStatement";
import type { SpeakerStatement } from "../SpeakerStatement";

/**
 * A statement parsed from a document.
 */
export type Statement =
  | ClearStatement
  | EmoteStatement
  | EntryAnimationStatement
  | ExitAnimationStatement
  | JumpStatement
  | LabelStatement
  | LineStatement
  | LocationStatement
  | MenuOptionStatement
  | SetStatement
  | SpeakerStatement;
