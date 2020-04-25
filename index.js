const colors = require("colors");
const inquirer = require("inquirer")
const questions = require("./utils/questions");
const { getAvatar } = require("./utils/API")
const { getFlag } = require("./utils/API")
const fileGenerator = require("./utils/generateMarkdown").generateMarkdown;



const ask = async (questions) => {
    const results = await inquirer.prompt(questions).catch(err => err)
    return results;
}


const init = async () => {

    const answers = await ask(questions)
    const avatar = await getAvatar(answers.github)
    const repoNum = await getFlag(answers.github)
    console.log(repoNum)
    answers.profilePic = avatar
    answers.flagImage = repoNum
    fileGenerator(answers)
}

init();
