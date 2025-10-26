import { cpus } from 'os'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { Worker } from 'worker_threads'

const __dirname = dirname(fileURLToPath(import.meta.url))
const WORKER_PATH = join(__dirname, 'worker.js')


const createWorker =  (workerPath, data) => new Promise((resolve) => {
    const worker = new Worker(workerPath, {workerData: data})
    
    worker.on('message', (result) => resolve({ status: "resolved", data: result }))
    worker.on('error', () => resolve({ status: "error", data: null }))
})

const performCalculations = async (workerPath, startNumber = 10, cycles = cpus().length) => {
    const workers = []

    for (let i = 0; i < cycles; i++) {
        workers.push(createWorker(workerPath, startNumber + i))
    }
    const data = await Promise.all(workers)
    console.log(data)
}

await performCalculations(WORKER_PATH)