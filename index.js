console.time('start')
// very handy: https://moz.com/ugc/the-ultimate-guide-to-the-google-search-parameters
const Twitter = require('twitter')
const conf = require('./conf')
const client = new Twitter(conf.twitter)
const cheerio = require('cheerio')
const baseUrl = 'http://images.google.com'
const query = 'book+cover'
const tags = /(#books|#usedbooks)/
const qs = require('./util/qs')
const GET = require('./util/get')
const fs = require('fs')
const delay = 20000

const params = {
  screen_name: 'paprbckparadise',
  exclude_replies: true,
  count: 200 // max
}

// write out results.json
const write = (arr) => {
  const str = JSON.stringify({results: arr})
  fs.writeFile('results.json', str, (error) => error ? console.log(error) : process.exit())
}

// collect all hrefs that open lightbox
const collect = ($, arr) => {
  const ex = /imgres\?imgurl/
  const results = []
  for (var i = 0; i < arr.length; i++) {
    var href = $(arr[i]).attr('href')
    if (ex.test(href)) {
      results.push(qs(href))
    }
  }
  return results
}

// filter common social media links (avoid looping back to src image in a repost)
// TODO: consider sorting by ASC date, or like 2015-01-01
const filter = (arr) => arr.filter((result) =>
  !/(squarespace|thechive|awesomejelly|epicthings|paperback|paradise|facebook|ooyuz|twimg|imgur|tumblr|blogspot|onsizzle|pinimg|afterfeed|wittyfeed|junkhost|ift.tt|playbuzz|buzzfeed|omygsh|sobadsogood)/.test(result.imgurl)
)

// return index of tallest image
const getTallest = (arr) => {
  const heights = arr.filter((result) => !isNaN(Number(result.h))).map((result) => Number(result.h))
  const max = Math.max.apply(null, heights)
  return arr[heights.indexOf(max)]
}

// search images.google.ca
const search = (image, cb) => {
  const endpoint = `${baseUrl}/searchbyimage?q=${query}&image_url=${image}`
  console.log(endpoint)
  GET(endpoint, (res) => {
    const $ = cheerio.load(res.body)

    // all hrefs
    const links = $('a[href]')

    const results = collect($, links)
    const filtered = filter(results)
    const tallest = getTallest(filtered)
    cb(tallest || null)
  })
}

// scrape tweets
const scrape = (error, tweets, response) => {
  const all = []
  const images = !error
    ? tweets
    .filter((tweet) => (tags.test(tweet.text)) ? tweet : false)
    .map((tweet) => {
      return {
        id: tweet.id_str,
        media: tweet.extended_entities.media[0].media_url
      }
    }) : null

  var count = 0
  const loop = (obj) => {
    search(obj.media, (result) => {
      const out = {
        id: obj.id,
        in: obj.media,
        result: result
      }
      console.log(out)
      all.push(out)

      if (count < images.length - 1) {
        setTimeout(() => {
          loop(images[++count])
        }, delay) // throttle consecutive requests
      } else {
        write(all)
        console.timeEnd('start')
      }
    })
  }

  loop(images[count])
}

client.get('statuses/user_timeline', params, scrape)
