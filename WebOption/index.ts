import { type WebElementAttributes } from '../WebElementAttributes'

/**
 * Describes an option within a state to a web template.
 */
export interface WebOption {
  readonly element: {
    /**
     * The tag name of the element.
     */
    readonly tagName: 'button' | 'a'

    /**
     * The attributes to include in the element.
     */
    readonly attributes: WebElementAttributes

    /**
     * The HTML to display in the element to represent the label.
     */
    readonly labelHtml: string
  }
}
