/**
 * Describes a file which can be passed into or out of a process.
 */
export type File = {
  /**
   * The path segments leading to the file, e.g. [`a`, `b`, `c`] may represent
   * a/b/c on the host platform.  At least one must be given.  No segments may
   * be empty.  Each must be lower case and cannot contain
   * :,()~!?'"{}@*\/&#%`+<=>|$.  Hyphens/dashes (-) are allowed, but cannot be
   * repeated (e.g. repeated--between), leading (e.g. -leading) or trailing
   * (e.g. trailing-).
   */
  readonly path: ReadonlyArray<string>;

  /**
   * The bytes within the file.  Note that this must be treated as read-only.
   */
  readonly content: Uint8Array;
};
