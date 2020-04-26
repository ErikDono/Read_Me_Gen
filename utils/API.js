const axios = require("axios")

const err = ("need a value!")
const getAvatar = async (github) => {
    const gitPic = await axios.get(`https://api.github.com/users/${github}`).catch(err => err)
    console.log(gitPic.data.avatar_url)
    return gitPic.data.avatar_url


}
const getFlag = async (github) => {
    const repoNum = await axios.get(`https://api.github.com/users/${github}`).catch(err => err)
    return repoNum.data.public_repos

}
const getContributor = async (contributors) => {
    const Contriubtor = await axios.get(`https://api.github.com/users/${contributors}`).catch(err => err)
    // if (err) {
    //     throw err
    // }
    return Contriubtor.data.avatar_url
}


module.exports = {
    getAvatar,
    getFlag,
    getContributor
}