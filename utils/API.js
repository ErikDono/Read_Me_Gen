const axios = require("axios")

const getPic = async () => {
    return await axios.get("URL_GOES_HERE")
}

module.exports = {
    getPic
}