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
#### Results

##### 1). 770775824530145280
https://twitter.com/paprbckparadise/status/770775824530145280
```js{
  "id": "770775824530145280",
  "in": "http://pbs.twimg.com/media/CrJWnXLVYAAdKOX.png",
  "result": {
    "imgurl": "http://shannonsweetvalley.com/wp-content/uploads/2009/06/ss02.jpg",
    "imgrefurl": "http://shannonsweetvalley.com/welcome/2009/06/22/sweet-valley-high-super-star-2-bruce%E2%80%99s-story",
    "h": "2500",
    "w": "1500",
    "tbnid": "P4_3NVG5Mz-rPM",
    "tbnh": "290",
    "tbnw": "174",
    "usg": "__0MBpvH_EuMCGS8VbYmSxprkh1JI",
    "docid": "PTZKLEps7ADQdM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CrJWnXLVYAAdKOX.png' /> | <img width='300' src='http://shannonsweetvalley.com/wp-content/uploads/2009/06/ss02.jpg' />


##### 2). 770408907411861504
https://twitter.com/paprbckparadise/status/770408907411861504
```js{
  "id": "770408907411861504",
  "in": "http://pbs.twimg.com/media/CrEJU-vVIAAGorr.png",
  "result": {
    "imgurl": "https://www.blackgate.com/wp-content/uploads/2014/12/A-Dream-of-Kinship.jpg",
    "imgrefurl": "https://www.blackgate.com/2014/12/14/vintage-treasures-the-white-bird-of-kinship-trilogy-by-richard-cowper",
    "h": "1512",
    "w": "948",
    "tbnid": "yQ06fkaPMtyGIM",
    "tbnh": "284",
    "tbnw": "178",
    "usg": "__DtFMgItu19eFzf33oN7m2FLO-lI",
    "docid": "wLChgXw2uhimHM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CrEJU-vVIAAGorr.png' /> | <img width='300' src='https://www.blackgate.com/wp-content/uploads/2014/12/A-Dream-of-Kinship.jpg' />


##### 3). 769323422820118528
https://twitter.com/paprbckparadise/status/769323422820118528
```js{
  "id": "769323422820118528",
  "in": "http://pbs.twimg.com/media/Cq0vPF9VIAA4orD.png",
  "result": {
    "imgurl": "https://schlockvalue.files.wordpress.com/2014/08/cold-war-in-a-country-garden.png",
    "imgrefurl": "https://schlock-value.com/2014/08/17/cold-war-in-a-country-garden",
    "h": "2099",
    "w": "1254",
    "tbnid": "Rp4OBGNr4PjKCM",
    "tbnh": "291",
    "tbnw": "173",
    "usg": "__GHJtNISd-YTlZPRGLPdrhYeoenQ",
    "docid": "Md9TbfTpDQGaWM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Cq0vPF9VIAA4orD.png' /> | <img width='300' src='https://schlockvalue.files.wordpress.com/2014/08/cold-war-in-a-country-garden.png' />


##### 4). 768603978137415680
https://twitter.com/paprbckparadise/status/768603978137415680
```js{
  "id": "768603978137415680",
  "in": "http://pbs.twimg.com/media/Cqqg_9SUEAA1Y52.png",
  "result": {
    "imgurl": "https://devonclaytor.files.wordpress.com/2013/08/faust.jpg",
    "imgrefurl": "https://devonclaytor.com/2013/09/03/q-a-with-science-fiction-and-fantasy-illustrator-david-b-mattingly",
    "h": "654",
    "w": "418",
    "tbnid": "acP9_eBxHI1pwM",
    "tbnh": "281",
    "tbnw": "179",
    "usg": "__j0XjLV2NP72GfmQ4rWkornxVxA8",
    "docid": "bNN7tqpBfSfBAM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Cqqg_9SUEAA1Y52.png' /> | <img width='300' src='https://devonclaytor.files.wordpress.com/2013/08/faust.jpg' />


##### 5). 767876626449260554
https://twitter.com/paprbckparadise/status/767876626449260554
```js{
  "id": "767876626449260554",
  "in": "http://pbs.twimg.com/media/CqgLZEqUIAAHNn5.png",
  "result": {
    "imgurl": "http://cache.coverbrowser.com/image/ace-books/1474-1.jpg",
    "imgrefurl": "http://www.coverbrowser.com/covers/ace-books/30",
    "h": "658",
    "w": "420",
    "tbnid": "AUL3YLlwZZkryM",
    "tbnh": "281",
    "tbnw": "179",
    "usg": "__Mij0AQblcMAPRT9NMzpObW4pJ-w",
    "docid": "kI5hSWU8zENZuM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CqgLZEqUIAAHNn5.png' /> | <img width='300' src='http://cache.coverbrowser.com/image/ace-books/1474-1.jpg' />


##### 6). 766427726009905152
https://twitter.com/paprbckparadise/status/766427726009905152
```js{
  "id": "766427726009905152",
  "in": "http://pbs.twimg.com/media/CqLlwURUAAAvIh3.png",
  "result": {
    "imgurl": "http://www.jeancraigheadgeorge.com/images/frightful_cov.jpg",
    "imgrefurl": "http://www.jeancraigheadgeorge.com/archive1.html",
    "h": "207",
    "w": "150",
    "tbnid": "9yvgtJWiPhC9LM",
    "tbnh": "165",
    "tbnw": "120",
    "usg": "__rA_8681YHlnif94uOAUHrPMgQpM",
    "docid": "Rhc9x0EKNI8PVM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CqLlwURUAAAvIh3.png' /> | <img width='300' src='http://www.jeancraigheadgeorge.com/images/frightful_cov.jpg' />


##### 7). 765347383475576832
https://twitter.com/paprbckparadise/status/765347383475576832
```js{
  "id": "765347383475576832",
  "in": "http://pbs.twimg.com/media/Cp8O_1WVIAMihYo.png",
  "result": {
    "imgurl": "http://www.sharon-green.net/images/Jalav2.jpg",
    "imgrefurl": "http://www.sharon-green.net/Jalav-all.html",
    "h": "1412",
    "w": "880",
    "tbnid": "a0gLfPDhF2OGtM",
    "tbnh": "285",
    "tbnw": "177",
    "usg": "__YdxhXPe3f20puyEQ8OCIqiiiWH0",
    "docid": "MXN09TNi9KWDQM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Cp8O_1WVIAMihYo.png' /> | <img width='300' src='http://www.sharon-green.net/images/Jalav2.jpg' />


##### 8). 764250300991442944
https://twitter.com/paprbckparadise/status/764250300991442944
```js{
  "id": "764250300991442944",
  "in": "http://pbs.twimg.com/media/CpspMy2VYAAC7-J.png",
  "result": {
    "imgurl": "https://images-na.ssl-images-amazon.com/images/I/41DlDWpEdkL._AC_UL320_SR190,320_.jpg",
    "imgrefurl": "https://www.amazon.com/Masters-Glass-M-Coleman-Easton/dp/0445204249",
    "h": "320",
    "w": "190",
    "tbnid": "g4-K2h9O8APnGM",
    "tbnh": "256",
    "tbnw": "152",
    "usg": "__Ri6b2HFkmgpKjkBv829JeOFArcI",
    "docid": "4LWvJEgvls6QcM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CpspMy2VYAAC7-J.png' /> | <img width='300' src='https://images-na.ssl-images-amazon.com/images/I/41DlDWpEdkL._AC_UL320_SR190,320_.jpg' />


##### 9). 763888274255392768
https://twitter.com/paprbckparadise/status/763888274255392768
```js{
  "id": "763888274255392768",
  "in": "http://pbs.twimg.com/media/CpngU7oUIAA8O9B.png",
  "result": {
    "imgurl": "https://cheapscifi.files.wordpress.com/2011/01/the-secrets-of-synchronicity.jpg",
    "imgrefurl": "https://cheapscifi.wordpress.com",
    "h": "500",
    "w": "303",
    "tbnid": "mbkbuu9UsEPcFM",
    "tbnh": "289",
    "tbnw": "175",
    "usg": "__yRZP7JNM2-GoyoU_FU1FsefZQv4",
    "docid": "DvcBBC2OZEZHOM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CpngU7oUIAA8O9B.png' /> | <img width='300' src='https://cheapscifi.files.wordpress.com/2011/01/the-secrets-of-synchronicity.jpg' />


##### 10). 763164890106257409
https://twitter.com/paprbckparadise/status/763164890106257409
```js{
  "id": "763164890106257409",
  "in": "http://pbs.twimg.com/media/CpdOJcrVYAAntPu.png",
  "result": {
    "imgurl": "https://sciencefictionruminations.files.wordpress.com/2012/12/thprmdsfrm1971.jpeg%3Fw%3D388%26h%3D640",
    "imgrefurl": "https://sciencefictionruminations.wordpress.com/2012/12/17/adventures-in-science-fiction-cover-art-pyramids-spaceships-future-earthscapes-alien-temples",
    "h": "640",
    "w": "388",
    "tbnid": "zSBMS6Bc5gfGMM",
    "tbnh": "288",
    "tbnw": "175",
    "usg": "__qXn4sFBQLb72XPwvmx8FdEb5hO8",
    "docid": "5UxhCYUae4V72M"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CpdOJcrVYAAntPu.png' /> | <img width='300' src='https://sciencefictionruminations.files.wordpress.com/2012/12/thprmdsfrm1971.jpeg?w=388&h=640' />


##### 11). 762806076752277504
https://twitter.com/paprbckparadise/status/762806076752277504
```js{
  "id": "762806076752277504",
  "in": "http://pbs.twimg.com/media/CpYH3pqVMAAc0OZ.jpg",
  "result": {
    "imgurl": "https://sciencefictionruminations.files.wordpress.com/2014/04/ndrhvnsbr1982.jpg",
    "imgrefurl": "https://sciencefictionruminations.wordpress.com/2014/04/21/update-guest-post-series-announcement-the-science-fiction-of-michael-bishop",
    "h": "599",
    "w": "360",
    "tbnid": "-cpkQRezKyWgHM",
    "tbnh": "290",
    "tbnw": "174",
    "usg": "__PdxfUfKr1jJll5WP99IG2CGBVIY",
    "docid": "ZQx7hkM4RRYZpM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CpYH3pqVMAAc0OZ.jpg' /> | <img width='300' src='https://sciencefictionruminations.files.wordpress.com/2014/04/ndrhvnsbr1982.jpg' />


##### 12). 761714306320732162
https://twitter.com/paprbckparadise/status/761714306320732162
```js{
  "id": "761714306320732162",
  "in": "http://pbs.twimg.com/media/CpIm8VFUkAA2L7i.png",
  "result": {
    "imgurl": "http://d.gr-assets.com/books/1315005716l/2887070.jpg",
    "imgrefurl": "http://www.goodreads.com/book/show/2887070-north-of-capricorn",
    "h": "200",
    "w": "120",
    "tbnid": "Nu_H-8o0A6A5gM",
    "tbnh": "160",
    "tbnw": "96",
    "usg": "__5NDV7yuKkdJ9NdS3_0cHCejT7qw",
    "docid": "ExmTMKTHk3S2mM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CpIm8VFUkAA2L7i.png' /> | <img width='300' src='http://d.gr-assets.com/books/1315005716l/2887070.jpg' />


##### 13). 761352248584605696
https://twitter.com/paprbckparadise/status/761352248584605696
```js{
  "id": "761352248584605696",
  "in": "http://pbs.twimg.com/media/CpDdnBsUIAEmEWv.jpg",
  "result": {
    "imgurl": "http://www.gwthomas.org/sskull.jpg",
    "imgrefurl": "http://www.gwthomas.org/ssrgmo.htm",
    "h": "306",
    "w": "189",
    "tbnid": "JczFjDn-7ZA1LM",
    "tbnh": "244",
    "tbnw": "151",
    "usg": "__x2u8JqkiVydBVxBDKwkdyP0GQXM",
    "docid": "bC1ovpRe69F6HM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CpDdnBsUIAEmEWv.jpg' /> | <img width='300' src='http://www.gwthomas.org/sskull.jpg' />


##### 14). 760989305808429056
https://twitter.com/paprbckparadise/status/760989305808429056
```js{
  "id": "760989305808429056",
  "in": "http://pbs.twimg.com/media/Co-TutlVIAA6HR4.jpg",
  "result": {
    "imgurl": "https://sciencefictionruminations.files.wordpress.com/2012/08/screen-shot-2012-05-26-at-4-56-08-pm.png%3Fw%3D474",
    "imgrefurl": "https://sciencefictionruminations.wordpress.com/2012/08/22/adventures-in-science-fiction-art-alien-friends",
    "h": "642",
    "w": "381",
    "tbnid": "hy1lY1SJgiQ14M",
    "tbnh": "292",
    "tbnw": "173",
    "usg": "__hp4fIq7zItItMmTOdeqLZ8Y6mWE",
    "docid": "psAkM8CKdWg2EM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Co-TutlVIAA6HR4.jpg' /> | <img width='300' src='https://sciencefictionruminations.files.wordpress.com/2012/08/screen-shot-2012-05-26-at-4-56-08-pm.png?w=474' />


##### 15). 760625438892830720
https://twitter.com/paprbckparadise/status/760625438892830720
```js{
  "id": "760625438892830720",
  "in": "http://pbs.twimg.com/media/Co5Ij9bUsAELNC0.png",
  "result": {
    "imgurl": "http://i436.photobucket.com/albums/qq85/cornershop15/Books%2520on%2520Screen/Reprieve%2520-%2520The%2520Testament%2520of%2520John%2520Resko%2520and%2520Message%2520from%2520Sirius%2520-%2520Cecil%2520Jenkins.jpg",
    "imgrefurl": "http://www.britmovie.co.uk/forums/showthread.php"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Co5Ij9bUsAELNC0.png' /> | <img width='300' src='http://i436.photobucket.com/albums/qq85/cornershop15/Books%20on%20Screen/Reprieve%20-%20The%20Testament%20of%20John%20Resko%20and%20Message%20from%20Sirius%20-%20Cecil%20Jenkins.jpg' />


##### 16). 759177754126356480
https://twitter.com/paprbckparadise/status/759177754126356480
```js{
  "id": "759177754126356480",
  "in": "http://pbs.twimg.com/media/Cokj3EpVIAAq8li.jpg",
  "result": {
    "imgurl": "http://i819.photobucket.com/albums/zz116/bledec/CrashingSuns.jpg",
    "imgrefurl": "https://www.sffchronicles.com/threads/39529",
    "h": "483",
    "w": "312",
    "tbnid": "g6htXh_oR563gM",
    "tbnh": "279",
    "tbnw": "180",
    "usg": "__MOxzzRKvXruDA2T_VezQGs0R-YU",
    "docid": "DT-BRnIshVR6AM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Cokj3EpVIAAq8li.jpg' /> | <img width='300' src='http://i819.photobucket.com/albums/zz116/bledec/CrashingSuns.jpg' />


##### 17). 758815411907342336
https://twitter.com/paprbckparadise/status/758815411907342336
```js{
  "id": "758815411907342336",
  "in": "http://pbs.twimg.com/media/CofaK3zUMAA91rl.jpg",
  "result": {
    "imgurl": "http://cache.coverbrowser.com/image/signet-books/382-1.jpg",
    "imgrefurl": "http://www.coverbrowser.com/covers/signet-books/8",
    "h": "710",
    "w": "420",
    "tbnid": "0xQhwYH3_46NrM",
    "tbnh": "292",
    "tbnw": "173",
    "usg": "__Dm-BqoGJCvKEmhOGUlWwyHvuKD0",
    "docid": "4CDpzqb-j3UhZM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CofaK3zUMAA91rl.jpg' /> | <img width='300' src='http://cache.coverbrowser.com/image/signet-books/382-1.jpg' />


##### 18). 758452312809410560
https://twitter.com/paprbckparadise/status/758452312809410560
```js{
  "id": "758452312809410560",
  "in": "http://pbs.twimg.com/media/CoaPh6kUMAIaCDG.jpg",
  "result": {
    "imgurl": "http://www.fictiondb.com/coversth/th_0373190360.jpg",
    "imgrefurl": "http://www.fictiondb.com/author/linda-varner~7519.htm",
    "h": "200",
    "w": "124",
    "tbnid": "3rkSj1Nrhw8ZUM",
    "tbnh": "160",
    "tbnw": "99",
    "usg": "__ncfFaQbRsH6U3x71lnqiPsyPvn4",
    "docid": "Pd5tmS67mlzloM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CoaPh6kUMAIaCDG.jpg' /> | <img width='300' src='http://www.fictiondb.com/coversth/th_0373190360.jpg' />


##### 19). 758101287300804608
https://twitter.com/paprbckparadise/status/758101287300804608
```js{
  "id": "758101287300804608",
  "in": "http://pbs.twimg.com/media/CoVQFqzUMAEm88d.png",
  "result": {
    "imgurl": "http://www.fictiondb.com/coversth/th_156597042X.jpg",
    "imgrefurl": "http://www.fictiondb.com/author/lacey-dancer~1768.htm",
    "h": "200",
    "w": "122",
    "tbnid": "4uNLWzq4LkO8QM",
    "tbnh": "160",
    "tbnw": "97",
    "usg": "__RcMRnpcOQcDSkNN2EiMOTbCLAE0",
    "docid": "gaJxWdyLmUK0MM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CoVQFqzUMAEm88d.png' /> | <img width='300' src='http://www.fictiondb.com/coversth/th_156597042X.jpg' />


##### 20). 757694196543201281
https://twitter.com/paprbckparadise/status/757694196543201281
```js{
  "id": "757694196543201281",
  "in": "http://pbs.twimg.com/media/CoPebvXUkAEeGD0.jpg",
  "result": {
    "imgurl": "http://www.harlequin.com/media/images/books/1014-9781460350164.gif",
    "imgrefurl": "http://www.harlequin.com/author.html"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CoPebvXUkAEeGD0.jpg' /> | <img width='300' src='http://www.harlequin.com/media/images/books/1014-9781460350164.gif' />


##### 21). 756228929740943362
https://twitter.com/paprbckparadise/status/756228929740943362
```js{
  "id": "756228929740943362",
  "in": "http://pbs.twimg.com/media/Cn6p4xrVMAAdSEK.jpg",
  "result": {
    "imgurl": "http://shannonsweetvalley.com/wp-content/uploads/2011/06/SVT014.jpg",
    "imgrefurl": "http://shannonsweetvalley.com/welcome/2011/07/06/sweet-valley-twins-14-tug-of-war",
    "h": "2238",
    "w": "1500",
    "tbnid": "4U1Wr1eouy5aZM",
    "tbnh": "274",
    "tbnw": "184",
    "usg": "__q1GyLFCyK2-y3CYykPxmsLaEkEE",
    "docid": "Q_V0AiWDAn8RCM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Cn6p4xrVMAAdSEK.jpg' /> | <img width='300' src='http://shannonsweetvalley.com/wp-content/uploads/2011/06/SVT014.jpg' />


##### 22). 755892639338160129
https://twitter.com/paprbckparadise/status/755892639338160129
```js{
  "id": "755892639338160129",
  "in": "http://pbs.twimg.com/media/Cn14IN6VMAQ9Nvc.jpg",
  "result": {
    "imgurl": "http://pictures.abebooks.com/isbn/9780553204667-us-300.jpg",
    "imgrefurl": "http://www.abebooks.com/book-search/isbn/0553204661",
    "h": "400",
    "w": "300",
    "tbnid": "UaMZwZNiogB4AM",
    "tbnh": "259",
    "tbnw": "194",
    "usg": "__TqrT1Kvv-7EnLNQ1J_ry2OjUwUs",
    "docid": "mMN1HhDhunZGSM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Cn14IN6VMAQ9Nvc.jpg' /> | <img width='300' src='http://pictures.abebooks.com/isbn/9780553204667-us-300.jpg' />


##### 23). 755494650958360576
https://twitter.com/paprbckparadise/status/755494650958360576
```js{
  "id": "755494650958360576",
  "in": "http://pbs.twimg.com/media/CnwOKv3VMAAgwWl.jpg",
  "result": {
    "imgurl": "http://thumbs.ebaystatic.com/images/m/mzKusz02X0ZZt6GFzs1weRQ/s-l225.jpg",
    "imgrefurl": "http://www.ebay.com/p/Hidden-Identity-The-Redemption-of-Deke-Summers-by-Gayle-Wilson-1997-Paperback/718174",
    "h": "225",
    "w": "140",
    "tbnid": "kzQV6aDpKIEPtM",
    "tbnh": "180",
    "tbnw": "112",
    "usg": "__7aq0TBanW_a_RyBHeNgDySR9xJw",
    "docid": "FHpssNm3fijeVM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CnwOKv3VMAAgwWl.jpg' /> | <img width='300' src='http://thumbs.ebaystatic.com/images/m/mzKusz02X0ZZt6GFzs1weRQ/s-l225.jpg' />


##### 24). 755148375108878336
https://twitter.com/paprbckparadise/status/755148375108878336
```js{
  "id": "755148375108878336",
  "in": "http://pbs.twimg.com/media/CnrTTyAVMAAkpo8.jpg",
  "result": {
    "imgurl": "http://img0064.psstatic.com/154189183_amazoncom-blazing-guns-slocum-37-9780872169906-jake-.jpg",
    "imgrefurl": "https://www.popscreen.com/prod/MTU0NzU5MjMw/Slocum-395-Slocum-and-the-Trail-to-Yellowstone-Jake-Logan-Amazon-",
    "h": "300",
    "w": "300",
    "tbnid": "gbBb0ZctBaRJ6M",
    "tbnh": "225",
    "tbnw": "225",
    "usg": "__8ed7efFSdue4BUgpIwzrsgoVjac",
    "docid": "g1Mti9a8_WqEDM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CnrTTyAVMAAkpo8.jpg' /> | <img width='300' src='http://img0064.psstatic.com/154189183_amazoncom-blazing-guns-slocum-37-9780872169906-jake-.jpg' />


##### 25). 754057968165920769
https://twitter.com/paprbckparadise/status/754057968165920769
```js{
  "id": "754057968165920769",
  "in": "http://pbs.twimg.com/media/CnbzjXIUMAUkUJj.jpg",
  "result": {
    "imgurl": "http://d.gr-assets.com/books/1174315773l/378787.jpg",
    "imgrefurl": "http://www.goodreads.com/book/show/378787.The_Last_Knight_of_Albion",
    "h": "500",
    "w": "300",
    "tbnid": "bGWqYsCSFj0RqM",
    "tbnh": "290",
    "tbnw": "174",
    "usg": "__xwLnM-oOrLm1mqPkacvciGpcbzg",
    "docid": "M8c-LhBn3iTCqM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CnbzjXIUMAUkUJj.jpg' /> | <img width='300' src='http://d.gr-assets.com/books/1174315773l/378787.jpg' />


##### 26). 753740941907767296
https://twitter.com/paprbckparadise/status/753740941907767296
```js{
  "id": "753740941907767296",
  "in": "http://pbs.twimg.com/media/CnXSWqmUMAE5X3f.jpg",
  "result": {
    "imgurl": "http://www.sf-boeken.nl/vogt-manmet1000namen.jpg",
    "imgrefurl": "http://www.sf-boeken.nl/schrij-vanvogt.html",
    "h": "333",
    "w": "200",
    "tbnid": "iWb1sd-qn3w9AM",
    "tbnh": "266",
    "tbnw": "160",
    "usg": "__uoWC9vLkVebQI3zTCZ6-zkOfklw",
    "docid": "dTa45OqHwsrknM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CnXSWqmUMAE5X3f.jpg' /> | <img width='300' src='http://www.sf-boeken.nl/vogt-manmet1000namen.jpg' />


##### 27). 752971694491443200
https://twitter.com/paprbckparadise/status/752971694491443200
```js{
  "id": "752971694491443200",
  "in": "http://pbs.twimg.com/media/CnMXtEuUEAA2563.jpg",
  "result": {
    "imgurl": "https://images-na.ssl-images-amazon.com/images/I/51OLKNJf0XL.jpg",
    "imgrefurl": "https://www.amazon.com/Bane-Lord-Caladon-Craig-Mills/dp/0345289722",
    "h": "500",
    "w": "301",
    "tbnid": "_CTS92yR_X6-PM",
    "tbnh": "289",
    "tbnw": "174",
    "usg": "__eMTR_lx9ufWGkwemnDrMdVrVOqg",
    "docid": "4yTArjU4smOl0M"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CnMXtEuUEAA2563.jpg' /> | <img width='300' src='https://images-na.ssl-images-amazon.com/images/I/51OLKNJf0XL.jpg' />


##### 28). 752585514503462914
https://twitter.com/paprbckparadise/status/752585514503462914
```js{
  "id": "752585514503462914",
  "in": "http://pbs.twimg.com/media/CnG4Zk8UsAA49AH.png",
  "result": {
    "imgurl": "https://johnkennethmuir.files.wordpress.com/2012/05/joelinskimaskephemera052.jpg",
    "imgrefurl": "https://johnkennethmuir.wordpress.com/category/pop-art",
    "h": "1600",
    "w": "914",
    "tbnid": "IS-6BvUUpVbKaM",
    "tbnh": "297",
    "tbnw": "170",
    "usg": "__JwuSstFFxX4nbNHBQCBY_2WzGro",
    "docid": "XsYk7tgnVwb0CM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CnG4Zk8UsAA49AH.png' /> | <img width='300' src='https://johnkennethmuir.files.wordpress.com/2012/05/joelinskimaskephemera052.jpg' />


##### 29). 750829379115098112
https://twitter.com/paprbckparadise/status/750829379115098112
```js{
  "id": "750829379115098112",
  "in": "http://pbs.twimg.com/media/Cmt7QT2VUAAyrOe.png",
  "result": {
    "imgurl": "http://www.goodshowsir.co.uk/wp-content/uploads/2011/10/chanur.jpg",
    "imgrefurl": "http://www.goodshowsir.co.uk"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Cmt7QT2VUAAyrOe.png' /> | <img width='300' src='http://www.goodshowsir.co.uk/wp-content/uploads/2011/10/chanur.jpg' />


##### 30). 750090802487894017
https://twitter.com/paprbckparadise/status/750090802487894017
```js{
  "id": "750090802487894017",
  "in": "http://pbs.twimg.com/media/CmjbgfQUcAAkGzN.jpg",
  "result": {
    "imgurl": "http://img0003.psstatic.com/133223798_amazoncom-gunsmith-246-the-dead-mans-eyes-gunsmith-jove-.jpg",
    "imgrefurl": "https://www.popscreen.com/prod/MTg5MDczOTE4/Man-Visible-and-Invisible-Examples-of-Different-Types-of-Men-as-Seen-by-Means-of-Trained-Clairvoyance-Hardback-Common-By-author-C-W-Leadbeater-0884248535308-Books",
    "h": "300",
    "w": "300",
    "tbnid": "aas9vVzkx5zObM",
    "tbnh": "225",
    "tbnw": "225",
    "usg": "__KueOZEkNx-r_B4H2J0D1RPF4eVg",
    "docid": "jr4EuhHeZAz-1M"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CmjbgfQUcAAkGzN.jpg' /> | <img width='300' src='http://img0003.psstatic.com/133223798_amazoncom-gunsmith-246-the-dead-mans-eyes-gunsmith-jove-.jpg' />


##### 31). 748997182519332865
https://twitter.com/paprbckparadise/status/748997182519332865
```js{
  "id": "748997182519332865",
  "in": "http://pbs.twimg.com/media/CmT48tAVUAAiPg5.jpg",
  "result": {
    "imgurl": "https://d.gr-assets.com/books/1266798469s/1422323.jpg",
    "imgrefurl": "https://www.goodreads.com/author/list/196065.Sandy_Dengler",
    "h": "75",
    "w": "45",
    "tbnid": "BL6kvjhlDQCUZM",
    "tbnh": "75",
    "tbnw": "45",
    "usg": "__zV80OHnAHWskhKTuXy6-X5LKz24",
    "docid": "7c0u2IPrW5UaaM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CmT48tAVUAAiPg5.jpg' /> | <img width='300' src='https://d.gr-assets.com/books/1266798469s/1422323.jpg' />


##### 32). 748605410089656321
https://twitter.com/paprbckparadise/status/748605410089656321
```js{
  "id": "748605410089656321",
  "in": "http://pbs.twimg.com/media/CmOUM3IUYAAXVpV.jpg",
  "result": {
    "imgurl": "http://www.sff.net/people/doylemacdonald/statue_big.jpg",
    "imgrefurl": "http://www.sff.net/people/doylemacdonald/wiz3head.htm",
    "h": "475",
    "w": "312",
    "tbnid": "rkD8bjLyBIZlWM",
    "tbnh": "277",
    "tbnw": "182",
    "usg": "__-kLOf8T4Xw5zSYP9_IMRIjghnso",
    "docid": "DuHKIjSQ8PUBpM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CmOUM3IUYAAXVpV.jpg' /> | <img width='300' src='http://www.sff.net/people/doylemacdonald/statue_big.jpg' />


##### 33). 747931791579721729
https://twitter.com/paprbckparadise/status/747931791579721729
```js{
  "id": "747931791579721729",
  "in": "http://pbs.twimg.com/media/CmEvntqUgAAXJBs.png",
  "result": {
    "imgurl": "http://d2arxad8u2l0g7.cloudfront.net/books/1348359606l/412351.jpg",
    "imgrefurl": "http://www.goodreads.com/book/show/412351.Forbidden_Love",
    "h": "475",
    "w": "294",
    "tbnid": "pE_qXLu7ijR-nM",
    "tbnh": "285",
    "tbnw": "177",
    "usg": "__DcJhMiPWZjBMPY-1Qq0dBaz78p8",
    "docid": "Tn_Uku-27AKYWM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CmEvntqUgAAXJBs.png' /> | <img width='300' src='http://d2arxad8u2l0g7.cloudfront.net/books/1348359606l/412351.jpg' />


##### 34). 746437990382075904
https://twitter.com/paprbckparadise/status/746437990382075904
```js{
  "id": "746437990382075904",
  "in": "http://pbs.twimg.com/media/ClvhSEvVEAAjZLq.png",
  "result": {
    "imgurl": "https://cliqueypizza.files.wordpress.com/2009/01/sweet-valley-high-secrets-with-betty-veronica.jpg",
    "imgrefurl": "https://cliqueypizza.wordpress.com/about",
    "h": "1847",
    "w": "1141",
    "tbnid": "L6e31eq1qTra_M",
    "tbnh": "286",
    "tbnw": "176",
    "usg": "__WiWkiNpdg4jfHRUWCjrV_1waDyU",
    "docid": "h-SFdqopsv4bRM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/ClvhSEvVEAAjZLq.png' /> | <img width='300' src='https://cliqueypizza.files.wordpress.com/2009/01/sweet-valley-high-secrets-with-betty-veronica.jpg' />


##### 35). 746093289569300480
https://twitter.com/paprbckparadise/status/746093289569300480
```js{
  "id": "746093289569300480",
  "in": "http://pbs.twimg.com/media/ClqmybGVYAAQZn6.jpg",
  "result": {
    "imgurl": "http://img0017.psstatic.com/154362582_the-cemetery-vandals-sugar-creek-gang-series-and-over-.jpg",
    "imgrefurl": "https://www.popscreen.com/prod/MTU5NTU0Mjg0/-Luxe-Sugar-Creek-Maple-6-x-36-Vinyl-Plank-in-Natural",
    "h": "300",
    "w": "300",
    "tbnid": "gyTt6AjaWKA_tM",
    "tbnh": "225",
    "tbnw": "225",
    "usg": "__vXuzIUz8Z_MdpbXBxc5Yjq8LMRs",
    "docid": "A4taRtkd369efM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/ClqmybGVYAAQZn6.jpg' /> | <img width='300' src='http://img0017.psstatic.com/154362582_the-cemetery-vandals-sugar-creek-gang-series-and-over-.jpg' />


##### 36). 745767866511745024
https://twitter.com/paprbckparadise/status/745767866511745024
```js{
  "id": "745767866511745024",
  "in": "http://pbs.twimg.com/media/Cll_FyxUkAEilvZ.png",
  "result": {
    "imgurl": "http://shannonsweetvalley.com/wp-content/uploads/2009/04/svhse03.jpg",
    "imgrefurl": "http://shannonsweetvalley.com/welcome/tag/spring-break",
    "h": "2405",
    "w": "1500",
    "tbnid": "gYGTmyVbfDpKeM",
    "tbnh": "284",
    "tbnw": "177",
    "usg": "__oFXEeeop3Vo3QYzQnhUVEjxYRNk",
    "docid": "qA1gyNb-VGNLWM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Cll_FyxUkAEilvZ.png' /> | <img width='300' src='http://shannonsweetvalley.com/wp-content/uploads/2009/04/svhse03.jpg' />


##### 37). 745407512535408640
https://twitter.com/paprbckparadise/status/745407512535408640
```js{
  "id": "745407512535408640",
  "in": "http://pbs.twimg.com/media/Clg3wvRUYAQGR3Z.png",
  "result": {
    "imgurl": "https://files.ebook.bike/cover/19141.png",
    "imgrefurl": "https://tuebl.com/books/130780",
    "h": "460",
    "w": "300",
    "tbnid": "AXFdz3RPmJ2xbM",
    "tbnh": "278",
    "tbnw": "181",
    "usg": "__dLqvyLLaUwqUPmVhhzbg7trUf6U",
    "docid": "5Uq_wO47uqoPGM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Clg3wvRUYAQGR3Z.png' /> | <img width='300' src='https://files.ebook.bike/cover/19141.png' />


##### 38). 744972618948706304
https://twitter.com/paprbckparadise/status/744972618948706304
```js{
  "id": "744972618948706304",
  "in": "http://pbs.twimg.com/media/Clar7AhVAAADnP3.jpg",
  "result": {
    "imgurl": "http://www.hardyboysonline.net/thumbs/hb-048.jpg",
    "imgrefurl": "http://www.hardyboysonline.net/content.php"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Clar7AhVAAADnP3.jpg' /> | <img width='300' src='http://www.hardyboysonline.net/thumbs/hb-048.jpg' />


##### 39). 743886860523470848
https://twitter.com/paprbckparadise/status/743886860523470848
```js{
  "id": "743886860523470848",
  "in": "http://pbs.twimg.com/media/ClLRKAzUgAABqNi.jpg",
  "result": {
    "imgurl": "http://www.hardyboysonline.net/thumbs/hb-069a.jpg",
    "imgrefurl": "http://www.hardyboysonline.net/content.php"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/ClLRKAzUgAABqNi.jpg' /> | <img width='300' src='http://www.hardyboysonline.net/thumbs/hb-069a.jpg' />


##### 40). 743536457617285121
https://twitter.com/paprbckparadise/status/743536457617285121
```js{
  "id": "743536457617285121",
  "in": "http://pbs.twimg.com/media/ClGSd81UoAAjz5y.jpg",
  "result": {
    "imgurl": "http://shannonsweetvalley.com/wp-content/uploads/2011/02/SVT004.jpg",
    "imgrefurl": "http://shannonsweetvalley.com/welcome/2011/03/09/sweet-valley-twins-4-choosing-sides",
    "h": "2223",
    "w": "1500",
    "tbnid": "crmmO6OT0vuk6M",
    "tbnh": "273",
    "tbnw": "184",
    "usg": "__m_KeVOr7PTmCoh3N7ti5fJQ_44U",
    "docid": "TvPjzoXK4S3I2M"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/ClGSd81UoAAjz5y.jpg' /> | <img width='300' src='http://shannonsweetvalley.com/wp-content/uploads/2011/02/SVT004.jpg' />


##### 41). 743160425223593984
https://twitter.com/paprbckparadise/status/743160425223593984
```js{
  "id": "743160425223593984",
  "in": "http://pbs.twimg.com/media/ClA8d6bUkAA1WlU.png",
  "result": {
    "imgurl": "http://www.fictiondb.com/covers/0590460102.jpg",
    "imgrefurl": "http://www.fictiondb.com/author/alice-dalgliesh~the-silver-pencil~283666~b.htm",
    "h": "457",
    "w": "312",
    "tbnid": "1ineEENjPqB0-M",
    "tbnh": "272",
    "tbnw": "185",
    "usg": "__RzbJQbRfqr7PtI-G1-GlJnt2Do4",
    "docid": "iOwBggRmGy2XJM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/ClA8d6bUkAA1WlU.png' /> | <img width='300' src='http://www.fictiondb.com/covers/0590460102.jpg' />


##### 42). 742829085194231808
https://twitter.com/paprbckparadise/status/742829085194231808
```js{
  "id": "742829085194231808",
  "in": "http://pbs.twimg.com/media/Ck8PHbvUYAA-Jjp.jpg",
  "result": {
    "imgurl": "https://images-na.ssl-images-amazon.com/images/I/51s%252BQqqb0rL.jpg",
    "imgrefurl": "https://www.amazon.com/Boxcar-Children-Bicycle-Mystery-15/dp/0590426826",
    "h": "500",
    "w": "350",
    "tbnid": "CXTifMKMH4g3DM",
    "tbnh": "268",
    "tbnw": "188",
    "usg": "__3wnvUeZLyrHnoB1YNwPMCdO3hAQ",
    "docid": "-4LVwjQtvGmnBM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Ck8PHbvUYAA-Jjp.jpg' /> | <img width='300' src='https://images-na.ssl-images-amazon.com/images/I/51s%2BQqqb0rL.jpg' />


##### 43). 742485039678509056
https://twitter.com/paprbckparadise/status/742485039678509056
```js{
  "id": "742485039678509056",
  "in": "http://pbs.twimg.com/media/Ck3WNYWUgAAyl-C.jpg",
  "result": {
    "imgurl": "http://c.mobofree.com/m/5/546baaaef664d7d2788b456d_1024x768/Attaboy-Sam-Books-Cds-DVDs-For-sale-at-All-Nigeria.jpg",
    "imgrefurl": "http://www.mobofree.com/nigeria/Hobby-leisure-and-sports/Books-Cds-DVDs/Attaboy-Sam/1061964",
    "h": "560",
    "w": "381",
    "tbnid": "sDSMR07-igz5gM",
    "tbnh": "272",
    "tbnw": "185",
    "usg": "__N3J9kiJlfptlM8Q4zlfYMV0chWc",
    "docid": "xBmPbrFJHATnOM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Ck3WNYWUgAAyl-C.jpg' /> | <img width='300' src='http://c.mobofree.com/m/5/546baaaef664d7d2788b456d_1024x768/Attaboy-Sam-Books-Cds-DVDs-For-sale-at-All-Nigeria.jpg' />


##### 44). 741364453849993218
https://twitter.com/paprbckparadise/status/741364453849993218
```js{
  "id": "741364453849993218",
  "in": "http://pbs.twimg.com/media/CknbCsaUYAA1hXB.png",
  "result": {
    "imgurl": "http://ic.pics.livejournal.com/mockingbird_13/12895513/2366/300.jpg",
    "imgrefurl": "http://1bruce1.livejournal.com/314002.html",
    "h": "300",
    "w": "206",
    "tbnid": "X3asXNAOetFY9M",
    "tbnh": "240",
    "tbnw": "164",
    "usg": "__aoW7A7sSLb-nOR5EEzeHteI7RGg",
    "docid": "gYFiWfa64Rb1dM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CknbCsaUYAA1hXB.png' /> | <img width='300' src='http://ic.pics.livejournal.com/mockingbird_13/12895513/2366/300.jpg' />


##### 45). 741035255969153024
https://twitter.com/paprbckparadise/status/741035255969153024
```js{
  "id": "741035255969153024",
  "in": "http://pbs.twimg.com/media/Ckivo2HVAAAqAb_.jpg",
  "result": {
    "imgurl": "https://images-na.ssl-images-amazon.com/images/I/51RuZIBOU3L._AC_UL320_SR218,320_.jpg",
    "imgrefurl": "https://www.amazon.com/Hamster-Holly-Animal-Ark-35/dp/043944893X",
    "h": "320",
    "w": "218",
    "tbnid": "nDk5iNGXDPB51M",
    "tbnh": "256",
    "tbnw": "174",
    "usg": "__eoZ35Djf6slwk7xAH8t0V3kExoI",
    "docid": "oq5dClcoiAkhhM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Ckivo2HVAAAqAb_.jpg' /> | <img width='300' src='https://images-na.ssl-images-amazon.com/images/I/51RuZIBOU3L._AC_UL320_SR218,320_.jpg' />


##### 46). 739955885707907072
https://twitter.com/paprbckparadise/status/739955885707907072
```js{
  "id": "739955885707907072",
  "in": "http://pbs.twimg.com/media/CkTZ9PRUYAAJB-o.jpg",
  "result": {
    "imgurl": "https://images.contentreserve.com/ImageType-400/1191-1/A61/B49/F1/%257BA61B49F1-B912-459D-B965-249CA47453CB%257DImg400.jpg",
    "imgrefurl": "https://www.overdrive.com/series/hardy-boys",
    "h": "400",
    "w": "300",
    "tbnid": "kY5fjvHPrUqThM",
    "tbnh": "259",
    "tbnw": "194",
    "usg": "__MGfXUvrK5x48_3DWQuiGESnycZk",
    "docid": "xQB1_guXXQfnbM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CkTZ9PRUYAAJB-o.jpg' /> | <img width='300' src='https://images.contentreserve.com/ImageType-400/1191-1/A61/B49/F1/%7BA61B49F1-B912-459D-B965-249CA47453CB%7DImg400.jpg' />


##### 47). 739609275153027072
https://twitter.com/paprbckparadise/status/739609275153027072
```js{
  "id": "739609275153027072",
  "in": "http://pbs.twimg.com/media/CkOet0xUUAA1YG3.jpg",
  "result": {
    "imgurl": "http://www.fictiondb.com/coversth/th_0439687608.jpg",
    "imgrefurl": "http://www.fictiondb.com/author/ben-m-baglio~64086.htm",
    "h": "200",
    "w": "139",
    "tbnid": "PbjyUFuZ24dO9M",
    "tbnh": "160",
    "tbnw": "111",
    "usg": "__omn1zR7dY24xJ7Wm4HKuKPicVrc",
    "docid": "XuONnjrEjx5npM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CkOet0xUUAA1YG3.jpg' /> | <img width='300' src='http://www.fictiondb.com/coversth/th_0439687608.jpg' />


##### 48). 738805406458249216
https://twitter.com/paprbckparadise/status/738805406458249216
```js{
  "id": "738805406458249216",
  "in": "http://pbs.twimg.com/media/CkDDmhEUYAIOyPd.jpg",
  "result": {
    "imgurl": "http://www.series-books.com/nancydrew/minstrel/drewl92.jpg",
    "imgrefurl": "http://www.series-books.com/nancydrew/minstrelb.html",
    "h": "982",
    "w": "704",
    "tbnid": "_XR0hQuDShrJaM",
    "tbnh": "265",
    "tbnw": "190",
    "usg": "__VGZM-gEEx9GpFdfvvi0EvXSDXR8",
    "docid": "hMjQNkLzdJljlM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CkDDmhEUYAIOyPd.jpg' /> | <img width='300' src='http://www.series-books.com/nancydrew/minstrel/drewl92.jpg' />


##### 49). 738460325381431297
https://twitter.com/paprbckparadise/status/738460325381431297
```js{
  "id": "738460325381431297",
  "in": "http://pbs.twimg.com/media/Cj-JwLEVAAE1LuO.jpg",
  "result": {
    "imgurl": "http://www.tikiwebgroup.com/hardyboysbookclub/wp-content/uploads/sites/3/2013/11/004-Secret-Cargo-100x146.jpg",
    "imgrefurl": "http://www.hardyboysbookclub.com",
    "h": "146",
    "w": "100",
    "tbnid": "TETr6orDCHwkEM",
    "tbnh": "116",
    "tbnw": "80",
    "usg": "__mT8sYGMF899OI_Ggcd6yImLDlTE",
    "docid": "bEOSt-rNLg87NM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Cj-JwLEVAAE1LuO.jpg' /> | <img width='300' src='http://www.tikiwebgroup.com/hardyboysbookclub/wp-content/uploads/sites/3/2013/11/004-Secret-Cargo-100x146.jpg' />


##### 50). 738154814836637697
https://twitter.com/paprbckparadise/status/738154814836637697
```js{
  "id": "738154814836637697",
  "in": "http://pbs.twimg.com/media/Cj5z5DmVEAAir8F.jpg",
  "result": {
    "imgurl": "https://images-na.ssl-images-amazon.com/images/I/513HxPyeApL._SX326_BO1,204,203,200_.jpg",
    "imgrefurl": "https://www.amazon.com/Goosebumps-Living-Dummy-Collection-Stine/dp/0760766037",
    "h": "499",
    "w": "328",
    "tbnid": "b1403rM5d0Ke-M",
    "tbnh": "277",
    "tbnw": "182",
    "usg": "__U523gad7T1xFeyGixT5wSshABGk",
    "docid": "clpeYCfzQllIkM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Cj5z5DmVEAAir8F.jpg' /> | <img width='300' src='https://images-na.ssl-images-amazon.com/images/I/513HxPyeApL._SX326_BO1,204,203,200_.jpg' />


##### 51). 737771638280724480
https://twitter.com/paprbckparadise/status/737771638280724480
```js{
  "id": "737771638280724480",
  "in": "http://pbs.twimg.com/media/Cj0XZTQUgAEOiUK.jpg",
  "result": {
    "imgurl": "https://images-na.ssl-images-amazon.com/images/I/511AVBWGHTL.jpg",
    "imgrefurl": "https://www.amazon.com/Revenge-Mummy-Clue-Book-13/dp/0590623761",
    "h": "475",
    "w": "323",
    "tbnid": "Ahos9KvryIBMhM",
    "tbnh": "272",
    "tbnw": "185",
    "usg": "__6xU5z7fKmVBq64s65hfn5hgEMK8",
    "docid": "k7eULrl4q2MUgM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Cj0XZTQUgAEOiUK.jpg' /> | <img width='300' src='https://images-na.ssl-images-amazon.com/images/I/511AVBWGHTL.jpg' />


##### 52). 737396672993497089
https://twitter.com/paprbckparadise/status/737396672993497089
```js{
  "id": "737396672993497089",
  "in": "http://pbs.twimg.com/media/CjvCXb1UUAA72p2.jpg",
  "result": {
    "imgurl": "https://shechive.files.wordpress.com/2015/12/book-fair-day-was-the-best-day-11.jpg%3Fquality%3D80%26strip%3Dinfo%26w%3D600",
    "imgrefurl": "http://theberry.com/2015/12/23/book-fair-day-was-the-best-day",
    "h": "858",
    "w": "600",
    "tbnid": "nwzv1_67CYiG6M",
    "tbnh": "269",
    "tbnw": "188",
    "usg": "__j9X8fYM7DJkYGWKKKLaNAdAJfPs",
    "docid": "iBelXlD2nnLizM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CjvCXb1UUAA72p2.jpg' /> | <img width='300' src='https://shechive.files.wordpress.com/2015/12/book-fair-day-was-the-best-day-11.jpg?quality=80&strip=info&w=600' />


##### 53). 737024090033131520
https://twitter.com/paprbckparadise/status/737024090033131520
```js{
  "id": "737024090033131520",
  "in": "http://pbs.twimg.com/media/CjpvgRMVAAAIT8-.jpg",
  "result": {
    "imgurl": "http://images.contentful.com/7h71s48744nc/foGQ1DsOVvHHZBUoNfpUpZ/9575f0c3a7b96d768c592ba3d9f09668/missing-chums-cover-image",
    "imgrefurl": "http://www.pluggedin.ca/book-reviews/missing-chums",
    "h": "500",
    "w": "312",
    "tbnid": "jhbz_mfZ-YDisM",
    "tbnh": "284",
    "tbnw": "177",
    "usg": "__whSLjPPaVZ0jWaEYcnl-zwhLhRc",
    "docid": "VwBdflKO7xG24M"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CjpvgRMVAAAIT8-.jpg' /> | <img width='300' src='http://images.contentful.com/7h71s48744nc/foGQ1DsOVvHHZBUoNfpUpZ/9575f0c3a7b96d768c592ba3d9f09668/missing-chums-cover-image' />


##### 54). 736688529346961408
https://twitter.com/paprbckparadise/status/736688529346961408
```js{
  "id": "736688529346961408",
  "in": "http://pbs.twimg.com/media/Cjk-UDFUYAIxICI.jpg",
  "result": {
    "imgurl": "http://blog-imgs-42.fc2.com/d/o/g/dogehin/bog-g-544.jpg",
    "imgrefurl": "http://dogehin.blog31.fc2.com",
    "h": "375",
    "w": "380",
    "tbnid": "zn4gAz8wFJjE1M",
    "tbnh": "223",
    "tbnw": "226",
    "usg": "__zdXEiHSbuaAzzENBP4d40jBdns8",
    "docid": "QcPyK_4wtP34JM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Cjk-UDFUYAIxICI.jpg' /> | <img width='300' src='http://blog-imgs-42.fc2.com/d/o/g/dogehin/bog-g-544.jpg' />


##### 55). 736280814107824128
https://twitter.com/paprbckparadise/status/736280814107824128
```js{
  "id": "736280814107824128",
  "in": "http://pbs.twimg.com/media/CjfLf7BUUAEDKic.png",
  "result": {
    "imgurl": "http://cdn.rainbowresource.netdna-cdn.com/products/000813.jpg",
    "imgrefurl": "https://www.rainbowresource.com/proddtl.php"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CjfLf7BUUAEDKic.png' /> | <img width='300' src='http://cdn.rainbowresource.netdna-cdn.com/products/000813.jpg' />


##### 56). 735915344749985792
https://twitter.com/paprbckparadise/status/735915344749985792
```js{
  "id": "735915344749985792",
  "in": "http://pbs.twimg.com/media/CjZ_Gz1UoAA6CLg.jpg",
  "result": {
    "imgurl": "http://d2arxad8u2l0g7.cloudfront.net/books/1174229769m/371047.jpg",
    "imgrefurl": "http://www.goodreads.com/book/show/2932646-puppy-in-a-present",
    "h": "140",
    "w": "96",
    "tbnid": "SKySw0sO3hZOdM",
    "tbnh": "112",
    "tbnw": "76",
    "usg": "__av-jdWYKBYlvNXxOS5_lXHbWK8w",
    "docid": "2bQW3MAIVT9bXM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CjZ_Gz1UoAA6CLg.jpg' /> | <img width='300' src='http://d2arxad8u2l0g7.cloudfront.net/books/1174229769m/371047.jpg' />


##### 57). 735562935884349440
https://twitter.com/paprbckparadise/status/735562935884349440
```js{
  "id": "735562935884349440",
  "in": "http://pbs.twimg.com/media/CjU-l6iUYAAq5Z8.jpg",
  "result": {
    "imgurl": "http://www.oversixty.co.nz/media/8332/hardy-boys-3.jpg",
    "imgrefurl": "http://www.oversixty.co.nz/entertainment/books/2015/10/new-favourite-childhood-book-covers",
    "h": "500",
    "w": "305",
    "tbnid": "geJhVn2auTclGM",
    "tbnh": "288",
    "tbnw": "175",
    "usg": "__qwfbCyje69y67f9909CnvYZ-euQ",
    "docid": "h3pFG7VFWkEsZM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CjU-l6iUYAAq5Z8.jpg' /> | <img width='300' src='http://www.oversixty.co.nz/media/8332/hardy-boys-3.jpg' />


##### 58). 735221538526400512
https://twitter.com/paprbckparadise/status/735221538526400512
```js{
  "id": "735221538526400512",
  "in": "http://pbs.twimg.com/media/CjQIF-fUkAAXNUt.jpg",
  "result": {
    "imgurl": "http://d2arxad8u2l0g7.cloudfront.net/books/1311811772s/2785169.jpg",
    "imgrefurl": "http://www.goodreads.com/book/show/1421267.Melanie_Edwards_Super_Kisser",
    "h": "75",
    "w": "48",
    "tbnid": "w7idHiYfyDWxjM",
    "tbnh": "75",
    "tbnw": "48",
    "usg": "__yVkr_qyQ-aQjQ_pH_9ymI49HuvU",
    "docid": "si8mI_rrSQ4m6M"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CjQIF-fUkAAXNUt.jpg' /> | <img width='300' src='http://d2arxad8u2l0g7.cloudfront.net/books/1311811772s/2785169.jpg' />


##### 59). 734838823285202944
https://twitter.com/paprbckparadise/status/734838823285202944
```js{
  "id": "734838823285202944",
  "in": "http://pbs.twimg.com/media/CjKsBBGUkAAluGt.jpg",
  "result": {
    "imgurl": "https://chelleshockk.files.wordpress.com/2011/07/on-the-edge1.jpg",
    "imgrefurl": "https://chelleshockk.wordpress.com/2011/07/23/judging-a-book-by-its-cover",
    "h": "2460",
    "w": "1500",
    "tbnid": "kjirvl8k4VaG9M",
    "tbnh": "288",
    "tbnw": "175",
    "usg": "___rzB2heqPAx1i8x1fLgj1ejBzVE",
    "docid": "xZpV4H59li15KM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CjKsBBGUkAAluGt.jpg' /> | <img width='300' src='https://chelleshockk.files.wordpress.com/2011/07/on-the-edge1.jpg' />


##### 60). 734106689952059392
https://twitter.com/paprbckparadise/status/734106689952059392
```js{
  "id": "734106689952059392",
  "in": "http://pbs.twimg.com/media/CjASJPOVEAEoVB2.jpg",
  "result": {
    "imgurl": "http://www.gamebooks.org/gallery/cyoa071thumb.jpg",
    "imgrefurl": "http://www.gamebooks.org/cgi-bin/search.cgi"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CjASJPOVEAEoVB2.jpg' /> | <img width='300' src='http://www.gamebooks.org/gallery/cyoa071thumb.jpg' />


##### 61). 733749467590107136
https://twitter.com/paprbckparadise/status/733749467590107136
```js{
  "id": "733749467590107136",
  "in": "http://pbs.twimg.com/media/Ci7NQJkUoAUFl-c.jpg",
  "result": {
    "imgurl": "https://90sflashback.files.wordpress.com/2015/07/app.jpg",
    "imgrefurl": "https://90sflashback.wordpress.com/2015/07",
    "h": "2271",
    "w": "1500",
    "tbnid": "80TGfZIoLzaJJM",
    "tbnh": "276",
    "tbnw": "182",
    "usg": "__TILmeQTtRXdUA73xoWx66BAT68I",
    "docid": "D-VQarJGVT659M"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Ci7NQJkUoAUFl-c.jpg' /> | <img width='300' src='https://90sflashback.files.wordpress.com/2015/07/app.jpg' />


##### 62). 733063541595344898
https://twitter.com/paprbckparadise/status/733063541595344898
```js{
  "id": "733063541595344898",
  "in": "http://pbs.twimg.com/media/CixdaArUkAAGl_W.jpg",
  "result": {
    "imgurl": "http://www.series-books.com/nancydrew/pbs/files42.jpg",
    "imgrefurl": "http://www.series-books.com/nancydrew/files.html",
    "h": "670",
    "w": "397",
    "tbnid": "hYLbSjlBA39l9M",
    "tbnh": "292",
    "tbnw": "173",
    "usg": "__x29u4x-p3ASDDY5vUihLS-5vpUY",
    "docid": "gu38qPfxJUet8M"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CixdaArUkAAGl_W.jpg' /> | <img width='300' src='http://www.series-books.com/nancydrew/pbs/files42.jpg' />


##### 63). 732669361970761728
https://twitter.com/paprbckparadise/status/732669361970761728
```js{
  "id": "732669361970761728",
  "in": "http://pbs.twimg.com/media/Cir25wGUgAA4mz3.jpg",
  "result": {
    "imgurl": "https://images-na.ssl-images-amazon.com/images/I/41KJVDK07XL.jpg",
    "imgrefurl": "http://www.thriftbooks.com/series/sitting-pretty/69582",
    "h": "384",
    "w": "267",
    "tbnid": "Xf88IaKxqv9okM",
    "tbnh": "269",
    "tbnw": "187",
    "usg": "__imVjFZy-CWQsApHVutzsUFwIBGc",
    "docid": "Sp0upIv8KATGwM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Cir25wGUgAA4mz3.jpg' /> | <img width='300' src='https://images-na.ssl-images-amazon.com/images/I/41KJVDK07XL.jpg' />


##### 64). 732379201458708480
https://twitter.com/paprbckparadise/status/732379201458708480
```js{
  "id": "732379201458708480",
  "in": "http://pbs.twimg.com/media/CinvALtVAAEauFW.jpg",
  "result": {
    "imgurl": "http://d.gr-assets.com/books/1186761908l/1679151.jpg",
    "imgrefurl": "http://www.goodreads.com/book/show/1679151.The_Great_Pet_Project",
    "h": "475",
    "w": "321",
    "tbnid": "Kp0Rre4C9FwgbM",
    "tbnh": "273",
    "tbnw": "184",
    "usg": "__0zouFarPZLH_AE7uxvHsnkyzKKM",
    "docid": "DUMi7bjOsW8nDM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CinvALtVAAEauFW.jpg' /> | <img width='300' src='http://d.gr-assets.com/books/1186761908l/1679151.jpg' />


##### 65). 731629383333478400
https://twitter.com/paprbckparadise/status/731629383333478400
```js{
  "id": "731629383333478400",
  "in": "http://pbs.twimg.com/media/CidFDBlU4AEEkI9.jpg",
  "result": {
    "imgurl": "https://cliqueypizza.files.wordpress.com/2012/05/thenewbobbseytwinslauraleehope_thumb1.jpg%3Fw%3D251%26h%3D368",
    "imgrefurl": "https://cliqueypizza.wordpress.com/2012/05/09/new-part-1-a-z-series-guide-forgotten-80s-and-90s-young-adult-series-2",
    "h": "368",
    "w": "251",
    "tbnid": "6AjvuPQHuW1L2M",
    "tbnh": "272",
    "tbnw": "185",
    "usg": "__gBYrad1NDjRG0i4Yz3GXMaNTIjU",
    "docid": "4wVuBaTH4n_KuM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CidFDBlU4AEEkI9.jpg' /> | <img width='300' src='https://cliqueypizza.files.wordpress.com/2012/05/thenewbobbseytwinslauraleehope_thumb1.jpg?w=251&h=368' />


##### 66). 731277454103318528
https://twitter.com/paprbckparadise/status/731277454103318528
```js{
  "id": "731277454103318528",
  "in": "http://pbs.twimg.com/media/CiYE-CuVAAEY6bU.png",
  "result": {
    "imgurl": "http://www.phyllisnaylor.com/otwalskypath350.jpg",
    "imgrefurl": "http://www.phyllisnaylor.com/MiddleGrade.htm",
    "h": "521",
    "w": "350",
    "tbnid": "VGr0ALRTrYS4vM",
    "tbnh": "274",
    "tbnw": "184",
    "usg": "__bdsvL6lKqPECVnHgv_xmtJLA3sg",
    "docid": "HBsRDSV4qMuBpM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CiYE-CuVAAEY6bU.png' /> | <img width='300' src='http://www.phyllisnaylor.com/otwalskypath350.jpg' />


##### 67). 730936310559428613
https://twitter.com/paprbckparadise/status/730936310559428613
```js{
  "id": "730936310559428613",
  "in": "http://pbs.twimg.com/media/CiTOs2mUoAAJI7q.jpg",
  "result": {
    "imgurl": "http://ecx.images-amazon.com/images/I/61R2wwR1iEL._BO2,204,203,200_PIsitb-sticker-arrow-click,TopRight,35,-76_AA300_SH20_OU01_.jpg",
    "imgrefurl": "http://lucaspam.deviantart.com/journal/Treasure-in-an-Oatmeal-Box-e-book-downloads-312974033",
    "h": "300",
    "w": "300",
    "tbnid": "gOtFkIL44xellM",
    "tbnh": "225",
    "tbnw": "225",
    "usg": "__598lDRd82pymhayUBlgADvzFhSc",
    "docid": "nvmfnyfR_jnZjM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CiTOs2mUoAAJI7q.jpg' /> | <img width='300' src='http://ecx.images-amazon.com/images/I/61R2wwR1iEL._BO2,204,203,200_PIsitb-sticker-arrow-click,TopRight,35,-76_AA300_SH20_OU01_.jpg' />


##### 68). 730483391817121792
https://twitter.com/paprbckparadise/status/730483391817121792
```js{
  "id": "730483391817121792",
  "in": "http://pbs.twimg.com/media/CiMyxiSUoAE0ns_.jpg",
  "result": {
    "imgurl": "http://pictures.abebooks.com/LIVRESSURSORGUECOM/19152652464.jpg",
    "imgrefurl": "http://www.abebooks.com/book-search/title/hardy-boys/author/dixon/pics",
    "h": "480",
    "w": "307",
    "tbnid": "RMYrppsZ7b0YxM",
    "tbnh": "281",
    "tbnw": "179",
    "usg": "__2o6KlIuHvnmC0Rg-CpWQkV5udBY",
    "docid": "oCky_vc1IsxGLM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CiMyxiSUoAE0ns_.jpg' /> | <img width='300' src='http://pictures.abebooks.com/LIVRESSURSORGUECOM/19152652464.jpg' />


##### 69). 729706980403761152
https://twitter.com/paprbckparadise/status/729706980403761152
```js{
  "id": "729706980403761152",
  "in": "http://pbs.twimg.com/media/CiBwoaHWwAAu7A8.jpg",
  "result": {
    "imgurl": "https://anastasiagarcia.files.wordpress.com/2013/09/vampire-breath.jpg",
    "imgrefurl": "https://anastasiagarcia.wordpress.com/2013/06/23/goosebumps-book-cover-redesigns-that-will-make-you-scream-and-not-in-the-good-way",
    "h": "2400",
    "w": "3363",
    "tbnid": "fFgJmgrnRjs4HM",
    "tbnh": "190",
    "tbnw": "266",
    "usg": "__IeUxUwMhesr2N0lQmb8N3O8X0KI",
    "docid": "dBju1Q8Y3p1KSM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CiBwoaHWwAAu7A8.jpg' /> | <img width='300' src='https://anastasiagarcia.files.wordpress.com/2013/09/vampire-breath.jpg' />


##### 70). 729360937422073856
https://twitter.com/paprbckparadise/status/729360937422073856
```js{
  "id": "729360937422073856",
  "in": "http://pbs.twimg.com/media/Ch816FnXIAAZS-E.jpg",
  "result": {
    "imgurl": "http://www.newworldzorro.com/seriesbooks/nancydrew/pc/drewpc7.jpg",
    "imgrefurl": "http://www.series-books.com/nancydrew/pc1-56.html",
    "h": "927",
    "w": "610",
    "tbnid": "fBYkaYWOy4sXeM",
    "tbnh": "277",
    "tbnw": "182",
    "usg": "__0VKVWa1NO0rBXiKwlqTXEU8F3Qw",
    "docid": "P9rYWe8AhGaN5M"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Ch816FnXIAAZS-E.jpg' /> | <img width='300' src='http://www.newworldzorro.com/seriesbooks/nancydrew/pc/drewpc7.jpg' />


##### 71). 728965392899686400
https://twitter.com/paprbckparadise/status/728965392899686400
```js{
  "id": "728965392899686400",
  "in": "http://pbs.twimg.com/media/Ch3OKXwW0AEbVdN.jpg",
  "result": {
    "imgurl": "https://images-na.ssl-images-amazon.com/images/I/51LltWT4QGL.jpg",
    "imgrefurl": "https://www.amazon.com/Dangerous-Games-Nancy-Hardy-Mysteries/dp/067174108X",
    "h": "397",
    "w": "255",
    "tbnid": "7FtUJpZLQt9t6M",
    "tbnh": "280",
    "tbnw": "180",
    "usg": "__bZv004M368MgKWnJACKzXlrId8w",
    "docid": "yLpl5m4HcWmzMM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Ch3OKXwW0AEbVdN.jpg' /> | <img width='300' src='https://images-na.ssl-images-amazon.com/images/I/51LltWT4QGL.jpg' />


##### 72). 728631383225151488
https://twitter.com/paprbckparadise/status/728631383225151488
```js{
  "id": "728631383225151488",
  "in": "http://pbs.twimg.com/media/ChyeYcjWEAEJdbw.jpg",
  "result": {
    "imgurl": "http://ewoodruff.com/wp-content/uploads/awfully_short.jpg",
    "imgrefurl": "http://ewoodruff.com/books/awfully-short-for-fourth-grade",
    "h": "300",
    "w": "197",
    "tbnid": "ub7DvhxqSd8utM",
    "tbnh": "240",
    "tbnw": "157",
    "usg": "__w072LebV6PT6yw0g8QP6GVcaLtU",
    "docid": "ICTz68AOPR4v3M"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/ChyeYcjWEAEJdbw.jpg' /> | <img width='300' src='http://ewoodruff.com/wp-content/uploads/awfully_short.jpg' />


##### 73). 728313291601252352
https://twitter.com/paprbckparadise/status/728313291601252352
```js{
  "id": "728313291601252352",
  "in": "http://pbs.twimg.com/media/Cht9FFOWkAIBzyM.jpg",
  "result": {
    "imgurl": "http://prodimage.images-bn.com/pimages/9780807554043_p0_v1_s1200x630.jpg",
    "imgrefurl": "http://www.barnesandnoble.com/w/mystery-of-the-hidden-beach-gertrude-chandler-warner/1100189807",
    "h": "600",
    "w": "407",
    "tbnid": "rHJfA85kZIFYlM",
    "tbnh": "273",
    "tbnw": "185",
    "usg": "__uegKQj0CS-dJPGLpL147J5zhunY",
    "docid": "abLAc0xX0Jk0DM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Cht9FFOWkAIBzyM.jpg' /> | <img width='300' src='http://prodimage.images-bn.com/pimages/9780807554043_p0_v1_s1200x630.jpg' />


##### 74). 727910483517448195
https://twitter.com/paprbckparadise/status/727910483517448195
```js{
  "id": "727910483517448195",
  "in": "http://pbs.twimg.com/media/ChoOuhtWUAIFqpM.jpg",
  "result": {
    "imgurl": "http://www.auctionexpress.com/bmz_cache/2/202cbb4534a30340a1925677d0046e36.image.81x100.jpg",
    "imgrefurl": "http://www.auctionexpress.com/books/young-adult/sleepover-friends",
    "h": "100",
    "w": "81",
    "tbnid": "GOl8PPX5H9eP-M",
    "tbnh": "86",
    "tbnw": "70",
    "usg": "__MFlTdW-1euR_pxpq7qSiTIWfk-E",
    "docid": "33iCD7iIxTAhzM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/ChoOuhtWUAIFqpM.jpg' /> | <img width='300' src='http://www.auctionexpress.com/bmz_cache/2/202cbb4534a30340a1925677d0046e36.image.81x100.jpg' />


##### 75). 727540314034970625
https://twitter.com/paprbckparadise/status/727540314034970625
```js{
  "id": "727540314034970625",
  "in": "http://pbs.twimg.com/media/Chi-D3ZUkAA0yr4.jpg",
  "result": {
    "imgurl": "https://images-na.ssl-images-amazon.com/images/I/51lz7WZLdvL.jpg",
    "imgrefurl": "https://www.amazon.com/Greg-Maddux-Christopher-Sports-Bookshelf/dp/0316141917",
    "h": "500",
    "w": "326",
    "tbnid": "ix1mgYS_EKt4iM",
    "tbnh": "278",
    "tbnw": "181",
    "usg": "__sb2yTtZ_C41VHyAPx8nz0pqQC-o",
    "docid": "ZVnTiE_lZBCcJM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Chi-D3ZUkAA0yr4.jpg' /> | <img width='300' src='https://images-na.ssl-images-amazon.com/images/I/51lz7WZLdvL.jpg' />


##### 76). 727237251948679169
https://twitter.com/paprbckparadise/status/727237251948679169
```js{
  "id": "727237251948679169",
  "in": "http://pbs.twimg.com/media/CheqbVEVEAAGXJH.jpg",
  "result": {
    "imgurl": "http://d2arxad8u2l0g7.cloudfront.net/books/1330774994l/290404.jpg",
    "imgrefurl": "http://www.goodreads.com/book/show/290404.Jessica_s_Secret",
    "h": "475",
    "w": "315",
    "tbnid": "E_iSKsqM_P-2oM",
    "tbnh": "276",
    "tbnw": "183",
    "usg": "__usEqqNom6eomSzucDx1q-Dupn3E",
    "docid": "2vakUQSaV7kshM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CheqbVEVEAAGXJH.jpg' /> | <img width='300' src='http://d2arxad8u2l0g7.cloudfront.net/books/1330774994l/290404.jpg' />


##### 77). 726898376504025088
https://twitter.com/paprbckparadise/status/726898376504025088
```js{
  "id": "726898376504025088",
  "in": "http://pbs.twimg.com/media/ChZ2OLbUgAADLhr.jpg",
  "result": {
    "imgurl": "http://www0.alibris-static.com/sweet-valley-twins-chiller-2-the-ghost-in-the-graveyard/isbn/9780553158014.gif",
    "imgrefurl": "http://www.alibris.com/search/books/subject/Twins-Fiction",
    "h": "187",
    "w": "125",
    "tbnid": "QKIxzo_mBt75VM",
    "tbnh": "149",
    "tbnw": "100",
    "usg": "__OiAc6z7wEmTn8EzXFlhemhJUkug",
    "docid": "746tiwngQfELFM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/ChZ2OLbUgAADLhr.jpg' /> | <img width='300' src='http://www0.alibris-static.com/sweet-valley-twins-chiller-2-the-ghost-in-the-graveyard/isbn/9780553158014.gif' />


##### 78). 726466487918039040
https://twitter.com/paprbckparadise/status/726466487918039040
```js{
  "id": "726466487918039040",
  "in": "http://pbs.twimg.com/media/ChTta7ZU4AAi53n.jpg",
  "result": {
    "imgurl": "http://www.newworldzorro.com/seriesbooks/nancydrew/pc/drewpc2b.jpg",
    "imgrefurl": "http://www.series-books.com/nancydrew/pc1-56.html",
    "h": "935",
    "w": "602",
    "tbnid": "17bYO3HcJw5YXM",
    "tbnh": "280",
    "tbnw": "180",
    "usg": "__EhfVlzq1MNyvHtEDuuSPIn24k0w",
    "docid": "P9rYWe8AhGaN5M"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/ChTta7ZU4AAi53n.jpg' /> | <img width='300' src='http://www.newworldzorro.com/seriesbooks/nancydrew/pc/drewpc2b.jpg' />


##### 79). 726098532973703168
https://twitter.com/paprbckparadise/status/726098532973703168
```js{
  "id": "726098532973703168",
  "in": "http://pbs.twimg.com/media/ChOexIiUoAAZRd0.jpg",
  "result": {
    "imgurl": "http://www.series-books.com/nancydrew/pbs/files28.jpg",
    "imgrefurl": "http://www.series-books.com/nancydrew/files.html",
    "h": "667",
    "w": "404",
    "tbnid": "C0CDZOVLm2H3DM",
    "tbnh": "289",
    "tbnw": "175",
    "usg": "__r0WRGnNGYxtP1vN1wZBuJq8Lwt8",
    "docid": "gu38qPfxJUet8M"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/ChOexIiUoAAZRd0.jpg' /> | <img width='300' src='http://www.series-books.com/nancydrew/pbs/files28.jpg' />


##### 80). 725733343342415872
https://twitter.com/paprbckparadise/status/725733343342415872
```js{
  "id": "725733343342415872",
  "in": "http://pbs.twimg.com/media/ChJSoQnUUAA1RJo.jpg",
  "result": {
    "imgurl": "https://biblioklept.files.wordpress.com/2013/10/20131019-174611.jpg%3Fw%3D614%26h%3D461",
    "imgrefurl": "https://biblioklept.org/2013/10/19/moby-dicks",
    "h": "461",
    "w": "614",
    "tbnid": "fbSIszvURqWJdM",
    "tbnh": "194",
    "tbnw": "259",
    "usg": "__ev_wzM0ielZJl4Qke70WqbVdHZg",
    "docid": "zWHA4Ygnnt0aeM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/ChJSoQnUUAA1RJo.jpg' /> | <img width='300' src='https://biblioklept.files.wordpress.com/2013/10/20131019-174611.jpg?w=614&h=461' />


##### 81). 725367520971120640
https://twitter.com/paprbckparadise/status/725367520971120640
```js{
  "id": "725367520971120640",
  "in": "http://pbs.twimg.com/media/ChEF6qAU0AEr6gh.jpg",
  "result": {
    "imgurl": "http://seriesbookart.weebly.com/uploads/2/4/0/8/24088442/7592118_orig.jpg",
    "imgrefurl": "http://seriesbookart.weebly.com/the-hardy-boys-1-58.html",
    "h": "599",
    "w": "402",
    "tbnid": "Mf9k_BAKxOCA6M",
    "tbnh": "274",
    "tbnw": "184",
    "usg": "__6C4aDpHp_Jfv4kXX6y-H_OlFqSA",
    "docid": "AeBq9Sap7yajmM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/ChEF6qAU0AEr6gh.jpg' /> | <img width='300' src='http://seriesbookart.weebly.com/uploads/2/4/0/8/24088442/7592118_orig.jpg' />


##### 82). 725070441166045189
https://twitter.com/paprbckparadise/status/725070441166045189
```js{
  "id": "725070441166045189",
  "in": "http://pbs.twimg.com/media/Cg_3uUXUcAARaHM.png",
  "result": {
    "imgurl": "http://www.oddee.com/_media/imgs/articles2/a97274_b6.jpg",
    "imgrefurl": "http://www.oddee.com/item_97274.aspx",
    "h": "592",
    "w": "400",
    "tbnid": "gfCklZuDvc4CKM",
    "tbnh": "273",
    "tbnw": "184",
    "usg": "__dm3fWOCkjCKVd4iAnvuz0tHn2nw",
    "docid": "vqt4ZqSWr27MNM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Cg_3uUXUcAARaHM.png' /> | <img width='300' src='http://www.oddee.com/_media/imgs/articles2/a97274_b6.jpg' />


##### 83). 724342509137104896
https://twitter.com/paprbckparadise/status/724342509137104896
```js{
  "id": "724342509137104896",
  "in": "http://pbs.twimg.com/media/Cg1hrHkUYAAYvht.jpg",
  "result": {
    "imgurl": "https://img.fantasticfiction.com/bigthumbs/n7/n35972.jpg",
    "imgrefurl": "https://www.fantasticfiction.com/s/andrew-e-svenson/danger-on-vampire-trail.htm",
    "h": "124",
    "w": "80",
    "tbnid": "VmXpUcRuo-vZsM",
    "tbnh": "99",
    "tbnw": "64",
    "usg": "__60IS9OwtrXlfIX8VMgkB22UbCmo",
    "docid": "S9tVcHRExvStGM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Cg1hrHkUYAAYvht.jpg' /> | <img width='300' src='https://img.fantasticfiction.com/bigthumbs/n7/n35972.jpg' />


##### 84). 723647872307064833
https://twitter.com/paprbckparadise/status/723647872307064833
```js{
  "id": "723647872307064833",
  "in": "http://pbs.twimg.com/media/Cgrp57LU8AEE13D.jpg",
  "result": {
    "imgurl": "https://hardyboysbookreviews.files.wordpress.com/2014/06/36.jpg",
    "imgrefurl": "https://hardyboysbookreviews.com/2014/06/18/36-the-secret-of-pirates-hill",
    "h": "377",
    "w": "246",
    "tbnid": "eT6RXwK4pjdN7M",
    "tbnh": "278",
    "tbnw": "181",
    "usg": "__EadBBsEOS964Y5yHZyhHKnzAdWA",
    "docid": "pI3Ap25uXm1VKM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Cgrp57LU8AEE13D.jpg' /> | <img width='300' src='https://hardyboysbookreviews.files.wordpress.com/2014/06/36.jpg' />


##### 85). 723195263758688257
https://twitter.com/paprbckparadise/status/723195263758688257
```js{
  "id": "723195263758688257",
  "in": "http://pbs.twimg.com/media/CglOQpNU4AAaijc.jpg",
  "result": {
    "imgurl": "http://artofheartandhome.com/wp-content/uploads/2014/06/Book-1-the-boxcar-children-30620024-323-475.jpg",
    "imgrefurl": "http://artofheartandhome.com/2014/06/read-aloud-book-list-for-2013-2014.html",
    "h": "475",
    "w": "323",
    "tbnid": "Y7YI59W8O2aEiM",
    "tbnh": "272",
    "tbnw": "185",
    "usg": "__loCeUcZlXBmekzhX_mQYEqFjs-c",
    "docid": "stL85w2kMM5yXM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CglOQpNU4AAaijc.jpg' /> | <img width='300' src='http://artofheartandhome.com/wp-content/uploads/2014/06/Book-1-the-boxcar-children-30620024-323-475.jpg' />


##### 86). 722870970130653185
https://twitter.com/paprbckparadise/status/722870970130653185
```js{
  "id": "722870970130653185",
  "in": "http://pbs.twimg.com/media/CggnURlUMAAQjbo.jpg",
  "result": {
    "imgurl": "https://cliqueypizza.files.wordpress.com/2009/03/fifth-grade-stars-80s-teen-young-adult-book-series.jpg",
    "imgrefurl": "https://cliqueypizza.wordpress.com/page/54",
    "h": "615",
    "w": "419",
    "tbnid": "eGyxiDt4G5roBM",
    "tbnh": "272",
    "tbnw": "185",
    "usg": "__4VvHVMkvQBuzshtb3WW2e_tNGqI",
    "docid": "KOkqMNOGAALQXM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CggnURlUMAAQjbo.jpg' /> | <img width='300' src='https://cliqueypizza.files.wordpress.com/2009/03/fifth-grade-stars-80s-teen-young-adult-book-series.jpg' />


##### 87). 722833098694479873
https://twitter.com/paprbckparadise/status/722833098694479873
```js{
  "id": "722833098694479873",
  "in": "http://pbs.twimg.com/media/CggE33ZUYAAuMLw.jpg",
  "result": {
    "imgurl": "https://images-na.ssl-images-amazon.com/images/I/41Sir1QkH-L.jpg",
    "imgrefurl": "https://www.amazon.com/Camp-Out-Mystery-Boxcar-Children-No/dp/0807510521",
    "h": "500",
    "w": "375",
    "tbnid": "QRsRwv2BU7z_5M",
    "tbnh": "259",
    "tbnw": "194",
    "usg": "__2sPns7w0iwdN2UI_0-Cnvfocr74",
    "docid": "OzL8_RIGcamlYM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CggE33ZUYAAuMLw.jpg' /> | <img width='300' src='https://images-na.ssl-images-amazon.com/images/I/41Sir1QkH-L.jpg' />


##### 88). 721423358580002816
https://twitter.com/paprbckparadise/status/721423358580002816
```js{
  "id": "721423358580002816",
  "in": "http://pbs.twimg.com/media/CgMCuMeUAAA4g8N.jpg",
  "result": {
    "imgurl": "http://www.quirkbooks.com/sites/default/files/editor_uploads/original/boxcar.jpg",
    "imgrefurl": "http://www.quirkbooks.com/post/book-lovers-day-titles-made-us-fall-love",
    "h": "400",
    "w": "278",
    "tbnid": "FDZSt81pQuDICM",
    "tbnh": "269",
    "tbnw": "187",
    "usg": "__GiWt0ofqMPqtuNUmSw196jKo9M4",
    "docid": "xUd8XtoNvQXfEM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CgMCuMeUAAA4g8N.jpg' /> | <img width='300' src='http://www.quirkbooks.com/sites/default/files/editor_uploads/original/boxcar.jpg' />


##### 89). 721057679574065158
https://twitter.com/paprbckparadise/status/721057679574065158
```js{
  "id": "721057679574065158",
  "in": "http://pbs.twimg.com/media/CgG2I3-UUAA8uR6.jpg",
  "result": {
    "imgurl": "https://whatsablog2016.files.wordpress.com/2016/06/3057675741e0ca73cce291b8d32bc1611.jpg%3Fw%3D636",
    "imgrefurl": "https://whatsablog2016.wordpress.com/tag/2000s",
    "h": "716",
    "w": "564",
    "tbnid": "5LFSetMeVDMw5M",
    "tbnh": "253",
    "tbnw": "199",
    "usg": "__wYwmpT2Rl8lRv0ZJWSHgyqamUVo",
    "docid": "h-YE_lkSK-Hw6M"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CgG2I3-UUAA8uR6.jpg' /> | <img width='300' src='https://whatsablog2016.files.wordpress.com/2016/06/3057675741e0ca73cce291b8d32bc1611.jpg?w=636' />


##### 90). 720638464102764544
https://twitter.com/paprbckparadise/status/720638464102764544
```js{
  "id": "720638464102764544",
  "in": "http://pbs.twimg.com/media/CgA43UoUAAAWhOq.jpg",
  "result": {
    "imgurl": "https://d.gr-assets.com/books/1202225756s/1961505.jpg",
    "imgrefurl": "https://www.goodreads.com/series/46033-the-blythe-girls",
    "h": "74",
    "w": "50",
    "tbnid": "UxwWajTWwkWy5M",
    "tbnh": "74",
    "tbnw": "50",
    "usg": "__Z7-8PjiHiJ1DhnCOcL7ujwipwSg",
    "docid": "JG-MmNJYZjgdlM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CgA43UoUAAAWhOq.jpg' /> | <img width='300' src='https://d.gr-assets.com/books/1202225756s/1961505.jpg' />


##### 91). 719937833100685312
https://twitter.com/paprbckparadise/status/719937833100685312
```js{
  "id": "719937833100685312",
  "in": "http://pbs.twimg.com/media/Cf27pNcUEAAejZg.jpg",
  "result": {
    "imgurl": "http://img0075.psstatic.com/152640896_amazoncom-path-of-the-pale-horse-9780590464215-paul-.jpg",
    "imgrefurl": "https://www.popscreen.com/prod/MTE4MjQzNDc0/Semillas-seedfolks-Spanish-Edition-Paul-Fleischman-9780606271820-",
    "h": "300",
    "w": "300",
    "tbnid": "KZVivrqDv4FPKM",
    "tbnh": "225",
    "tbnw": "225",
    "usg": "__5-Sw5FHMBUq8W7XyG5TFR6XhGpM",
    "docid": "NWSOwlxU_d0bLM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Cf27pNcUEAAejZg.jpg' /> | <img width='300' src='http://img0075.psstatic.com/152640896_amazoncom-path-of-the-pale-horse-9780590464215-paul-.jpg' />


##### 92). 719577764253138945
https://twitter.com/paprbckparadise/status/719577764253138945
```js{
  "id": "719577764253138945",
  "in": "http://pbs.twimg.com/media/Cfx0KcpUsAEbObC.jpg",
  "result": {
    "imgurl": "http://images.contentful.com/7h71s48744nc/KjYIEoErWW4AVPB4G59LLQ/47bd814095a5db3b4abb6f03517f9f30/heart-full-of-hope-cover-image",
    "imgrefurl": "http://www.pluggedin.ca/book-reviews/heart-full-of-hope",
    "h": "480",
    "w": "336",
    "tbnid": "o1lEXhV_CCn7UM",
    "tbnh": "268",
    "tbnw": "188",
    "usg": "__kvb-CZPXyckwKqASKCMNV-ur7dc",
    "docid": "uJusxm6w9f6OEM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Cfx0KcpUsAEbObC.jpg' /> | <img width='300' src='http://images.contentful.com/7h71s48744nc/KjYIEoErWW4AVPB4G59LLQ/47bd814095a5db3b4abb6f03517f9f30/heart-full-of-hope-cover-image' />


##### 93). 719223403626909697
https://twitter.com/paprbckparadise/status/719223403626909697
```js{
  "id": "719223403626909697",
  "in": "http://pbs.twimg.com/media/Cfsx39uUYAA6_u9.jpg",
  "result": {
    "imgurl": "https://d2arxad8u2l0g7.cloudfront.net/books/1302736532l/1307483.jpg",
    "imgrefurl": "https://www.goodreads.com/genres/series-bscish",
    "h": "454",
    "w": "318",
    "tbnid": "7aqB2yz1cYEwBM",
    "tbnh": "268",
    "tbnw": "188",
    "usg": "__waJZi3kR9YSiib7cjB-OTupGcjc",
    "docid": "O7xhnc8Oz1NbfM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Cfsx39uUYAA6_u9.jpg' /> | <img width='300' src='https://d2arxad8u2l0g7.cloudfront.net/books/1302736532l/1307483.jpg' />


##### 94). 718888693893767168
https://twitter.com/paprbckparadise/status/718888693893767168
```js{
  "id": "718888693893767168",
  "in": "http://pbs.twimg.com/media/CfoBdSRUkAAI-LX.jpg",
  "result": {
    "imgurl": "https://images-na.ssl-images-amazon.com/images/I/21RDG2F97GL._AC_UL320_SR220,320_.jpg",
    "imgrefurl": "https://www.amazon.com/Surprise-Sweet-Valley-Kids/dp/0553157582",
    "h": "320",
    "w": "220",
    "tbnid": "cjtMQdeYD5nneM",
    "tbnh": "256",
    "tbnw": "176",
    "usg": "__leZ6GfwrQ8ACnvuWK8yOvFnodn8",
    "docid": "bhi4SfC0m8i8LM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CfoBdSRUkAAI-LX.jpg' /> | <img width='300' src='https://images-na.ssl-images-amazon.com/images/I/21RDG2F97GL._AC_UL320_SR220,320_.jpg' />


##### 95). 718449143597772802
https://twitter.com/paprbckparadise/status/718449143597772802
```js{
  "id": "718449143597772802",
  "in": "http://pbs.twimg.com/media/CfhxsGFUkAASBlH.jpg",
  "result": {
    "imgurl": "https://cliqueypizza.files.wordpress.com/2012/05/thenewbobbseytwinslauraleehope_thumb1.jpg%3Fw%3D251%26h%3D368",
    "imgrefurl": "https://cliqueypizza.wordpress.com/2012/05/09/new-part-1-a-z-series-guide-forgotten-80s-and-90s-young-adult-series-2",
    "h": "368",
    "w": "251",
    "tbnid": "6AjvuPQHuW1L2M",
    "tbnh": "272",
    "tbnw": "185",
    "usg": "__gBYrad1NDjRG0i4Yz3GXMaNTIjU",
    "docid": "4wVuBaTH4n_KuM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CfhxsGFUkAASBlH.jpg' /> | <img width='300' src='https://cliqueypizza.files.wordpress.com/2012/05/thenewbobbseytwinslauraleehope_thumb1.jpg?w=251&h=368' />


##### 96). 718117153065410561
https://twitter.com/paprbckparadise/status/718117153065410561
```js{
  "id": "718117153065410561",
  "in": "http://pbs.twimg.com/media/CfdDvtkVAAAaUfj.jpg",
  "result": {
    "imgurl": "http://shannonsweetvalley.com/wp-content/uploads/2011/02/SVT006.jpg",
    "imgrefurl": "http://shannonsweetvalley.com/welcome/2011/03/23/sweet-valley-twins-6-the-new-girl",
    "h": "2232",
    "w": "1500",
    "tbnid": "VlMwcuoogNQN3M",
    "tbnh": "274",
    "tbnw": "184",
    "usg": "__S7498w-WexHpYULgjRSUCGnHIM8",
    "docid": "xZS_8uIkR4bexM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CfdDvtkVAAAaUfj.jpg' /> | <img width='300' src='http://shannonsweetvalley.com/wp-content/uploads/2011/02/SVT006.jpg' />


##### 97). 717748045069180928
https://twitter.com/paprbckparadise/status/717748045069180928
```js{
  "id": "717748045069180928",
  "in": "http://pbs.twimg.com/media/CfX0CyoUYAABkaZ.jpg",
  "result": {
    "imgurl": "https://cdn-images-1.medium.com/max/329/0*_timHavQ-08v0i0z.jpg",
    "imgrefurl": "https://thehairpin.com/the-sexual-narratives-we-absorb-in-youth-are-formidable-formative-whats-your-all-time-most-f0737409e7c",
    "h": "475",
    "w": "329",
    "tbnid": "Q5dUFavbXvvjoM",
    "tbnh": "270",
    "tbnw": "187",
    "usg": "__fVv2MRYJx0u42AFshCoi4osYPng",
    "docid": "Rd3kX1B8KkDavM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CfX0CyoUYAABkaZ.jpg' /> | <img width='300' src='https://cdn-images-1.medium.com/max/329/0*_timHavQ-08v0i0z.jpg' />


##### 98). 717426667791069184
https://twitter.com/paprbckparadise/status/717426667791069184
```js{
  "id": "717426667791069184",
  "in": "http://pbs.twimg.com/media/CfTPwLVUMAAyIJ4.jpg",
  "result": {
    "imgurl": "http://i.dailymail.co.uk/i/pix/2016/04/07/21/32F2B73200000578-0-image-a-38_1460062549002.jpg",
    "imgrefurl": "http://www.pintattoos.com/1000/90s-doritos-bag-image-galleries-imagekbcom/ORczMtYXAtc291dGhlYXN0LTIuYW1hem9uYXdzLmNvbS93Yy1wcm9kLXBpbS9KUEVHXzEwMDB4MTAwMC9TSU00NDEyNTRfZG9yaXRvc19reV9kb3JpdG9zX2NoZWVzZV9zdXByZW1lXzE3NWdfbl9hLmpwZw",
    "h": "930",
    "w": "634",
    "tbnid": "t44FJhTOQj3lWM",
    "tbnh": "272",
    "tbnw": "185",
    "usg": "__uKBhlGBcAyLFDx7fYrmSmJUzHxg",
    "docid": "DyVGU2Wm4obPVM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CfTPwLVUMAAyIJ4.jpg' /> | <img width='300' src='http://i.dailymail.co.uk/i/pix/2016/04/07/21/32F2B73200000578-0-image-a-38_1460062549002.jpg' />


##### 99). 717385843065753600
https://twitter.com/paprbckparadise/status/717385843065753600
```js{
  "id": "717385843065753600",
  "in": "http://pbs.twimg.com/media/CfSqn3nUMAAFLbg.jpg",
  "result": {
    "imgurl": "http://www.newworldzorro.com/seriesbooks/nancydrew/pc/drewpc53.jpg",
    "imgrefurl": "http://www.series-books.com/nancydrew/pc1-56.html",
    "h": "925",
    "w": "614",
    "tbnid": "1odpN0DYYRaffM",
    "tbnh": "276",
    "tbnw": "183",
    "usg": "__oFl9Wno4q700sJSufEEVqxxyfM8",
    "docid": "P9rYWe8AhGaN5M"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CfSqn3nUMAAFLbg.jpg' /> | <img width='300' src='http://www.newworldzorro.com/seriesbooks/nancydrew/pc/drewpc53.jpg' />


##### 100). 717016641947639809
https://twitter.com/paprbckparadise/status/717016641947639809
```js{
  "id": "717016641947639809",
  "in": "http://pbs.twimg.com/media/CfNa1dwUIAA2_RT.png",
  "result": {
    "imgurl": "http://www.series-books.com/nancydrew/pbs/files8.jpg",
    "imgrefurl": "http://tvtropes.org/pmwiki/pmwiki.php/Main/ContemptibleCover",
    "h": "672",
    "w": "413",
    "tbnid": "Wk5XxfImUoKsLM",
    "tbnh": "287",
    "tbnw": "176",
    "usg": "__FdAOQmtxZqTu84-MY9GdfZdaVQ4",
    "docid": "DTZ-4j5PDYZBHM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CfNa1dwUIAA2_RT.png' /> | <img width='300' src='http://www.series-books.com/nancydrew/pbs/files8.jpg' />


##### 101). 716638876920455170
https://twitter.com/paprbckparadise/status/716638876920455170
```js{
  "id": "716638876920455170",
  "in": "http://pbs.twimg.com/media/CfIDQszUkAA9Kh0.jpg",
  "result": {
    "imgurl": "http://booklife.com/image-factory/http/localhost/amazongetcover/9780553480245.jpg/w204.jpg",
    "imgrefurl": "http://www.publishersweekly.com/978-0-553-48024-5",
    "h": "298",
    "w": "204",
    "tbnid": "mg66MNqAF6vsFM",
    "tbnh": "238",
    "tbnw": "163",
    "usg": "__rYXq-sjgv3OXQiy4u7TOCP-2QVc",
    "docid": "6pMUxnvl3PVYRM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CfIDQszUkAA9Kh0.jpg' /> | <img width='300' src='http://booklife.com/image-factory/http/localhost/amazongetcover/9780553480245.jpg/w204.jpg' />


##### 102). 716325388117409792
https://twitter.com/paprbckparadise/status/716325388117409792
```js{
  "id": "716325388117409792",
  "in": "http://pbs.twimg.com/media/CfDmJQ9UkAI5Qm5.jpg",
  "result": {
    "imgurl": "http://d2arxad8u2l0g7.cloudfront.net/books/1256604945l/1200937.jpg",
    "imgrefurl": "http://www.goodreads.com/book/show/1200937.First_Place",
    "h": "475",
    "w": "318",
    "tbnid": "Mk3NzH5gE9yTPM",
    "tbnh": "274",
    "tbnw": "184",
    "usg": "__L6VcdhvySJKX9gbbKYT9SyBx77I",
    "docid": "fMEfJMDDY_TB0M"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CfDmJQ9UkAI5Qm5.jpg' /> | <img width='300' src='http://d2arxad8u2l0g7.cloudfront.net/books/1256604945l/1200937.jpg' />


##### 103). 715982100269297664
https://twitter.com/paprbckparadise/status/715982100269297664
```js{
  "id": "715982100269297664",
  "in": "http://pbs.twimg.com/media/Ce-t7RLVIAAPX7A.jpg",
  "result": {
    "imgurl": "https://images-na.ssl-images-amazon.com/images/I/21RDG2F97GL._AC_UL320_SR220,320_.jpg",
    "imgrefurl": "https://www.amazon.com/Surprise-Sweet-Valley-Kids/dp/0553157582",
    "h": "320",
    "w": "220",
    "tbnid": "cjtMQdeYD5nneM",
    "tbnh": "256",
    "tbnw": "176",
    "usg": "__leZ6GfwrQ8ACnvuWK8yOvFnodn8",
    "docid": "bhi4SfC0m8i8LM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Ce-t7RLVIAAPX7A.jpg' /> | <img width='300' src='https://images-na.ssl-images-amazon.com/images/I/21RDG2F97GL._AC_UL320_SR220,320_.jpg' />


##### 104). 715947690421587969
https://twitter.com/paprbckparadise/status/715947690421587969
```js{
  "id": "715947690421587969",
  "in": "http://pbs.twimg.com/media/Ce-OoW3UUAExyP-.jpg",
  "result": {
    "imgurl": "https://i.harperapps.com/covers/9780380712366/y648.png",
    "imgrefurl": "https://www.harpercollins.com/9780380712366/strider",
    "h": "600",
    "w": "408",
    "tbnid": "-IOLvY_AO2fGmM",
    "tbnh": "272",
    "tbnw": "185",
    "usg": "__KIRkEGXKYWEIyKMC1GJ8cALmirw",
    "docid": "X62pvWWkUADCtM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Ce-OoW3UUAExyP-.jpg' /> | <img width='300' src='https://i.harperapps.com/covers/9780380712366/y648.png' />


##### 105). 715218786555547648
https://twitter.com/paprbckparadise/status/715218786555547648
```js{
  "id": "715218786555547648",
  "in": "http://pbs.twimg.com/media/Cez3sidWwAAGSCt.jpg",
  "result": {
    "imgurl": "https://img1.etsystatic.com/067/1/7110130/il_fullxfull.793950477_rata.jpg",
    "imgrefurl": "https://www.etsy.com/listing/238705336/embroidered-book-cover-sweet-valley",
    "h": "1500",
    "w": "1074",
    "tbnid": "STxOKvW0Fm7lzM",
    "tbnh": "265",
    "tbnw": "190",
    "usg": "__R7OXaPqr376IDcpNZcCuZjuNHag",
    "docid": "rRXH-3OWVx5PZM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Cez3sidWwAAGSCt.jpg' /> | <img width='300' src='https://img1.etsystatic.com/067/1/7110130/il_fullxfull.793950477_rata.jpg' />


##### 106). 714844901905567744
https://twitter.com/paprbckparadise/status/714844901905567744
```js{
  "id": "714844901905567744",
  "in": "http://pbs.twimg.com/media/Ceujpj3WIAALvNy.jpg",
  "result": {
    "imgurl": "http://www4.alibris-static.com/snow-leopard/isbn/9780525457978.gif",
    "imgrefurl": "http://www.alibris.com/search/books/subject/Snow-leopard",
    "h": "187",
    "w": "185",
    "tbnid": "9heGWpgryXcgEM",
    "tbnh": "149",
    "tbnw": "148",
    "usg": "__Qt8rcr9E0t7M8m9h9nLpKFpfPaM",
    "docid": "kl7ncKUhik5bQM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Ceujpj3WIAALvNy.jpg' /> | <img width='300' src='http://www4.alibris-static.com/snow-leopard/isbn/9780525457978.gif' />


##### 107). 714476410765619201
https://twitter.com/paprbckparadise/status/714476410765619201
```js{
  "id": "714476410765619201",
  "in": "http://pbs.twimg.com/media/CepUgljXEAItKh3.jpg",
  "result": {
    "imgurl": "http://www4.alibris-static.com/the-counterfeit-collection/isbn/9780842350495.gif",
    "imgrefurl": "http://www.alibris.com/search/books/isbn/9780842350495",
    "h": "187",
    "w": "125",
    "tbnid": "o5zyrVJYquSojM",
    "tbnh": "149",
    "tbnw": "100",
    "usg": "__A5LVZfq44dROdH03biwxCvgKY_A",
    "docid": "UBfew6g-XDV73M"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CepUgljXEAItKh3.jpg' /> | <img width='300' src='http://www4.alibris-static.com/the-counterfeit-collection/isbn/9780842350495.gif' />


##### 108). 714161617978531840
https://twitter.com/paprbckparadise/status/714161617978531840
```js{
  "id": "714161617978531840",
  "in": "http://pbs.twimg.com/media/Cek2NN7WIAErU_C.jpg",
  "result": {
    "imgurl": "http://www.boxcarchildren.com/wp-content/uploads/2015/03/9780807554630-159x233.jpg",
    "imgrefurl": "http://www.boxcarchildren.com/book/mountain-top-mystery",
    "h": "233",
    "w": "159",
    "tbnid": "snQKz2eZ-hwkPM",
    "tbnh": "186",
    "tbnw": "127",
    "usg": "__ZBrznJixA8RoXbhAeJrcQbvzu-Y",
    "docid": "YwgpMGiS5CXHjM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Cek2NN7WIAErU_C.jpg' /> | <img width='300' src='http://www.boxcarchildren.com/wp-content/uploads/2015/03/9780807554630-159x233.jpg' />


##### 109). 713779634676957184
https://twitter.com/paprbckparadise/status/713779634676957184
```js{
  "id": "713779634676957184",
  "in": "http://pbs.twimg.com/media/Cefay3TXIAELxWy.jpg",
  "result": {
    "imgurl": "https://images-na.ssl-images-amazon.com/images/I/51QSS5SAK4L.jpg",
    "imgrefurl": "https://www.amazon.com/Ghost-Closet-Full-House-Michelle/dp/0671535730",
    "h": "475",
    "w": "321",
    "tbnid": "x8PXTWEUiM74VM",
    "tbnh": "273",
    "tbnw": "184",
    "usg": "__n1KzujHKEsa6WhtXX6Szzbtozio",
    "docid": "8Udv29XmA0BJOM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Cefay3TXIAELxWy.jpg' /> | <img width='300' src='https://images-na.ssl-images-amazon.com/images/I/51QSS5SAK4L.jpg' />


##### 110). 713449040747204608
https://twitter.com/paprbckparadise/status/713449040747204608
```js{
  "id": "713449040747204608",
  "in": "http://pbs.twimg.com/media/CeauHu9WQAAcICU.jpg",
  "result": {
    "imgurl": "https://images-na.ssl-images-amazon.com/images/I/21RDG2F97GL._AC_UL320_SR220,320_.jpg",
    "imgrefurl": "https://www.amazon.com/Surprise-Sweet-Valley-Kids/dp/0553157582",
    "h": "320",
    "w": "220",
    "tbnid": "cjtMQdeYD5nneM",
    "tbnh": "256",
    "tbnw": "176",
    "usg": "__leZ6GfwrQ8ACnvuWK8yOvFnodn8",
    "docid": "bhi4SfC0m8i8LM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CeauHu9WQAAcICU.jpg' /> | <img width='300' src='https://images-na.ssl-images-amazon.com/images/I/21RDG2F97GL._AC_UL320_SR220,320_.jpg' />


##### 111). 713382070450393088
https://twitter.com/paprbckparadise/status/713382070450393088
```js{
  "id": "713382070450393088",
  "in": "http://pbs.twimg.com/media/CeZxNnhVIAEJz2-.jpg",
  "result": {
    "imgurl": "https://d1466nnw0ex81e.cloudfront.net/n_iv/600/1168947.jpg",
    "imgrefurl": "https://www.mycomicshop.com/search"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CeZxNnhVIAEJz2-.jpg' /> | <img width='300' src='https://d1466nnw0ex81e.cloudfront.net/n_iv/600/1168947.jpg' />


##### 112). 713040129015689216
https://twitter.com/paprbckparadise/status/713040129015689216
```js{
  "id": "713040129015689216",
  "in": "http://pbs.twimg.com/media/CeU6N_jUkAA646j.png",
  "result": {
    "imgurl": "http://shannonsweetvalley.com/wp-content/uploads/2011/06/SVT014.jpg",
    "imgrefurl": "http://shannonsweetvalley.com/welcome/2011/07/06/sweet-valley-twins-14-tug-of-war",
    "h": "2238",
    "w": "1500",
    "tbnid": "4U1Wr1eouy5aZM",
    "tbnh": "274",
    "tbnw": "184",
    "usg": "__q1GyLFCyK2-y3CYykPxmsLaEkEE",
    "docid": "Q_V0AiWDAn8RCM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CeU6N_jUkAA646j.png' /> | <img width='300' src='http://shannonsweetvalley.com/wp-content/uploads/2011/06/SVT014.jpg' />


##### 113). 712769838758821889
https://twitter.com/paprbckparadise/status/712769838758821889
```js{
  "id": "712769838758821889",
  "in": "http://pbs.twimg.com/media/CeREZA9UsAAUBou.jpg",
  "result": {
    "imgurl": "http://www.shiversbooks.com/humano-morphs/images/04_large.jpg",
    "imgrefurl": "http://www.shiversbooks.com/humano-morphs",
    "h": "800",
    "w": "560",
    "tbnid": "TYf_HucaHhNKkM",
    "tbnh": "268",
    "tbnw": "188",
    "usg": "__PeUV53jegNIZ9DXxW-KSnwpLgYw",
    "docid": "KX8D4Q6ixjLjDM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CeREZA9UsAAUBou.jpg' /> | <img width='300' src='http://www.shiversbooks.com/humano-morphs/images/04_large.jpg' />


##### 114). 712676589528461312
https://twitter.com/paprbckparadise/status/712676589528461312
```js{
  "id": "712676589528461312",
  "in": "http://pbs.twimg.com/media/CePvlPSVAAAQlul.jpg",
  "result": {
    "imgurl": "http://shannonsweetvalley.com/wp-content/uploads/2011/06/SVT014.jpg",
    "imgrefurl": "http://shannonsweetvalley.com/welcome/2011/07/06/sweet-valley-twins-14-tug-of-war",
    "h": "2238",
    "w": "1500",
    "tbnid": "4U1Wr1eouy5aZM",
    "tbnh": "274",
    "tbnw": "184",
    "usg": "__q1GyLFCyK2-y3CYykPxmsLaEkEE",
    "docid": "Q_V0AiWDAn8RCM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CePvlPSVAAAQlul.jpg' /> | <img width='300' src='http://shannonsweetvalley.com/wp-content/uploads/2011/06/SVT014.jpg' />


##### 115). 712419926963654657
https://twitter.com/paprbckparadise/status/712419926963654657
```js{
  "id": "712419926963654657",
  "in": "http://pbs.twimg.com/media/CeMGJgzUkAA4wJP.jpg",
  "result": {
    "imgurl": "https://images-na.ssl-images-amazon.com/images/I/5150Nmusm8L.jpg",
    "imgrefurl": "https://www.amazon.com/Course-Tiger-Christopher-Sports-Bookshelf/dp/0316134457",
    "h": "500",
    "w": "334",
    "tbnid": "muuJHodLXy_KkM",
    "tbnh": "275",
    "tbnw": "183",
    "usg": "__UqdNEPDWQ8gVA8wtSewmExQ4-Tw",
    "docid": "oghbfN1NKd8M5M"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CeMGJgzUkAA4wJP.jpg' /> | <img width='300' src='https://images-na.ssl-images-amazon.com/images/I/5150Nmusm8L.jpg' />


##### 116). 712310942181122048
https://twitter.com/paprbckparadise/status/712310942181122048
```js{
  "id": "712310942181122048",
  "in": "http://pbs.twimg.com/media/CeKjBwMVIAARWUY.png",
  "result": {
    "imgurl": "http://d2arxad8u2l0g7.cloudfront.net/books/1311152170l/1175133.jpg",
    "imgrefurl": "http://www.goodreads.com/book/show/1175133.Tic_Tac_Terror",
    "h": "212",
    "w": "144",
    "tbnid": "3gCBrkJg5537UM",
    "tbnh": "169",
    "tbnw": "115",
    "usg": "__y-SK6Yb0rQoVrKkgF8im4-_D0OY",
    "docid": "SEbrfc6iMiVevM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CeKjBwMVIAARWUY.png' /> | <img width='300' src='http://d2arxad8u2l0g7.cloudfront.net/books/1311152170l/1175133.jpg' />


##### 117). 712027796604723200
https://twitter.com/paprbckparadise/status/712027796604723200
```js{
  "id": "712027796604723200",
  "in": "http://pbs.twimg.com/media/CeGhghLUsAA6BNt.jpg",
  "result": {
    "imgurl": "https://img0.etsystatic.com/064/1/7110130/il_fullxfull.794196902_eau6.jpg",
    "imgrefurl": "https://www.etsy.com/listing/238708036/embroidered-book-cover-sweet-valley",
    "h": "1500",
    "w": "1110",
    "tbnid": "2byRtGmfwIHgFM",
    "tbnh": "261",
    "tbnw": "193",
    "usg": "__9oWvVQ8BAmfvIKeQn8qxRqssW_8",
    "docid": "v04Da-otvijpIM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CeGhghLUsAA6BNt.jpg' /> | <img width='300' src='https://img0.etsystatic.com/064/1/7110130/il_fullxfull.794196902_eau6.jpg' />


##### 118). 711939361089060866
https://twitter.com/paprbckparadise/status/711939361089060866
```js{
  "id": "711939361089060866",
  "in": "http://pbs.twimg.com/media/CeFRE5JUUAAlWpZ.jpg",
  "result": {
    "imgurl": "https://i.harperapps.com/covers/9780380724697/x500.png",
    "imgrefurl": "https://www.harpercollins.com/9780380724697/time-for-andrew",
    "h": "741",
    "w": "500",
    "tbnid": "i3dzmULV3gVlPM",
    "tbnh": "273",
    "tbnw": "184",
    "usg": "__4lajVJG_STsx-kNSpaiXNh4axKY",
    "docid": "p1E5a2J5vdlAmM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CeFRE5JUUAAlWpZ.jpg' /> | <img width='300' src='https://i.harperapps.com/covers/9780380724697/x500.png' />


##### 119). 711590017928286208
https://twitter.com/paprbckparadise/status/711590017928286208
```js{
  "id": "711590017928286208",
  "in": "http://pbs.twimg.com/media/CeATWcaUEAAjKzW.jpg",
  "result": {
    "imgurl": "http://www.theshepherdsdog.com/JocksIsland.jpg",
    "imgrefurl": "http://www.theshepherdsdog.com/books.html",
    "h": "192",
    "w": "134",
    "tbnid": "-dQQp6Tjtaf5NM",
    "tbnh": "153",
    "tbnw": "107",
    "usg": "__v2HfYPvrBwVlbgRoHG1iLanc2E8",
    "docid": "tU89O7G8nDqk8M"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CeATWcaUEAAjKzW.jpg' /> | <img width='300' src='http://www.theshepherdsdog.com/JocksIsland.jpg' />


##### 120). 711241128251555840
https://twitter.com/paprbckparadise/status/711241128251555840
```js{
  "id": "711241128251555840",
  "in": "http://pbs.twimg.com/media/Cd7WCY8UIAACSYj.jpg",
  "result": {
    "imgurl": "http://www.fictiondb.com/coversth/th_0440492769.jpg",
    "imgrefurl": "http://www.fictiondb.com/author/robert-kimmel-smith~the-war-with-grandpa~283124~b.htm",
    "h": "200",
    "w": "135",
    "tbnid": "Z_eS4tWUH8k-SM",
    "tbnh": "160",
    "tbnw": "108",
    "usg": "__Z3xclK74ii-ito2LmWF5-R6-BKI",
    "docid": "Cd2QVA368URkNM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Cd7WCY8UIAACSYj.jpg' /> | <img width='300' src='http://www.fictiondb.com/coversth/th_0440492769.jpg' />


##### 121). 710916326378700800
https://twitter.com/paprbckparadise/status/710916326378700800
```js{
  "id": "710916326378700800",
  "in": "http://pbs.twimg.com/media/Cd2uoayUAAAleD6.jpg",
  "result": {
    "imgurl": "https://90sflashback.files.wordpress.com/2015/07/app.jpg",
    "imgrefurl": "https://90sflashback.wordpress.com/2015/07",
    "h": "2271",
    "w": "1500",
    "tbnid": "80TGfZIoLzaJJM",
    "tbnh": "276",
    "tbnw": "182",
    "usg": "__TILmeQTtRXdUA73xoWx66BAT68I",
    "docid": "D-VQarJGVT659M"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Cd2uoayUAAAleD6.jpg' /> | <img width='300' src='https://90sflashback.files.wordpress.com/2015/07/app.jpg' />


##### 122). 710504687061979136
https://twitter.com/paprbckparadise/status/710504687061979136
```js{
  "id": "710504687061979136",
  "in": "http://pbs.twimg.com/media/Cdw4P3lUAAEkv6j.jpg",
  "result": {
    "imgurl": "http://thumbs2.ebaystatic.com/d/l225/m/mnDRwui8UyaqT2TOPT5n6pA.jpg",
    "imgrefurl": "http://www.ebay.com/bhp/sleepover-friends-books",
    "h": "225",
    "w": "161",
    "tbnid": "YvCRiMWKgBi36M",
    "tbnh": "180",
    "tbnw": "128",
    "usg": "__1XiIHlaW55fc-HCs-VpyLLhDlbE",
    "docid": "NwJRbni0okG9mM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Cdw4P3lUAAEkv6j.jpg' /> | <img width='300' src='http://thumbs2.ebaystatic.com/d/l225/m/mnDRwui8UyaqT2TOPT5n6pA.jpg' />


##### 123). 710203403029389313
https://twitter.com/paprbckparadise/status/710203403029389313
```js{
  "id": "710203403029389313",
  "in": "http://pbs.twimg.com/media/CdsmO08UUAA6taE.jpg",
  "result": {
    "imgurl": "https://bookcovermebad.files.wordpress.com/2014/09/svh048.jpg",
    "imgrefurl": "https://bookcovermebad.wordpress.com/tag/sweet-valley-high",
    "h": "2435",
    "w": "1500",
    "tbnid": "y_fvdAwRPNYVRM",
    "tbnh": "286",
    "tbnw": "176",
    "usg": "__BjR76Ee-hvWMOVPJHAfl_X0upz8",
    "docid": "Iugsgrq22HBtrM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CdsmO08UUAA6taE.jpg' /> | <img width='300' src='https://bookcovermebad.files.wordpress.com/2014/09/svh048.jpg' />


##### 124). 709911763374845952
https://twitter.com/paprbckparadise/status/709911763374845952
```js{
  "id": "709911763374845952",
  "in": "http://pbs.twimg.com/media/Cdoc_LKVAAA044E.png",
  "result": {
    "imgurl": "https://images-na.ssl-images-amazon.com/images/I/51yzKajmr6L.jpg",
    "imgrefurl": "https://www.amazon.com/Computer-Nut-Betsy-Byars/dp/0140320865",
    "h": "500",
    "w": "322",
    "tbnid": "zaZzPk400cUgaM",
    "tbnh": "280",
    "tbnw": "180",
    "usg": "__5JHVAnV7w1QligM-SFOsymDp2nY",
    "docid": "yuuGtlRN1IPNkM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Cdoc_LKVAAA044E.png' /> | <img width='300' src='https://images-na.ssl-images-amazon.com/images/I/51yzKajmr6L.jpg' />


##### 125). 709836379581128704
https://twitter.com/paprbckparadise/status/709836379581128704
```js{
  "id": "709836379581128704",
  "in": "http://pbs.twimg.com/media/CdnYbQjUkAEQWnQ.jpg",
  "result": {
    "imgurl": "http://shannonsweetvalley.com/wp-content/uploads/2014/03/SVT041.jpg",
    "imgrefurl": "http://shannonsweetvalley.com/welcome/2014/04/18/sweet-valley-twins-41-the-twins-get-caught",
    "h": "2238",
    "w": "1500",
    "tbnid": "O9Jmsr-iL7_MfM",
    "tbnh": "274",
    "tbnw": "184",
    "usg": "__v2ELCpNMnuYtvwze13ZpFcSyKvE",
    "docid": "bYVLmC5CxL3N4M"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CdnYbQjUkAEQWnQ.jpg' /> | <img width='300' src='http://shannonsweetvalley.com/wp-content/uploads/2014/03/SVT041.jpg' />


##### 126). 709460919164674049
https://twitter.com/paprbckparadise/status/709460919164674049
```js{
  "id": "709460919164674049",
  "in": "http://pbs.twimg.com/media/CdiC8lWVAAEaspk.png",
  "result": {
    "imgurl": "http://egkouba.aurorak12.org/wp-content/uploads/sites/44/2011/09/On-My-Honor.jpg",
    "imgrefurl": "http://egkouba.aurorak12.org/book-clubs/on-my-honor",
    "h": "400",
    "w": "268",
    "tbnid": "H73xDm1vQnPArM",
    "tbnh": "274",
    "tbnw": "184",
    "usg": "__WTl5GLPanxQJv1PgNtz3nGQFhnI",
    "docid": "NgwfC48ym_M8xM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CdiC8lWVAAEaspk.png' /> | <img width='300' src='http://egkouba.aurorak12.org/wp-content/uploads/sites/44/2011/09/On-My-Honor.jpg' />


##### 127). 709407230404112385
https://twitter.com/paprbckparadise/status/709407230404112385
```js{
  "id": "709407230404112385",
  "in": "http://pbs.twimg.com/media/CdhSHfKUUAQ49kJ.jpg",
  "result": {
    "imgurl": "http://www.farawaynearbybooks.com.au/shop_image/product/000454_61f4bb7c384d7c059081442c62d7d4c3.jpg",
    "imgrefurl": "http://www.farawaynearbybooks.com.au"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CdhSHfKUUAQ49kJ.jpg' /> | <img width='300' src='http://www.farawaynearbybooks.com.au/shop_image/product/000454_61f4bb7c384d7c059081442c62d7d4c3.jpg' />


##### 128). 709076016178667520
https://twitter.com/paprbckparadise/status/709076016178667520
```js{
  "id": "709076016178667520",
  "in": "http://pbs.twimg.com/media/Cdck4SGUkAIKyJb.png",
  "result": {
    "imgurl": "https://scontent.cdninstagram.com/t51.2885-15/sh0.08/e35/12912755_978896642159423_1400608906_n.jpg%3Fig_cache_key%3DMTIyMzM3MjcwMDA4NzI2NzM3OQ%253D%253D.2",
    "imgrefurl": "http://instacelebs.net/hollywood/ellen-theellenshow-if-this-isnt-on-his-tinder-profile-he-has-seriously-missed-an-opportuntiy",
    "h": "750",
    "w": "750",
    "tbnid": "UUOrim0VjQ4b0M",
    "tbnh": "225",
    "tbnw": "225",
    "usg": "__lxo9I6nYf6f6xanA3ZjMCGBA5t0",
    "docid": "BV-EbWzwhX1pvM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Cdck4SGUkAIKyJb.png' /> | <img width='300' src='https://scontent.cdninstagram.com/t51.2885-15/sh0.08/e35/12912755_978896642159423_1400608906_n.jpg?ig_cache_key=MTIyMzM3MjcwMDA4NzI2NzM3OQ%3D%3D.2' />


##### 129). 708700694845345793
https://twitter.com/paprbckparadise/status/708700694845345793
```js{
  "id": "708700694845345793",
  "in": "http://pbs.twimg.com/media/CdXPhtIUEAArlrx.jpg",
  "result": {
    "imgurl": "https://i0.wp.com/d202m5krfqbpi5.cloudfront.net/books/1239654568l/1190156.jpg",
    "imgrefurl": "https://teenscanwritetoo.wordpress.com/2012/10/06/teen-author-bookshelf-list-of-published-teen-authors",
    "h": "459",
    "w": "318",
    "tbnid": "39E5RLsbh-7bYM",
    "tbnh": "270",
    "tbnw": "187",
    "usg": "__jyWUkAKllzs4sG1r4dnXVNXWP1s",
    "docid": "lwCulYth6mtZnM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CdXPhtIUEAArlrx.jpg' /> | <img width='300' src='https://i0.wp.com/d202m5krfqbpi5.cloudfront.net/books/1239654568l/1190156.jpg' />


##### 130). 708473713558032384
https://twitter.com/paprbckparadise/status/708473713558032384
```js{
  "id": "708473713558032384",
  "in": "http://pbs.twimg.com/media/CdUBFp6UkAAp0Nr.jpg",
  "result": {
    "imgurl": "http://gabrielricci.com/images/shocker-alien_gr.jpg",
    "imgrefurl": "http://gabrielricci.com/port_trade2.html",
    "h": "394",
    "w": "240",
    "tbnid": "PrSy6sbDntfVSM",
    "tbnh": "288",
    "tbnw": "175",
    "usg": "__Bk3X640mDIagTPSO4hniNXJb6dY",
    "docid": "iD5nbzHFvYpiHM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CdUBFp6UkAAp0Nr.jpg' /> | <img width='300' src='http://gabrielricci.com/images/shocker-alien_gr.jpg' />


##### 131). 708381447032217601
https://twitter.com/paprbckparadise/status/708381447032217601
```js{
  "id": "708381447032217601",
  "in": "http://pbs.twimg.com/media/CdStLA7UIAEwvSQ.jpg",
  "result": {
    "imgurl": "http://i6.photobucket.com/albums/y217/swallowrazorblades/svt13-2.jpg",
    "imgrefurl": "http://1bruce1.livejournal.com/171022.html",
    "h": "457",
    "w": "309",
    "tbnid": "QSyI1K7eGO1-yM",
    "tbnh": "273",
    "tbnw": "185",
    "usg": "__fFXfwLf6NWIYaj4WzX3h7RfbCJM",
    "docid": "wkiNzreD1gkvDM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CdStLA7UIAEwvSQ.jpg' /> | <img width='300' src='http://i6.photobucket.com/albums/y217/swallowrazorblades/svt13-2.jpg' />

Total: 148, failed: 17 (not displayed)
