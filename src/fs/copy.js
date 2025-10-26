import { cp, constants  } from "fs/promises"

const ORIGINAL_FOLDER_PATH = "src/fs/files"
const COPY_FOLDER_PATH = "src/fs/files_copy"
const ERROR_MSG = "Copy operation failed"

const copy = async (src, dets, options = {recursive : true, errorOnExist: true, force: false, mode: constants.COPYFILE_EXCL}) => {
    try {
      cp(src, dets, options)
    } catch (error) {
        throw new Error(ERROR_MSG, {cause: error})
    }
};

await copy(ORIGINAL_FOLDER_PATH, COPY_FOLDER_PATH)
