const colors = require("colors");
const inquirer = require("inquirer")
const questions = require("./utils/questions");
const fileGenerator = require("./utils/generateMarkdown").generateMarkdown;
// const gitInfoGetter = require("./utils/API");


const ask = async (questions_list) => {
    const results = await inquirer.prompt(questions_list).catch(err => err)
    return results;
}


const init = async () => {
    console.log("This should Be green".green)
    const answers = await ask(questions.start)
    // const gh_api = await MAKE_API_CALL()
    // answers.profile = "MER?"
    fileGenerator(answers)
}

init();
