import { createReadStream, createWriteStream } from "fs"
import { pipeline } from "stream/promises"
import { createGzip } from 'zlib'

const COMPRESS_FILE_PATH = "src/zip/files/fileToCompress.txt"
const ZIP_FILE_PATH = "src/zip/files/archive.gz"
const ERROR_MSG = "Compress stream failed"

const compress = async (path, dstPath) => {
  try {
    await pipeline(createReadStream(path), createGzip(), createWriteStream(dstPath))
  } catch (error) {
    throw new Error(ERROR_MSG, {cause: error})
  }
}

await compress(COMPRESS_FILE_PATH, ZIP_FILE_PATH)