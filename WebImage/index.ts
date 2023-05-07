import { type WebElementAttributes } from '../WebElementAttributes'

/**
 * Describes an image to a web template.
 */
export interface WebImage {
  /**
   * The tag name of the element.
   */
  readonly tagName: 'svg'

  /**
   * The attributes to include in the element.
   */
  readonly attributes: WebElementAttributes

  /**
   * The content of the element.
   */
  readonly content: {
    /**
     * The HTML to display in the element.
     */
    readonly html: string
  }
}
