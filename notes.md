### Reverse image lookup of [@paprbckparadise](https://twitter.com/paprbckparadise) tweets

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges) [![build status](https://api.travis-ci.org/rickycodes/paprbckparadise-reverse-lookup.svg?branch=master)](https://travis-ci.org/rickycodes/paprbckparadise-reverse-lookup/)  
here today—broken tomorrow

#### Install

Clone/fork this repo and install via `NPM`  
`npm install`

| required | version |
| -------- | ------- |
| node | > 4.1.1  |
| npm  | > 2.14.4 |

#### About

[@paprbckparadise](https://twitter.com/paprbckparadise) is hilarious, but I was curious about the original titles of the books. Sure, I could reverse image search them manually... Instead, I wrote a script to do it for me.

#### Challenges

Getting tweet data is relatively easy using the [twitter](http://npm.im/twitter) `NPM` module (there are a few others). The not-so-easy part is the reverse image lookup. There are several [APIs](https://tineye.com) that can do this, but they aren't [free](https://services.tineye.com/TinEyeAPI#plans-and-pricing). Besides, I thought it would be more interesting to see if this could be accomplished by scraping the results from Google directly. This of course comes with some drawbacks.

#### Google doesn't like robots

I mean, there's some [obvious](https://support.google.com/webmasters/answer/182072?hl=en) [exceptions]((http://www.theverge.com/2013/12/14/5209622/google-has-bought-robotics-company-boston-dynamics))... But they don't like bots abusing their systems.

So, while Google does have a convenient endpoint just _begging_ to be fed sweet image data (`/searchbyimage?image_url=`), if you hit it enough times you'll get this lovely message:

<img alt='CAPTCHA' src='http://i.imgur.com/gsIm2eI.png' style='border: 1px solid #e3e3e3;' />

[Why did this happen?](https://www.google.com/policies/terms/)

The important bit to note here is:

> Don’t misuse our Services. For example, don’t interfere with our Services or try to access them using a method other than the interface and the instructions that we provide.

Basically this whole thing is a [righteous hack](https://www.youtube.com/watch?v=vbZB21sxdqk) since _technically_ we're abusing Google's TOS. :metal:

#### Getting around Google's captcha

I discovered there are a couple ways to do this (there could be others):

##### 1. Use a proxy

If you can route the requests through different IPs it stands to reason Google will not be able to mark the traffic as a bot.

##### 2. Throttle the requests

It occurred to me that I could simply delay the intervals between each consecutive request to make the script _look_ human. I started with a delay of 10 seconds, but this would still trigger the CAPTCHA, leaving me to try every 20 seconds which appears to work just fine.

Total script operation takes about 3650306 milliseconds (~60 minutes). This will of course vary depending on bandwidth.

#### Prior Art

Below are some links that were useful on this fantastic voyage of discovery:

- http://googlehacking.com.pl/publikacje/google-hacks.pdf
- https://moz.com/ugc/the-ultimate-guide-to-the-google-search-parameters
- https://stenevang.wordpress.com/2013/02/22/google-advanced-power-search-url-request-parameters/
- http://stackoverflow.com/questions/13972240/node-jsdom-scrape-googles-reverse-image-search

#### DISCLAIMER

THIS SOFTWARE IS PROVIDED AS A PROOF-OF-CONCEPT EXPLORATION OF GOOGLE SEARCH.
RUNNING THIS SOFTWARE/ABUSING GOOGLE'S TOS COULD RESULT IN A PERMANENT BAN FROM THEIR SERVICES (I GUESS?)

#### TODO

- [ ] Write more about the _how_ (for now, just look at the sauce)
- [ ] Write a breakdown of success rate (for now, just check the results)
