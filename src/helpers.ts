import {promisify} from "util";
import {glob} from "glob";

export const globPromise = promisify(glob);

/**
 * Import filePath and return its default export.
 * @param filePath The path to the file.
 * @private
 */
export const importFile = async (filePath: string) => {
    return (await import(filePath)).default;
}