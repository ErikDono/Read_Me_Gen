// const { ask } = require("./utils/questions")
// was trying to move ask to questions.js
const inquirer = require("inquirer");
const questions = require("./utils/questions");
const { getAvatar } = require("./utils/API")
const { getFlag } = require("./utils/API")
const { getContributor } = require("./utils/API")
const fileGenerator = require("./utils/generateMarkdown").generateMarkdown;



const ask = async (questions) => {
    const results = await inquirer.prompt(questions).catch(err => err)
    return results;
}


const init = async () => {

    const answers = await ask(questions)
    const avatar = await getAvatar(answers.github)
    const repoNum = await getFlag(answers.github)
    const contributorLogin = await getContributor(answers.contributors)
    answers.contributorLogin = contributorLogin
    console.log(repoNum)
    answers.profilePic = avatar
    answers.flagImage = repoNum
    fileGenerator(answers)
}

init();
