const private = "private";

module.exports = {
    start: [
        { type: "input", name: "title", message: "What is the name of the repository on GitHub?" },
        { type: "input", name: "description", message: "Describe your Project" },
        { type: "input", name: "tableOfContents", message: "Care to make a table of contents?" },
        { type: "input", name: "Installation", message: "Please give us your NPM Intall Node Line" },
        { type: "input", name: "Usage", message: "What is the project's usage?" },
        { type: "input", name: "Liscense", message: "What is the liscense?" },
        { type: "input", name: "Tests", message: "What test have you made?" },
        { type: "input", name: "github", message: "What is your name on GitHub?" },
        { type: "input", name: "email", message: "What is your Email address on GitHub?" }

    ]
}