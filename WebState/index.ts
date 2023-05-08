import { type WebElementAttributes } from '../WebElementAttributes'
import { type WebLine } from '../WebLine'
import { type WebMenu } from '../WebMenu'
import { type WebSpeakers } from '../WebSpeakers'

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
       * Describes the speakers of the line/menu, if any, otherwise, null.
       */
      readonly speakers: null | WebSpeakers

      /**
       * Describes the line itself, if any, otherwise, null.
       */
      readonly line: null | WebLine

      /**
       * Describes the menu shown, if any, otherwise, null.
       */
      readonly menu: null | WebMenu
    }
  }
}
