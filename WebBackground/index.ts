import { type WebImage } from '../WebImage'

/**
 * Describes a background to a web template.
 */
export interface WebBackground {
  /**
   * The (normalized) name of the background.
   */
  readonly normalized: string

  /**
   * Describes the element representing the background.
   */
  readonly element: WebImage
}
