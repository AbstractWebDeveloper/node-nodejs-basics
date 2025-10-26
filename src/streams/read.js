import { createReadStream } from 'fs'
import { stdout } from 'process'
import { pipeline } from 'stream/promises'
import { EOL } from 'os'

const READ_FILE_PATH = 'src/streams/files/fileToRead.txt'
const ERROR_MSG = 'Read stream failed'

const read = async (path) => {
  try {
    await pipeline(createReadStream(path), stdout, { end: false })
    stdout.write(EOL)
    stdout.end()
  } catch (error) {
    throw new Error(ERROR_MSG, { cause: error })
  }
};

await read(READ_FILE_PATH)
