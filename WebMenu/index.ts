import { type WebElementAttributes } from '../WebElementAttributes'
import { type WebOption } from '../WebOption'

/**
 * Describes a menu within a state to a web template.
 */
export interface WebMenu {
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
     * The options to display within the menu.
     */
    readonly content: readonly WebOption[]
  }
}
