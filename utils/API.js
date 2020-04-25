const axios = require("axios")


const getAvatar = async (github) => {
    const gitInfo = await axios.get(`https://api.github.com/users/${github}`).catch(err => err)
    console.log(gitInfo.data.avatar_url)
    return gitInfo.data.avatar_url

}

module.exports = {
    getAvatar
}