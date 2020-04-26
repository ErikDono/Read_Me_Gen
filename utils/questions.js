// const inquirer = require("inquirer")
// unsure of why i couldnt move this over. it was calling ask in init, but said that the path from askquestions to ask was undefined. 

module.exports =

    // const askquestions =
    [
        { type: "input", name: "title", message: "What is the name of the repository on GitHub?" },
        { type: "input", name: "description", message: "Describe your Project" },
        { type: "input", name: "tableOfContents", message: "Care to make a table of contents?" },
        { type: "input", name: "Installation", message: "Please give us your NPM Intall Node Line" },
        { type: "input", name: "Usage", message: "What is the project's usage?" },
        { type: "input", name: "License", message: "What is the license?" },
        { type: "input", name: "Tests", message: "What test have you made?" },
        { type: "input", name: "bugs", message: "What bugs do you have at the moment?" },
        { type: "input", name: "help", message: "How can people contribute to the code?" },
        { type: "input", name: "future", message: "What does the future hold for this project?" },
        { type: "input", name: "github", message: "What is your name on GitHub?(Necessary Answer!)" },
        { type: "input", name: "contributors", message: "Who helped contribute to the project?(Necessary Answer!)" },
        { type: "input", name: "email", message: "What is your Email address on GitHub?" }
    ]

// const ask = async (askquestions) => {
//     const results = await inquirer.prompt(askquestions).catch(err => err)
//     return results;
// }
// module.exports = {
//     askquestions,
//     ask
// }
