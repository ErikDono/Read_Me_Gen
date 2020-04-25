const fs = require("fs").promises;

function generateMarkdown(data) {
  return writeFile(`
# ${data.title}
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
