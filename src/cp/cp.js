import { fork } from 'child_process'
import { dirname, join } from 'path'
import { stdin, stdout } from 'process'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const SCRIPT_PATH = join(__dirname, "files",'script.js')

const spawnChildProcess = async (args) => {
    const child = fork(SCRIPT_PATH, args, { silent: true })
    stdin.pipe(child.stdin)
    child.stdout.pipe(stdout)
}

spawnChildProcess()
