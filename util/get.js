const request = require('request')
// mimic the browser
const headers = {
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.70 Safari/537.36',
  'Content-Type': 'text/html'
}

const GET = (url, callback) => request({
  url: url, headers: headers
}, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    callback({
      uri: response.request.uri,
      body: body
    })
  } else {
    throw new Error(error)
  }
})

module.exports = GET
