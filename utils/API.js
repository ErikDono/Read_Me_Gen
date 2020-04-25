const axios = require("axios")


const getAvatar = async (github) => {
    const gitPic = await axios.get(`https://api.github.com/users/${github}`).catch(err => err)
    console.log(gitPic.data.avatar_url)
    return gitPic.data.avatar_url


}
const getFlag = async (github) => {
    const repoNum = await axios.get(`https://api.github.com/users/${github}`).catch(err => err)
    return repoNum.data.public_repos
}

module.exports = {
    getAvatar,
    getFlag
}