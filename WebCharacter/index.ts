import { type WebElementAttributes } from '../WebElementAttributes'
import { type WebEmote } from '../WebEmote'

/**
 * Describes a character to a web template.
 */
export interface WebCharacter {
  /**
   * The (normalized) name of the character.
   */
  readonly normalized: string

  /**
   * Describes the element representing the character.
   */
  readonly element: {
    /**
     * The tag name of the element.
     */
    readonly tagName: 'div'

    /**
     * The attributes to include in the element.
     */
    readonly attributes: WebElementAttributes

    /**
     * The content of the element.
     */
    readonly content: {
      /**
       * The emotes within the element.
       */
      readonly emotes: readonly WebEmote[]
    }
  }
}
