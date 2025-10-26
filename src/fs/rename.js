import { copyFile, unlink, constants } from "fs/promises"
import { dirname, join } from "path"

const ORIGINAL_FILE_PATH = "src/fs/files/wrongFilename.txt"
const NEW_FILENAME = "properFilename.md"
const ERROR_MSG = "Rename operation failed"

const rename = async (path, newName, mode = constants.COPYFILE_EXCL) => {
  try {
      const destFilePath = join(dirname(path), newName);
      await copyFile(path, destFilePath, mode);
      await unlink(path)

    } catch (error) {
      throw new Error(ERROR_MSG, { cause: error })
    }
};

await rename(ORIGINAL_FILE_PATH, NEW_FILENAME)
