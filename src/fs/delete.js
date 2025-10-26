import { stat, unlink } from "fs/promises"

const DELETE_FILE_PATH = "src/fs/files/fileToRemove.txt"
const ERROR_MSG = "Delete operation failed"

const remove = async (file) => {
    try {
        await stat(file)
        await unlink(file)
    } catch (error) {
        throw new Error(ERROR_MSG, { cause: error })
    }
};

await remove(DELETE_FILE_PATH)