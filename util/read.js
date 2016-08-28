// util to read results.json
// TODO: create notes
// used to generate README.md
const results = require('../results').results
const total = results.length

const succeeded = results.filter((item) => item.result)
const output = succeeded.map((item) => `<img src='${item.in}' /> | <img src='${decodeURIComponent(item.result.imgurl)}' />`).join('\n')

console.log(
`In | out\r
--- | ---\r
${output}\r
Total: ${total}, failed: ${total - succeeded.length}`)
