import { spawn, Worker } from 'threads'

const main = async () => {
    const piTimesTwo = await spawn(new Worker('./worker.js'))
    return `pi x 2 = ${await piTimesTwo(42)}`
}

export default main