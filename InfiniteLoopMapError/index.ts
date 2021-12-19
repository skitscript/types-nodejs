/**
 * Mapping failed as an infinite loop which does not contain user interaction
 * was found.
 */
export type InfiniteLoopMapError = {
  /**
   * Indicates the type of map error.
   */
  readonly type: `infiniteLoop`;
};
