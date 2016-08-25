const Twitter = require('twitter')
const conf = require('./conf.json')
const client = new Twitter(conf.twitter)
const request = require('request')
const cheerio = require('cheerio')

const params = {
  screen_name: 'paprbckparadise',
  exclude_replies: true,
  count: 200 // max
}

const endpoint = 'http://images.google.ca/searchbyimage?image_url='
const tags = /(#books|#usedbooks)/

const headers = {
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.70 Safari/537.36',
  'Content-Type' : 'text/html'
}

const GET = (url, cb) => request({
  url: url, headers: headers
}, (error, response, body) => !error
  ? cb(body)
  : console.log(error))

const zoom = (url) => {
  GET(url, (html) => {
    const $ = cheerio.load(html)
    console.log($('meta[property="og:image"]').attr('content'))
  })
}

const search = (image) => {
  GET(endpoint + image, (html) => {
    const $ = cheerio.load(html)
    const next = $('.normal-header').next().find('a').eq(1).attr('href')
    zoom(`http://www.google.ca${next}`)
  })
}

const scrape = (error, tweets, response) => {
  const images = !error
    ? tweets
    .filter((tweet) => (tags.test(tweet.text)) ? tweet : false)
    .map((tweet) => {
      return {
        id: tweet.id_str,
        media: tweet.extended_entities.media[0].media_url
      }
    }) : null

    search(images[2].media)
}

client.get('statuses/user_timeline', params, scrape)
