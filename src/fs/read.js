import { readFile } from "fs/promises"

const READ_FILE_PATH = "src/fs/files/fileToRead.txt"
const ERROR_MSG = "FS operation failed"

const read = async (path) => {
    try {
        console.log(await readFile(path, "utf-8"))
    } catch (error) {
        throw new Error(ERROR_MSG, { cause: error })
    }
};

await read(READ_FILE_PATH)