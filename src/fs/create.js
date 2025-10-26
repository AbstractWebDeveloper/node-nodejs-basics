import { writeFile } from "fs/promises"

const FILE_PATH = "src/fs/files/fresh.txt"
const DATA = "I am fresh and young"
const ERROR_MSG = "FS operation failed"

const create = async (path, data) => {
    try {
        await writeFile(path, data, 'wx') 
    } catch (error) {
        throw new Error(ERROR_MSG, { cause: error })
    }

};

await create(FILE_PATH, DATA)