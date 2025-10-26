import { writeFile } from "fs/promises"

const FILE_PATH = "src/fs/files/fresh.txt"
const DATA = "I am fresh and young"
const ERROR_MSG = "Create operation failed"

const create = async (path, data, flag = 'wx') => {
    try {
        await writeFile(path, data, {flag}) 
    } catch (error) {
        throw new Error(ERROR_MSG, {cause: error})
    }

};

await create(FILE_PATH, DATA)