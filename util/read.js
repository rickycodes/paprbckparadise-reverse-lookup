// util to read results.json
// TODO: create notes
// used to generate README.md
const results = require('../results').results
const total = results.length

const js = '```js'
const jsEnd = '```'

const succeeded = results.filter((item) => item.result)
const output = succeeded.map((item, index) =>
`
##### ${++index}). ${item.id}\r
https://twitter.com/paprbckparadise/status/${item.id}\r
${js}\r${JSON.stringify(item, null, 2)}\r${jsEnd}\r
ORIGINAL | RESULT
-------- | ------
<img src='${item.in}' /> | <img width='300' src='${decodeURIComponent(item.result.imgurl)}' />
`
).join('\n')

console.log(
`\r#### Results\r
${output}\r
Total: ${total}, failed: ${total - succeeded.length} (not displayed)`)
