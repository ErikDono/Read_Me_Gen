const axios = require("axios")


const getPic = async (gitInfo) => {
    const gitInfo = await axios.get(`https://api.github.com/users/${questions.github}`).catch(err => err)
    return gitInfo.avatar_url

}

module.exports = {
    getPic
}