const results = require('../results').results
const total = results.length

const output = results.map((item) => `
In | out
--- | ---
![](${item.in}) | ![](${item.out})`
).join('\r\n')
const failed = results.filter((item) => item.out ? false : true).length

console.log(`${output}\nTotal: ${total}, failed: ${failed}`)
