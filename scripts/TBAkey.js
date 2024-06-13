const { writeFileSync } = require("fs")
const { join } = require("path")
const { exit } = require("process")
const { createInterface } = require("readline")

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
})

const prompt = (query) => new Promise((resolve) => rl.question(query, resolve))

const main = async () => {
  const output = await prompt(
    "Please create a TBA key and enter it here (If you paste the key from somwhere please press delete one time before press enter): "
  )
  const configuration = '{ "TBAKey" :' + '"' + output + '"' + "}"
  writeFileSync(join("src", "environments", "secrets.json"), configuration)

  exit(0)
}

main()
