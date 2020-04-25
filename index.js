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
    const flag = await getFlag(answers.github)
    console.log(flag)
    answers.profilePic = avatar
    answers.flagImage = flag
    fileGenerator(answers)
}

init();
