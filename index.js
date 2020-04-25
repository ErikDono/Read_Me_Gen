const colors = require("colors");
const inquirer = require("inquirer")
const questions = require("./utils/questions");
// const getPic = require("./utils/API")
const fileGenerator = require("./utils/generateMarkdown").generateMarkdown;
// const gitInfoGetter = require("./utils/API");


const ask = async (questions_list) => {
    const results = await inquirer.prompt(questions_list).catch(err => err)
    return results;
}


const init = async () => {

    const answers = await ask(questions.start)
    // const avatar = await getPic()
    // answers.profilePic = avatar
    fileGenerator(answers)
}

init();
