const watson = require('../../helpers/watson/watson');
const files = require('../../helpers/files/files');

exports.test = (body) => {
    return new Promise((resolve, reject) => {
        resolve(true)
    })
}

exports.session = () => {
    return new Promise(async (resolve, reject) => {
        let sessionIdWA = await watson.getSession();
        resolve(sessionIdWA)
    })
}

exports.message = (body) => {
    return new Promise(async (resolve, reject) => {
        try {
            let messageWA = await watson.message(body.text, body.session)
            await files.writeFile(messageWA)
            resolve(messageWA.output.generic)
        } catch (err) {
            reject(err)
        }
    })
}