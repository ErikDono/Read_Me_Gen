const fs = require("fs").promises;

function generateMarkdown(data) {
  return writeFile(`
# ${data.title} \n
# ${data.description} \n
# ${data.tableOfContents} \n
# ${data.Installation} \n
# ${data.Usage} \n
# ${data.Liscense} \n
# ${data.Tests} \n
`);
}

const writeFile = async (content) => {
  const write = await fs.writeFile("README.md", content, { options: { encoding: "utf-8" } })
  console.log("File written")
}
module.exports = {
  generateMarkdown,
  writeFile
}
