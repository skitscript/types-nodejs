import type { File } from '../File'

/**
 * Describes an archive of files which can be passed into or out of a process.
 * No two files are to have equivalent paths.
 */
export type Archive = readonly File[]
