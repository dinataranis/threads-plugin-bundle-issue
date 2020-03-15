import { spawn, Worker } from 'threads'

const doublingNumber = async () => {
    const doublingNumberWorker = await spawn(new Worker('./worker.js'))
    return `pi x 2 = ${await doublingNumberWorker(42)}`
}

export default doublingNumber