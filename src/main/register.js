import main from './main.js'

const registerWorker = () => {
    setTimeout(() => {
        main()
            .then((piTimesTwo) => {
                console.log(piTimesTwo) 
            })
            .catch((error) => {
                console.error(error)
            })
    }, 3000)
}

export default registerWorker;