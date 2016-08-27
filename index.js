const Twitter = require('twitter')
const conf = require('./conf')
const client = new Twitter(conf.twitter)
const cheerio = require('cheerio')
const endpoint = 'http://images.google.ca/searchbyimage?image_url='
const tags = /(#books|#usedbooks)/
const qs = require('./qs')
const GET = require('./get')
const fs = require('fs')
const all = []

const params = {
  screen_name: 'paprbckparadise',
  exclude_replies: true,
  count: 200 // max
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

// return index of tallest image
const getTallest = (arr) => {
  const heights = arr
    .filter((result) => {
      // filter results where Number(result.h) is NaN and ignore twitter/imgur results
      return !isNaN(Number(result.h)) && !/(twitter|imgur)/.test(result.imgrefurl)
        ? result
        : false
    })
    .map((result) => Number(result.h))

  const max = Math.max.apply(null, heights)
  return heights.indexOf(max)
}

// search images.google.ca
const search = (image, cb) => {
  GET(endpoint + image, (html) => {
    console.log(html)
    const $ = cheerio.load(html)

    // all hrefs
    const links = $('a[href]')

    const results = collect($, links)
    const index = getTallest(results)
    cb(results[index] ? results[index].imgurl : null)
  })
}

// scrape tweets
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

  var count = 0
  const loop = (obj) => {
    search(obj.media, (result) => {
      all.push({
        in: obj.media,
        out: result
      })

      if (count < images.length - 1) {
        setTimeout(() => {
          loop(images[++count])
        }, 20000) // throttle consecutive requests
      } else {
        const str = JSON.stringify({results: all})
        fs.writeFile('results.json', str, (error) => error ? console.log(error) : null)
      }
    })
  }

  loop(images[count])
}

client.get('statuses/user_timeline', params, scrape)
