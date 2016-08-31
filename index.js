console.time('start')
// very handy: https://moz.com/ugc/the-ultimate-guide-to-the-google-search-parameters
const Twitter = require('twitter')
const conf = require('./conf')
const client = new Twitter(conf.twitter)
const cheerio = require('cheerio')
const baseUrl = 'google.com'
const before = '2016-01-01' // First tweet is from Mar 2016
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

// collect all query variables from hrefs that open a lightbox
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
// NOTES: this might be a tad aggressive?
const blacklist = (result) => {
  const ex = /(youtube|wordpress|wp-content|knowyourmeme|burrowowl|squarespace|thechive|awesomejelly|epicthings|paperback|paradise|facebook|ooyuz|twimg|imgur|tumblr|blogspot|onsizzle|pinimg|afterfeed|wittyfeed|junkhost|ift.tt|playbuzz|buzzfeed|omygsh|sobadsogood)/
  return !ex.test(result.imgurl) && !ex.test(result.imgrefurl)
}

// return index of tallest image
const getTallest = (arr) => {
  const heights = arr.filter((result) => !isNaN(Number(result.h))).map((result) => Number(result.h))
  const max = Math.max.apply(null, heights)
  return arr[heights.indexOf(max)]
}

// search images.google.ca
const search = (image, cb) => {
  const first = `http://images.${baseUrl}/searchbyimage?q=${query}&image_url=${image}`
  GET(first, (res) => {
    const tbs = qs(res.uri.search).tbs
    const next = `http://${baseUrl}/search?q=${query}&source=lnt&tbs=${tbs}%2Ccdr%3A1%2Ccd_min%3A%2Ccd_max%3A${before}&tbm=`

    setTimeout(() => {
      console.log(next)
      GET(next, (res) => {
        const $ = cheerio.load(res.body)
        const tallest = getTallest(collect($, $('a[href]')).filter(blacklist))
        cb(tallest || null)
      })
    }, 1000) // throttle consecutive requests
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
