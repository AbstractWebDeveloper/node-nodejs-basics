import { createHash } from 'crypto'
import { createReadStream } from "fs"
import { pipeline } from 'stream/promises';


const HASH_FILE_PATH = "src/hash/files/fileToCalculateHashFor.txt"
const DEFAULT_HASH_TYPE = "sha256"
const ERROR_MSG = "Calculate hash failed"

const calculateHash = async (path, hashType = DEFAULT_HASH_TYPE) => {
  try {
    const hash = createHash(hashType)
    const stream = createReadStream(path)

    await pipeline(stream, hash);

    console.log(hash.digest('hex'))
  } catch (error) {
     throw new Error(ERROR_MSG, { cause: error })
  }
};

await calculateHash(HASH_FILE_PATH)