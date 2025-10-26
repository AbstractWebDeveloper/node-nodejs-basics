import { stdin, stdout } from 'process'
import { Transform, } from 'stream'
import { pipeline } from "stream/promises"
import { EOL } from 'os'

const reverseStream = new Transform({
    transform(chunk, _, callback) {
        const reversed = chunk.toString().split('').reverse().join('') + EOL
        callback(null, reversed)
    }
})

const transform = async () => {
    await pipeline(stdin, reverseStream, stdout)
}

await transform()