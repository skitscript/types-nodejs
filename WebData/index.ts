import { type WebBackground } from '../WebBackground'
import { type WebCharacter } from '../WebCharacter'
import { type WebState } from '../WebState'

/**
 * All data passed to a web template.
 */
export interface WebData {
  /**
   * The CSS to include within a <style> element somewhere on the page.  May be empty.
   */
  readonly css: string

  /**
   * The Javascript to include within a <script> element somewhere on the page.  May be empty.
   */
  readonly javascript: string

  /**
   * The states to include in the HTML document.  The order must be retained.  May be empty.
   */
  readonly states: readonly WebState[]

  /**
   * The characters to include in the HTML document.  The order must be retained.  May be empty.
   */
  readonly characters: readonly WebCharacter[]

  /**
   * The backgrounds to include in the HTML document.  The order must be retained.  May be empty.
   */
  readonly backgrounds: readonly WebBackground[]
}
