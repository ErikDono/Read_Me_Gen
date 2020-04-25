const fs = require("fs").promises;

function generateMarkdown(data) {
  return writeFile(`
# Badges
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/${data.github}/${data.title})\n
![GitHub last commit](https://img.shields.io/github/last-commit/${data.github}/${data.title})\n
![GitHub followers](https://img.shields.io/github/followers/${data.github}?style=social)\n

# ${data.title} \n
  ${data.description} \n
## Table of Contents:
  ${data.tableOfContents} \n
## Installation
 ${data.Installation} \n
## Usage 
 ${data.Usage} \n
## License:
${data.License}\n
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
