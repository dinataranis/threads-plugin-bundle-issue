import { dialog } from 'electron'
import doublingNumber from './doublingNumber.js'

const registerWorker = () => {
    doublingNumber()
        .then((piTimesTwo) => {
            dialog.showMessageBox(null, {message: piTimesTwo})
        })
        .catch((error) => {
            dialog.showMessageBox(null, {message: error})
        })
}

export default registerWorker;