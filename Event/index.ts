import type { ClearEvent } from "../ClearEvent";
import type { DuplicateIdentifierInListEvent } from "../DuplicateIdentifierInListEvent";
import type { DuplicateLabelEvent } from "../DuplicateLabelEvent";
import type { EmoteEvent } from "../EmoteEvent";
import type { EntryAnimationEvent } from "../EntryAnimationEvent";
import type { ExitAnimationEvent } from "../ExitAnimationEvent";
import type { InconsistentIdentifierEvent } from "../InconsistentIdentifierEvent";
import type { JumpEvent } from "../JumpEvent";
import type { LabelEvent } from "../LabelEvent";
import type { LineEvent } from "../LineEvent";
import type { LocationEvent } from "../LocationEvent";
import type { MenuOptionEvent } from "../MenuOptionEvent";
import type { SetEvent } from "../SetEvent";
import type { SpeakerEvent } from "../SpeakerEvent";
import type { UndefinedLabelEvent } from "../UndefinedLabelEvent";
import type { UnparsableLineEvent } from "../UnparsableLineEvent";

/**
 * An event within a document.
 */
export type Event =
  | DuplicateLabelEvent
  | EmoteEvent
  | EntryAnimationEvent
  | ExitAnimationEvent
  | InconsistentIdentifierEvent
  | JumpEvent
  | LabelEvent
  | LineEvent
  | LocationEvent
  | MenuOptionEvent
  | SpeakerEvent
  | UndefinedLabelEvent
  | UnparsableLineEvent
  | DuplicateIdentifierInListEvent
  | ClearEvent
  | SetEvent;
