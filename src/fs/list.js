import { readdir } from "fs/promises"

const READ_FOLDER_PATH = "src/fs/files"
const ERROR_MSG = "FS operation failed"

const list = async (folder, options = { recursive: true }) => {
    try {
        console.log(await readdir(folder, options))
    } catch (error) {
        throw new Error(ERROR_MSG, { cause: error })
    }
}

await list(READ_FOLDER_PATH)