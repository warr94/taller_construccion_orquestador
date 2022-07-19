const services = require('../services')

exports.test = async (req, res) => {
    let response = await services.test(req.body)
    return res.status(200).send(response)
};

exports.session = async (req, res) => {
    try {
        let response = await services.session()
        return res.status(200).json(response)
    } catch (err) {
        return res.status(500).json({ "Error": "Error to Processing Request" })
    }
};

exports.message = async (req, res) => {
    try {
        let response = await services.message(req.body)
        return res.status(200).json(response)
    } catch (err) {
        return res.status(500).json({ "Error": "Error to Processing Request" })
    }
};