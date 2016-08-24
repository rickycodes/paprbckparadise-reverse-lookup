const Twitter = require('twitter')
const conf = require('./conf.json')
const client = new Twitter(conf.twitter)

const params = {
  screen_name: 'paprbckparadise',
  exclude_replies: true,
  count: 200 // max
}

const tags = /(#books|#usedbooks)/

client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    const images = tweets
      .filter((tweet) => (tags.test(tweet.text)) ? tweet : false)
      .map((tweet) => tweet.extended_entities.media[0].media_url)

    console.log(images)
  }
})
