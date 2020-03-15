import doublingNumber from './doublingNumber.js'

const registerWorker = () => {
    doublingNumber()
        .then((piTimesTwo) => {
            console.log(piTimesTwo) 
        })
        .catch((error) => {
            console.error(error)
        })
}

export default registerWorker;