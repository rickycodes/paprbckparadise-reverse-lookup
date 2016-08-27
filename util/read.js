// util to read results.json
// TODO: create notes
// used to generate README.md
const results = require('../results').results
const total = results.length

const failed = results.filter((item) => item.out)
const output = failed.map((item) => `<img src='${item.in}' /> | <img src='${item.out}' />`).join('\n')

console.log(
`In | out\r
--- | ---\r
${output}\r
Total: ${total}, failed: ${failed.length}`)
