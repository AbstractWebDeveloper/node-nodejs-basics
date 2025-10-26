import { createReadStream, createWriteStream } from "fs"
import { pipeline } from "stream/promises"
import { createGunzip } from 'zlib'

const ZIP_FILE_PATH = "src/zip/files/archive.gz"
const DECOMPRESS_FILE_PATH = "src/zip/files/fileToCompress.txt"
const ERROR_MSG = "Decompress stream failed"


const decompress = async (path, dstPath) => {
  try {
    await pipeline(createReadStream(path), createGunzip(), createWriteStream(dstPath))
  } catch (error) {
    throw new Error(ERROR_MSG, { cause: error })
  }
}

await decompress(ZIP_FILE_PATH, DECOMPRESS_FILE_PATH)