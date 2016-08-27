const request = require('request')
// mimic the browser
const headers = {
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.70 Safari/537.36',
  'Content-Type': 'text/html'
}

const GET = (url, cb) => request({
  url: url, headers: headers
}, (error, response, body) => !error
  ? cb(body)
  : console.log(error))

module.exports = GET
