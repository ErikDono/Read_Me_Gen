const axios = require("axios")


const getPic = async (gitContent) => {
    const gitInfo = await axios.get(`https://api.github.com/users/${questions.github}/repos`).catch(err => err)
    return gitInfo

}

module.exports = {
    getPic
}