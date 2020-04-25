const fs = require("fs").promises;

function generateMarkdown(data) {
  return writeFile(`
# Badges
![NumberOfCommits](https://img.shields.io/badge/github/commit-activity/month/${data.github}/${data.title})\n
![NumberOfCommits](https://img.shields.io/badge//github/last-commit/${data.github}/${data.title})\n
# ${data.title} \n
## Description:
  ${data.description} \n
## Table of Contents:
  ${data.tableOfContents} \n
## Installation
 ${data.Installation} \n
## Usage 
 ${data.Usage} \n
## License:
${data.License} \n
## Tests Used:
 ${data.Tests} \n
## Git Hub Info:
### Name
  ${data.github}
### Picture:
  ![GitHubAvatar](${data.profilePic}) \n
### Email:
 ${data.email} \n
`);
}

const writeFile = async (content) => {
  const write = await fs.writeFile("README.md", content, { options: { encoding: "utf-8" } })
  console.log("Check out your ReadMe!")
}
module.exports = {
  generateMarkdown,
  writeFile
}
