import { type WebImage } from '../WebImage'

/**
 * Describes an emote within a character to a web template.
 */
export interface WebEmote {
  /**
   * The normalized name of the emote.
   */
  readonly normalized: string

  /**
   * Describes the element representing the emote.
   */
  readonly element: WebImage
}
