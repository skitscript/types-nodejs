import { type WebElementAttributes } from '../WebElementAttributes'

/**
 * Describes the line of a state to a web template.
 */
export interface WebLine {
  readonly element: {
    /**
     * The tag name of the element.
     */
    readonly tagName: 'pre'

    /**
     * The attributes to include in the element.
     */
    readonly attributes: WebElementAttributes

    /**
     * The HTML to display in the element to represent the line.
     */
    readonly content: string
  }
}
