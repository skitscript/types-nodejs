import { type Path } from '../Path'

/**
 * Exposes the file system.
 */
export interface FileSystem {
  /**
   * Reads a UTF-8-encoded text file from disk.
   * @param path The path from which to read a UTF-8-encoded text file.
   * @returns The content of the UTF-8-encoded text file.
   * @throws When the file cannot be read.
   */
  readUtf8EncodedTextFile: (path: Path) => Promise<string>

  /**
   * Writes a UTF-8-encoded text file to disk.
   * @param path The path from which to write a UTF-8-encoded text file.
   * @param content The content of the UTF-8-encoded text file.
   * @throws When the file cannot be written.
   */
  writeUtf8EncodedTextFile: (path: Path, content: string) => Promise<void>
}
