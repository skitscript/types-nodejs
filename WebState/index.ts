import { type WebElementAttributes } from '../WebElementAttributes'
import { type WebOption } from '../WebOption'
import { type WebSpeaker } from '../WebSpeaker'

/**
 * Describes a state to a web template.
 */
export interface WebState {
  /**
   * Describes the element representing the state.
   */
  readonly element: {
    /**
     * The tag name of the element.
     */
    readonly tagName: 'div' | 'a'

    /**
     * The attributes to include in the element.
     */
    readonly attributes: WebElementAttributes

    /**
     * The content of the element.
     */
    readonly content: {
      /**
       * The HTML to display in the element to represent the line; when null, nothing is being said.
       */
      readonly lineHtml: string

      /**
       * The speakers of line; when empty, nobody is speaking the line.
       */
      readonly speakers: readonly WebSpeaker[]

      /**
       * The options to present; when empty, no menu/options are to be shown.
       */
      readonly options: readonly WebOption[]
    }
  }
}
