import { type WebElementAttributes } from '../WebElementAttributes'
import { type WebSpeaker } from '../WebSpeaker'

/**
 * Describes the speakers of a state to a web template.
 */
export interface WebSpeakers {
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
     * The speakers to display within the box.
     */
    readonly content: readonly WebSpeaker[]
  }
}
