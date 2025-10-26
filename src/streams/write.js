import { createWriteStream } from 'fs'
import { stdin } from "process"
import { pipeline } from "stream/promises"

const WRITE_FILE_PATH = "src/streams/files/fileToWrite.txt"
const ERROR_MSG = "Write stream failed"

const write = async (path, options = { flags: 'w+' }) => {
  try {
    const writeStream = createWriteStream(path, options)
    await pipeline(stdin, writeStream)
  } catch (error) {
    throw new Error(ERROR_MSG, {cause: error})
  }

};

await write(WRITE_FILE_PATH)