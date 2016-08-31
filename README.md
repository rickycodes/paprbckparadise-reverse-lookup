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
    "imgurl": "http://static.thefrisky.com/uploads/2011/11/21/enid-rollins-jpg.jpeg",
    "imgrefurl": "http://www.thefrisky.com/photos/casting-the-sweet-valley-high-movie/svh_movie",
    "h": "250",
    "w": "401",
    "tbnid": "eqPUrMD11Xa6jM",
    "tbnh": "177",
    "tbnw": "284",
    "usg": "__8XHWmw764pjItKWFsFr4RBOUv_8",
    "docid": "lNKLqlve1C6RiM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CrJWnXLVYAAdKOX.png' /> | <img width='300' src='http://static.thefrisky.com/uploads/2011/11/21/enid-rollins-jpg.jpeg' />


##### 2). 770408907411861504
https://twitter.com/paprbckparadise/status/770408907411861504
```js{
  "id": "770408907411861504",
  "in": "http://pbs.twimg.com/media/CrEJU-vVIAAGorr.png",
  "result": {
    "imgurl": "http://d2arxad8u2l0g7.cloudfront.net/books/1227408354m/2262451.jpg",
    "imgrefurl": "http://www.goodreads.com/book/show/5634367-kuldesak",
    "h": "160",
    "w": "95",
    "tbnid": "_j99BR0W0eZOyM",
    "tbnh": "128",
    "tbnw": "76",
    "usg": "___3bh8J2lJKLWaqD_h-zC34RKr8Y",
    "docid": "aQ2-7yesnTlsdM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CrEJU-vVIAAGorr.png' /> | <img width='300' src='http://d2arxad8u2l0g7.cloudfront.net/books/1227408354m/2262451.jpg' />


##### 3). 769323422820118528
https://twitter.com/paprbckparadise/status/769323422820118528
```js{
  "id": "769323422820118528",
  "in": "http://pbs.twimg.com/media/Cq0vPF9VIAA4orD.png",
  "result": {
    "imgurl": "http://d2arxad8u2l0g7.cloudfront.net/books/1275741805l/1891396.jpg",
    "imgrefurl": "http://www.goodreads.com/book/show/1891396.Cold_War_in_a_Country_Garden",
    "h": "475",
    "w": "280",
    "tbnid": "iXMOk2Ge0Cw3UM",
    "tbnh": "293",
    "tbnw": "172",
    "usg": "__Scl-bgvcyBX4PLbyCYo9_CajWWQ",
    "docid": "kMJmJw6xF1nuDM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Cq0vPF9VIAA4orD.png' /> | <img width='300' src='http://d2arxad8u2l0g7.cloudfront.net/books/1275741805l/1891396.jpg' />


##### 4). 768603978137415680
https://twitter.com/paprbckparadise/status/768603978137415680
```js{
  "id": "768603978137415680",
  "in": "http://pbs.twimg.com/media/Cqqg_9SUEAA1Y52.png",
  "result": {
    "imgurl": "http://d.gr-assets.com/books/1299729862m/1902527.jpg",
    "imgrefurl": "http://www.goodreads.com/book/show/1911165.A_Death_of_Honor",
    "h": "153",
    "w": "98",
    "tbnid": "BRhMXxZlUXAPUM",
    "tbnh": "122",
    "tbnw": "78",
    "usg": "__XI6bVnBHQ4wLmovC87QAyQOSQSg",
    "docid": "B_kX3SAaZ3VWSM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Cqqg_9SUEAA1Y52.png' /> | <img width='300' src='http://d.gr-assets.com/books/1299729862m/1902527.jpg' />


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


##### 9). 762806076752277504
https://twitter.com/paprbckparadise/status/762806076752277504
```js{
  "id": "762806076752277504",
  "in": "http://pbs.twimg.com/media/CpYH3pqVMAAc0OZ.jpg",
  "result": {
    "imgurl": "http://www.sondheimguide.com/bishop/heaven.jpg",
    "imgrefurl": "http://blog.thephoenix.com/BLOGS/laserorgy/archive/2009/11/14/in-memoriam-star-wars-artist-don-ivan-punchatz.aspx",
    "h": "599",
    "w": "360",
    "tbnid": "-cpkQRezKyWgHM",
    "tbnh": "290",
    "tbnw": "174",
    "usg": "__hoLHo-jZz2h0OdDofeDKvUtGH8I",
    "docid": "3MV8az0vdfrpeM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CpYH3pqVMAAc0OZ.jpg' /> | <img width='300' src='http://www.sondheimguide.com/bishop/heaven.jpg' />


##### 10). 761714306320732162
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


##### 11). 761352248584605696
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


##### 12). 760989305808429056
https://twitter.com/paprbckparadise/status/760989305808429056
```js{
  "id": "760989305808429056",
  "in": "http://pbs.twimg.com/media/Co-TutlVIAA6HR4.jpg",
  "result": {
    "imgurl": "https://farm8.staticflickr.com/7093/7103648645_5c21ce2a15_b.jpg",
    "imgrefurl": "http://picssr.com/photos/philipparice/favorites/page4",
    "h": "1020",
    "w": "602",
    "tbnid": "LfTS04_eNjVHzM",
    "tbnh": "292",
    "tbnw": "172",
    "usg": "__aI5w9amx37TllwoawyDeqZWBll8",
    "docid": "FopdMLrTPK_MxM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Co-TutlVIAA6HR4.jpg' /> | <img width='300' src='https://farm8.staticflickr.com/7093/7103648645_5c21ce2a15_b.jpg' />


##### 13). 760625438892830720
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


##### 14). 759177754126356480
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


##### 15). 758815411907342336
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


##### 16). 758452312809410560
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


##### 17). 758101287300804608
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


##### 18). 757694196543201281
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


##### 19). 756228929740943362
https://twitter.com/paprbckparadise/status/756228929740943362
```js{
  "id": "756228929740943362",
  "in": "http://pbs.twimg.com/media/Cn6p4xrVMAAdSEK.jpg",
  "result": {
    "imgurl": "http://d2arxad8u2l0g7.cloudfront.net/books/1373650358l/18190497.jpg",
    "imgrefurl": "http://www.goodreads.com/book/show/412597.Jessica_and_the_Brat_Attack",
    "h": "467",
    "w": "318",
    "tbnid": "jTEtPDymJBC5uM",
    "tbnh": "272",
    "tbnw": "185",
    "usg": "__EatCt-nyP497xKkkhLnhY7I3d04",
    "docid": "pvjlS_A-GaCrLM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Cn6p4xrVMAAdSEK.jpg' /> | <img width='300' src='http://d2arxad8u2l0g7.cloudfront.net/books/1373650358l/18190497.jpg' />


##### 20). 755892639338160129
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


##### 21). 755494650958360576
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


##### 22). 755148375108878336
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


##### 23). 754057968165920769
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


##### 24). 753740941907767296
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


##### 25). 752971694491443200
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


##### 26). 752585514503462914
https://twitter.com/paprbckparadise/status/752585514503462914
```js{
  "id": "752585514503462914",
  "in": "http://pbs.twimg.com/media/CnG4Zk8UsAA49AH.png",
  "result": {
    "imgurl": "http://thetrashcollector.com/PaperbacksMZ/BookQuestorTapes.jpg",
    "imgrefurl": "http://thetrashcollector.com/pbtvnovelizationsmz.html",
    "h": "200",
    "w": "120",
    "tbnid": "pbU5Mp9KyH3KsM",
    "tbnh": "160",
    "tbnw": "96",
    "usg": "__sQXjJxLGkb0sRN4nIaIUeZk5Biw",
    "docid": "G795e-_NHz-TNM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CnG4Zk8UsAA49AH.png' /> | <img width='300' src='http://thetrashcollector.com/PaperbacksMZ/BookQuestorTapes.jpg' />


##### 27). 750829379115098112
https://twitter.com/paprbckparadise/status/750829379115098112
```js{
  "id": "750829379115098112",
  "in": "http://pbs.twimg.com/media/Cmt7QT2VUAAyrOe.png",
  "result": {
    "imgurl": "http://ecx.images-amazon.com/images/P/2277214752.01._SY200_SCLZZZZZZZ_.jpg",
    "imgrefurl": "https://www.librarything.com/topic/146962",
    "h": "200",
    "w": "134",
    "tbnid": "Dxxzi4fLEQLrXM",
    "tbnh": "160",
    "tbnw": "107",
    "usg": "__cvBmswCV1vVXbAGCVek9BF5JYaI",
    "docid": "-AczgDOpOF3BcM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Cmt7QT2VUAAyrOe.png' /> | <img width='300' src='http://ecx.images-amazon.com/images/P/2277214752.01._SY200_SCLZZZZZZZ_.jpg' />


##### 28). 750090802487894017
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


##### 29). 748997182519332865
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


##### 30). 748605410089656321
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


##### 31). 747931791579721729
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


##### 32). 746437990382075904
https://twitter.com/paprbckparadise/status/746437990382075904
```js{
  "id": "746437990382075904",
  "in": "http://pbs.twimg.com/media/ClvhSEvVEAAjZLq.png",
  "result": {
    "imgurl": "http://kirstygreenwood.typepad.com/.a/6a010536b33b69970b01a73d891e0f970d-600wi",
    "imgrefurl": "http://www.novelicious.com/2014/03/10-of-the-most-dramatic-sweet-valley-high-covers-part-two.html",
    "h": "966",
    "w": "600",
    "tbnid": "gDCWBMUmlURHVM",
    "tbnh": "285",
    "tbnw": "177",
    "usg": "__SAJdkZZegvw4-YfTzHyf_yqTdOI",
    "docid": "bSdXnzYk4onvFM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/ClvhSEvVEAAjZLq.png' /> | <img width='300' src='http://kirstygreenwood.typepad.com/.a/6a010536b33b69970b01a73d891e0f970d-600wi' />


##### 33). 746093289569300480
https://twitter.com/paprbckparadise/status/746093289569300480
```js{
  "id": "746093289569300480",
  "in": "http://pbs.twimg.com/media/ClqmybGVYAAQZn6.jpg",
  "result": {
    "imgurl": "http://www.exodusbooks.com/images/item-medium/28828.jpg",
    "imgrefurl": "http://www.exodusbooks.com/sugar-creek-gang/7998",
    "h": "250",
    "w": "151",
    "tbnid": "WRLsiQJ4fcDLIM",
    "tbnh": "200",
    "tbnw": "120",
    "usg": "__RA4QLDvqhzKc0Vy6NbMr8-xqnLw",
    "docid": "zDmyDZqlrKZJNM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/ClqmybGVYAAQZn6.jpg' /> | <img width='300' src='http://www.exodusbooks.com/images/item-medium/28828.jpg' />


##### 34). 745767866511745024
https://twitter.com/paprbckparadise/status/745767866511745024
```js{
  "id": "745767866511745024",
  "in": "http://pbs.twimg.com/media/Cll_FyxUkAEilvZ.png",
  "result": {
    "imgurl": "http://d2arxad8u2l0g7.cloudfront.net/books/1368121958m/412238.jpg",
    "imgrefurl": "http://www.goodreads.com/book/show/1200937.First_Place",
    "h": "160",
    "w": "98",
    "tbnid": "T73vSfUqCqJefM",
    "tbnh": "128",
    "tbnw": "78",
    "usg": "__K5rel-RJp_63pdhfDjf6eis0OVU",
    "docid": "fMEfJMDDY_TB0M"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Cll_FyxUkAEilvZ.png' /> | <img width='300' src='http://d2arxad8u2l0g7.cloudfront.net/books/1368121958m/412238.jpg' />


##### 35). 745407512535408640
https://twitter.com/paprbckparadise/status/745407512535408640
```js{
  "id": "745407512535408640",
  "in": "http://pbs.twimg.com/media/Clg3wvRUYAQGR3Z.png",
  "result": {
    "imgurl": "http://books.freebooklibrary.org/books/books/Francine%2520Pascal/When%2520Love%2520Dies%2520(41712)/cover.jpg",
    "imgrefurl": "http://books.freebooklibrary.org/index.php"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Clg3wvRUYAQGR3Z.png' /> | <img width='300' src='http://books.freebooklibrary.org/books/books/Francine%20Pascal/When%20Love%20Dies%20(41712)/cover.jpg' />


##### 36). 744972618948706304
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


##### 37). 743886860523470848
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


##### 38). 743536457617285121
https://twitter.com/paprbckparadise/status/743536457617285121
```js{
  "id": "743536457617285121",
  "in": "http://pbs.twimg.com/media/ClGSd81UoAAjz5y.jpg",
  "result": {
    "imgurl": "https://images-na.ssl-images-amazon.com/images/I/41N1CNiDLUL._AC_UL320_SR240,320_.jpg",
    "imgrefurl": "https://www.amazon.com/TEACHERS-PET-Sweet-Valley-Twins/dp/0553154222",
    "h": "320",
    "w": "240",
    "tbnid": "_6TcmEUlrrDJqM",
    "tbnh": "256",
    "tbnw": "192",
    "usg": "__u9pfiMRVkNyEESBhh0zy4fA96zY",
    "docid": "A_RGbajhiZll4M"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/ClGSd81UoAAjz5y.jpg' /> | <img width='300' src='https://images-na.ssl-images-amazon.com/images/I/41N1CNiDLUL._AC_UL320_SR240,320_.jpg' />


##### 39). 743160425223593984
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


##### 40). 742829085194231808
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


##### 41). 742485039678509056
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


##### 42). 741364453849993218
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


##### 43). 741035255969153024
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


##### 44). 739955885707907072
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


##### 45). 739609275153027072
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


##### 46). 738805406458249216
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


##### 47). 738460325381431297
https://twitter.com/paprbckparadise/status/738460325381431297
```js{
  "id": "738460325381431297",
  "in": "http://pbs.twimg.com/media/Cj-JwLEVAAE1LuO.jpg",
  "result": {
    "imgurl": "http://d.gr-assets.com/books/1332389678s/693394.jpg",
    "imgrefurl": "http://www.goodreads.com/book/show/803320.The_Missing_Money_Mystery",
    "h": "73",
    "w": "50",
    "tbnid": "I1IIgel14XQi0M",
    "tbnh": "73",
    "tbnw": "50",
    "usg": "__OPX7BKeTas5jqjmv8tzjlC2WyXA",
    "docid": "BvG02D2w3vpQYM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Cj-JwLEVAAE1LuO.jpg' /> | <img width='300' src='http://d.gr-assets.com/books/1332389678s/693394.jpg' />


##### 48). 738154814836637697
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


##### 49). 737771638280724480
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


##### 50). 737024090033131520
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


##### 51). 736688529346961408
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


##### 52). 736280814107824128
https://twitter.com/paprbckparadise/status/736280814107824128
```js{
  "id": "736280814107824128",
  "in": "http://pbs.twimg.com/media/CjfLf7BUUAEDKic.png",
  "result": {
    "imgurl": "http://www.scholastic.com/content5/media/products/10/9780689716010_xlg.jpg",
    "imgrefurl": "http://www.scholastic.com/teachers/book/mustang-0",
    "h": "252",
    "w": "230",
    "tbnid": "XNrDctu5RREAAM",
    "tbnh": "201",
    "tbnw": "184",
    "usg": "__BeMTMlikkmOviuuD52txfaIxVuA",
    "docid": "9FawcOPQrP4KCM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CjfLf7BUUAEDKic.png' /> | <img width='300' src='http://www.scholastic.com/content5/media/products/10/9780689716010_xlg.jpg' />


##### 53). 735915344749985792
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


##### 54). 735562935884349440
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


##### 55). 735221538526400512
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


##### 56). 734838823285202944
https://twitter.com/paprbckparadise/status/734838823285202944
```js{
  "id": "734838823285202944",
  "in": "http://pbs.twimg.com/media/CjKsBBGUkAAluGt.jpg",
  "result": {
    "imgurl": "http://thumbs2.ebaystatic.com/d/l225/m/meLeE-AC_VOGzwVb3N0VS0Q.jpg",
    "imgrefurl": "http://www.ebay.com.au/bhp/sweet-valley-high",
    "h": "225",
    "w": "151",
    "tbnid": "T1H-7zTnkRAVSM",
    "tbnh": "180",
    "tbnw": "120",
    "usg": "__cbye2m_Q5FJ02iODN2ELSLe0968",
    "docid": "2yM4D_rcpkm-uM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CjKsBBGUkAAluGt.jpg' /> | <img width='300' src='http://thumbs2.ebaystatic.com/d/l225/m/meLeE-AC_VOGzwVb3N0VS0Q.jpg' />


##### 57). 734106689952059392
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


##### 58). 733749467590107136
https://twitter.com/paprbckparadise/status/733749467590107136
```js{
  "id": "733749467590107136",
  "in": "http://pbs.twimg.com/media/Ci7NQJkUoAUFl-c.jpg",
  "result": {
    "imgurl": "http://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1288215509i/290409._UY461_SS461_.jpg",
    "imgrefurl": "http://www.goodreads.com/book/show/290409.Three_s_a_Crowd",
    "h": "461",
    "w": "461",
    "tbnid": "8JpY0PU2lpzK4M",
    "tbnh": "225",
    "tbnw": "225",
    "usg": "__1hI9jh1e3Jz9GqAboc9_36wReyE",
    "docid": "8pcuJFiFFE6ReM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Ci7NQJkUoAUFl-c.jpg' /> | <img width='300' src='http://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1288215509i/290409._UY461_SS461_.jpg' />


##### 59). 733063541595344898
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


##### 60). 732669361970761728
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


##### 61). 732379201458708480
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


##### 62). 731629383333478400
https://twitter.com/paprbckparadise/status/731629383333478400
```js{
  "id": "731629383333478400",
  "in": "http://pbs.twimg.com/media/CidFDBlU4AEEkI9.jpg",
  "result": {
    "imgurl": "http://thebobbseytwins.weebly.com/uploads/1/0/3/1/10317938/8581448_orig.jpg",
    "imgrefurl": "http://thebobbseytwins.weebly.com",
    "h": "320",
    "w": "221",
    "tbnid": "XKVS9hLvbrRzCM",
    "tbnh": "256",
    "tbnw": "176",
    "usg": "__Uj72obBL4p1-wwST45F2F2db8O8",
    "docid": "ikjIKLLssLtBNM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CidFDBlU4AEEkI9.jpg' /> | <img width='300' src='http://thebobbseytwins.weebly.com/uploads/1/0/3/1/10317938/8581448_orig.jpg' />


##### 63). 731277454103318528
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


##### 64). 730936310559428613
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


##### 65). 730483391817121792
https://twitter.com/paprbckparadise/status/730483391817121792
```js{
  "id": "730483391817121792",
  "in": "http://pbs.twimg.com/media/CiMyxiSUoAE0ns_.jpg",
  "result": {
    "imgurl": "http://images.contentful.com/7h71s48744nc/M06671117X5qUcWisfi61r/4f25e81c2ac32bfd5afab39ce01f5a63/tower-treasure-cover-image",
    "imgrefurl": "http://www.pluggedin.ca/book-reviews/tower-treasure",
    "h": "500",
    "w": "320",
    "tbnid": "5a6MBKb1PsnwlM",
    "tbnh": "281",
    "tbnw": "180",
    "usg": "__7vN2mPGmfcWNchIklzx4EB3MZXo",
    "docid": "yz3dVXX6w2Kh8M"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CiMyxiSUoAE0ns_.jpg' /> | <img width='300' src='http://images.contentful.com/7h71s48744nc/M06671117X5qUcWisfi61r/4f25e81c2ac32bfd5afab39ce01f5a63/tower-treasure-cover-image' />


##### 66). 729706980403761152
https://twitter.com/paprbckparadise/status/729706980403761152
```js{
  "id": "729706980403761152",
  "in": "http://pbs.twimg.com/media/CiBwoaHWwAAu7A8.jpg",
  "result": {
    "imgurl": "http://dazedimg.dazedgroup.netdna-cdn.com/318/azure/dazed-prod/1140/6/1146762.jpg",
    "imgrefurl": "http://www.dazeddigital.com/artsandculture/article/27178/1/a-definitive-ranking-of-all-original-62-goosebumps-books",
    "h": "458",
    "w": "318",
    "tbnid": "JIunNMujCWVAeM",
    "tbnh": "270",
    "tbnw": "187",
    "usg": "__dOb44U5YZdel6WV8ZtcqiogQ7Ns",
    "docid": "OWFh73ymuFCdeM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CiBwoaHWwAAu7A8.jpg' /> | <img width='300' src='http://dazedimg.dazedgroup.netdna-cdn.com/318/azure/dazed-prod/1140/6/1146762.jpg' />


##### 67). 729360937422073856
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


##### 68). 728965392899686400
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


##### 69). 728313291601252352
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


##### 70). 727910483517448195
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


##### 71). 727540314034970625
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


##### 72). 727237251948679169
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


##### 73). 726898376504025088
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


##### 74). 726466487918039040
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


##### 75). 726098532973703168
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


##### 76). 725733343342415872
https://twitter.com/paprbckparadise/status/725733343342415872
```js{
  "id": "725733343342415872",
  "in": "http://pbs.twimg.com/media/ChJSoQnUUAA1RJo.jpg",
  "result": {
    "imgurl": "http://pictures.abebooks.com/isbn/9781403776952-us-300.jpg",
    "imgrefurl": "http://www.abebooks.com/book-search/title/moby-dick/author/herman-melville/used",
    "h": "401",
    "w": "300",
    "tbnid": "67h-82zT4NEYSM",
    "tbnh": "260",
    "tbnw": "194",
    "usg": "__pAEfV55jp2zrMGDgO4iXJDdAU3E",
    "docid": "2bgKl2cavqQLkM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/ChJSoQnUUAA1RJo.jpg' /> | <img width='300' src='http://pictures.abebooks.com/isbn/9781403776952-us-300.jpg' />


##### 77). 725367520971120640
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


##### 78). 725070441166045189
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


##### 79). 724342509137104896
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


##### 80). 723647872307064833
https://twitter.com/paprbckparadise/status/723647872307064833
```js{
  "id": "723647872307064833",
  "in": "http://pbs.twimg.com/media/Cgrp57LU8AEE13D.jpg",
  "result": {
    "imgurl": "https://images-na.ssl-images-amazon.com/images/I/51QfnK1zARL.jpg",
    "imgrefurl": "https://www.amazon.com/Secret-Pirates-Hill-Hardy-Boys/dp/044808936X",
    "h": "500",
    "w": "323",
    "tbnid": "1zT-n8eVFPP7zM",
    "tbnh": "279",
    "tbnw": "180",
    "usg": "__lmLOBMlbFi2lsZ7SdFAUMqXRJDw",
    "docid": "WXQ6ALYznwpLTM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Cgrp57LU8AEE13D.jpg' /> | <img width='300' src='https://images-na.ssl-images-amazon.com/images/I/51QfnK1zARL.jpg' />


##### 81). 723195263758688257
https://twitter.com/paprbckparadise/status/723195263758688257
```js{
  "id": "723195263758688257",
  "in": "http://pbs.twimg.com/media/CglOQpNU4AAaijc.jpg",
  "result": {
    "imgurl": "https://lovelace-media.imgix.net/uploads/573/9b748af0-c7b7-0132-9a5a-0e01949ad350.jpg%3Fw%3D700%26fit%3Dmax%26auto%3Dformat%26q%3D70",
    "imgrefurl": "http://www.bustle.com/articles/77215-21-books-from-childhood-you-forgot-that-you-loved",
    "h": "475",
    "w": "323",
    "tbnid": "eIg4pizssR3c3M",
    "tbnh": "272",
    "tbnw": "185",
    "usg": "__QHW_b0BsrzQ0jkjrDeiRFXG73PA",
    "docid": "IJ1wXgc7VicA3M"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CglOQpNU4AAaijc.jpg' /> | <img width='300' src='https://lovelace-media.imgix.net/uploads/573/9b748af0-c7b7-0132-9a5a-0e01949ad350.jpg?w=700&fit=max&auto=format&q=70' />


##### 82). 722833098694479873
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


##### 83). 721423358580002816
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


##### 84). 721057679574065158
https://twitter.com/paprbckparadise/status/721057679574065158
```js{
  "id": "721057679574065158",
  "in": "http://pbs.twimg.com/media/CgG2I3-UUAA8uR6.jpg",
  "result": {
    "imgurl": "https://images-na.ssl-images-amazon.com/images/I/6109%252BCCZm6L.jpg",
    "imgrefurl": "https://www.amazon.com/Marshmallow-Muscles-Banana-Brainstorms-Karen/dp/0590433946",
    "h": "500",
    "w": "344",
    "tbnid": "arXcOtGnQqEkiM",
    "tbnh": "271",
    "tbnw": "186",
    "usg": "__K2BZQCIKyRPWVytE7ahg1MRl_Ps",
    "docid": "oQxsXY_kUtMRZM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CgG2I3-UUAA8uR6.jpg' /> | <img width='300' src='https://images-na.ssl-images-amazon.com/images/I/6109%2BCCZm6L.jpg' />


##### 85). 720638464102764544
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


##### 86). 719937833100685312
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


##### 87). 719577764253138945
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


##### 88). 719223403626909697
https://twitter.com/paprbckparadise/status/719223403626909697
```js{
  "id": "719223403626909697",
  "in": "http://pbs.twimg.com/media/Cfsx39uUYAA6_u9.jpg",
  "result": {
    "imgurl": "http://carlasbigbookshed.com.au/images/Friends%2520Til%2520The%2520Ocean%2520Waves%2520Friends%25204Ever.JPG",
    "imgrefurl": "http://carlasbigbookshed.com.au/index.php"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Cfsx39uUYAA6_u9.jpg' /> | <img width='300' src='http://carlasbigbookshed.com.au/images/Friends%20Til%20The%20Ocean%20Waves%20Friends%204Ever.JPG' />


##### 89). 718888693893767168
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


##### 90). 718500670995701760
https://twitter.com/paprbckparadise/status/718500670995701760
```js{
  "id": "718500670995701760",
  "in": "http://pbs.twimg.com/media/CfigjZAUYAADv1v.jpg",
  "result": {
    "imgurl": "http://3.darkroom.shortlist.com/1025/bfbe895f6bd9dbc853a039544e608433:b4f16299601016313cd163fd3caec612/covers.png",
    "imgrefurl": "http://www.shortlist.com/entertainment/books",
    "h": "769",
    "w": "1025",
    "tbnid": "OP5VugV4hNbt6M",
    "tbnh": "194",
    "tbnw": "259",
    "usg": "__cmB-IjlAaWtsVVhmxhQnWPGYilQ",
    "docid": "Po2D6x_Z6IRLOM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CfigjZAUYAADv1v.jpg' /> | <img width='300' src='http://3.darkroom.shortlist.com/1025/bfbe895f6bd9dbc853a039544e608433:b4f16299601016313cd163fd3caec612/covers.png' />


##### 91). 718449143597772802
https://twitter.com/paprbckparadise/status/718449143597772802
```js{
  "id": "718449143597772802",
  "in": "http://pbs.twimg.com/media/CfhxsGFUkAASBlH.jpg",
  "result": {
    "imgurl": "http://thebobbseytwins.weebly.com/uploads/1/0/3/1/10317938/8581448_orig.jpg",
    "imgrefurl": "http://thebobbseytwins.weebly.com",
    "h": "320",
    "w": "221",
    "tbnid": "XKVS9hLvbrRzCM",
    "tbnh": "256",
    "tbnw": "176",
    "usg": "__Uj72obBL4p1-wwST45F2F2db8O8",
    "docid": "ikjIKLLssLtBNM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CfhxsGFUkAASBlH.jpg' /> | <img width='300' src='http://thebobbseytwins.weebly.com/uploads/1/0/3/1/10317938/8581448_orig.jpg' />


##### 92). 718117153065410561
https://twitter.com/paprbckparadise/status/718117153065410561
```js{
  "id": "718117153065410561",
  "in": "http://pbs.twimg.com/media/CfdDvtkVAAAaUfj.jpg",
  "result": {
    "imgurl": "http://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1256604945i/1200937._UY475_SS475_.jpg",
    "imgrefurl": "http://www.goodreads.com/book/show/1200937.First_Place",
    "h": "475",
    "w": "475",
    "tbnid": "t7fEopTyppVAcM",
    "tbnh": "225",
    "tbnw": "225",
    "usg": "__SunB3fnc4CF5YXTTxAZnZ1ho-aE",
    "docid": "fMEfJMDDY_TB0M"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CfdDvtkVAAAaUfj.jpg' /> | <img width='300' src='http://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1256604945i/1200937._UY475_SS475_.jpg' />


##### 93). 717748045069180928
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


##### 94). 717426667791069184
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


##### 95). 717385843065753600
https://twitter.com/paprbckparadise/status/717385843065753600
```js{
  "id": "717385843065753600",
  "in": "http://pbs.twimg.com/media/CfSqn3nUMAAFLbg.jpg",
  "result": {
    "imgurl": "https://images.contentreserve.com/ImageType-400/1523-1/8B5/392/64/%257B8B539264-7653-4717-B181-25D6808A7AB6%257DImg400.jpg",
    "imgrefurl": "https://www.overdrive.com/series/nancy-drew-mystery"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CfSqn3nUMAAFLbg.jpg' /> | <img width='300' src='https://images.contentreserve.com/ImageType-400/1523-1/8B5/392/64/%7B8B539264-7653-4717-B181-25D6808A7AB6%7DImg400.jpg' />


##### 96). 717016641947639809
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


##### 97). 716638876920455170
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


##### 98). 716325388117409792
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


##### 99). 715982100269297664
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


##### 100). 715947690421587969
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


##### 101). 715218786555547648
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


##### 102). 714844901905567744
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


##### 103). 714476410765619201
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


##### 104). 714161617978531840
https://twitter.com/paprbckparadise/status/714161617978531840
```js{
  "id": "714161617978531840",
  "in": "http://pbs.twimg.com/media/Cek2NN7WIAErU_C.jpg",
  "result": {
    "imgurl": "http://d.gr-assets.com/books/1388459148m/313065.jpg",
    "imgrefurl": "http://www.goodreads.com/book/show/1610015.The_New_Magdalen",
    "h": "144",
    "w": "98",
    "tbnid": "r4jsvdLiufUpIM",
    "tbnh": "115",
    "tbnw": "78",
    "usg": "__Gee1PIHedUdxw-bvqQSEB2-0XoY",
    "docid": "RCR7OjJqo1ivLM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Cek2NN7WIAErU_C.jpg' /> | <img width='300' src='http://d.gr-assets.com/books/1388459148m/313065.jpg' />


##### 105). 713779634676957184
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


##### 106). 713449040747204608
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


##### 107). 713382070450393088
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


##### 108). 713040129015689216
https://twitter.com/paprbckparadise/status/713040129015689216
```js{
  "id": "713040129015689216",
  "in": "http://pbs.twimg.com/media/CeU6N_jUkAA646j.png",
  "result": {
    "imgurl": "http://d2arxad8u2l0g7.cloudfront.net/books/1256604945m/1200937.jpg",
    "imgrefurl": "http://www.goodreads.com/book/show/1200937.First_Place",
    "h": "147",
    "w": "98",
    "tbnid": "XUfNlACFzz5eaM",
    "tbnh": "117",
    "tbnw": "78",
    "usg": "__MKSUr6A4yPdUsWuKIdKulc3FE0s",
    "docid": "fMEfJMDDY_TB0M"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CeU6N_jUkAA646j.png' /> | <img width='300' src='http://d2arxad8u2l0g7.cloudfront.net/books/1256604945m/1200937.jpg' />


##### 109). 712769838758821889
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


##### 110). 712676589528461312
https://twitter.com/paprbckparadise/status/712676589528461312
```js{
  "id": "712676589528461312",
  "in": "http://pbs.twimg.com/media/CePvlPSVAAAQlul.jpg",
  "result": {
    "imgurl": "http://d2arxad8u2l0g7.cloudfront.net/books/1256604945m/1200937.jpg",
    "imgrefurl": "http://www.goodreads.com/book/show/1200937.First_Place",
    "h": "147",
    "w": "98",
    "tbnid": "XUfNlACFzz5eaM",
    "tbnh": "117",
    "tbnw": "78",
    "usg": "__MKSUr6A4yPdUsWuKIdKulc3FE0s",
    "docid": "fMEfJMDDY_TB0M"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CePvlPSVAAAQlul.jpg' /> | <img width='300' src='http://d2arxad8u2l0g7.cloudfront.net/books/1256604945m/1200937.jpg' />


##### 111). 712419926963654657
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


##### 112). 712310942181122048
https://twitter.com/paprbckparadise/status/712310942181122048
```js{
  "id": "712310942181122048",
  "in": "http://pbs.twimg.com/media/CeKjBwMVIAARWUY.png",
  "result": {
    "imgurl": "http://www.series-books.com/nancydrew/minstrel/drewl58.jpg",
    "imgrefurl": "http://www.series-books.com/nancydrew/minstrelb.html",
    "h": "947",
    "w": "692",
    "tbnid": "VGaMD2rXd2LE3M",
    "tbnh": "263",
    "tbnw": "192",
    "usg": "__ncxQavVeFnhXlZVIXlkW9d8DVvc",
    "docid": "hMjQNkLzdJljlM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CeKjBwMVIAARWUY.png' /> | <img width='300' src='http://www.series-books.com/nancydrew/minstrel/drewl58.jpg' />


##### 113). 712027796604723200
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


##### 114). 711939361089060866
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


##### 115). 711590017928286208
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


##### 116). 711241128251555840
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


##### 117). 710916326378700800
https://twitter.com/paprbckparadise/status/710916326378700800
```js{
  "id": "710916326378700800",
  "in": "http://pbs.twimg.com/media/Cd2uoayUAAAleD6.jpg",
  "result": {
    "imgurl": "https://img0.etsystatic.com/064/1/7110130/il_570xN.794196902_eau6.jpg",
    "imgrefurl": "https://www.etsy.com/listing/238708036/embroidered-book-cover-sweet-valley",
    "h": "770",
    "w": "570",
    "tbnid": "uwKI15VUGwK8gM",
    "tbnh": "261",
    "tbnw": "193",
    "usg": "__dC2ZFTnajtJcN7ZC2mxBnLDFrG0",
    "docid": "v04Da-otvijpIM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Cd2uoayUAAAleD6.jpg' /> | <img width='300' src='https://img0.etsystatic.com/064/1/7110130/il_570xN.794196902_eau6.jpg' />


##### 118). 710504687061979136
https://twitter.com/paprbckparadise/status/710504687061979136
```js{
  "id": "710504687061979136",
  "in": "http://pbs.twimg.com/media/Cdw4P3lUAAEkv6j.jpg",
  "result": {
    "imgurl": "http://thumbs2.ebaystatic.com/d/l225/m/mnDRwui8UyaqT2TOPT5n6pA.jpg",
    "imgrefurl": "http://www.ebay.com/bhp/book-bundle",
    "h": "225",
    "w": "161",
    "tbnid": "YvCRiMWKgBi36M",
    "tbnh": "180",
    "tbnw": "128",
    "usg": "__Jqz5SyboTWPvob-uQzF2QeSdbVo",
    "docid": "hroE4Co_5B1NeM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Cdw4P3lUAAEkv6j.jpg' /> | <img width='300' src='http://thumbs2.ebaystatic.com/d/l225/m/mnDRwui8UyaqT2TOPT5n6pA.jpg' />


##### 119). 710203403029389313
https://twitter.com/paprbckparadise/status/710203403029389313
```js{
  "id": "710203403029389313",
  "in": "http://pbs.twimg.com/media/CdsmO08UUAA6taE.jpg",
  "result": {
    "imgurl": "http://kirstygreenwood.typepad.com/.a/6a010536b33b69970b01a511491b51970c-600wi",
    "imgrefurl": "http://www.novelicious.com/2014/01/10-of-the-most-dramatic-sweet-valley-high-covers-part-one.html",
    "h": "974",
    "w": "600",
    "tbnid": "kjqYDH0lqPve6M",
    "tbnh": "286",
    "tbnw": "176",
    "usg": "__nYtGLq0Rq3jcwTLqWKEQPycXe_g",
    "docid": "fK000av-Q3yh_M"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CdsmO08UUAA6taE.jpg' /> | <img width='300' src='http://kirstygreenwood.typepad.com/.a/6a010536b33b69970b01a511491b51970c-600wi' />


##### 120). 709911763374845952
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


##### 121). 709460919164674049
https://twitter.com/paprbckparadise/status/709460919164674049
```js{
  "id": "709460919164674049",
  "in": "http://pbs.twimg.com/media/CdiC8lWVAAEaspk.png",
  "result": {
    "imgurl": "https://covers.openlibrary.org/b/id/6983018-M.jpg",
    "imgrefurl": "https://openlibrary.org/books/OL17575434M/On_my_honor",
    "h": "274",
    "w": "180",
    "tbnid": "G5EtmHyCUxAYmM",
    "tbnh": "219",
    "tbnw": "144",
    "usg": "__gi4ewGTGIrovEVyELh4CwFv_hdU",
    "docid": "zzZx2xyLsQcSYM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CdiC8lWVAAEaspk.png' /> | <img width='300' src='https://covers.openlibrary.org/b/id/6983018-M.jpg' />


##### 122). 709407230404112385
https://twitter.com/paprbckparadise/status/709407230404112385
```js{
  "id": "709407230404112385",
  "in": "http://pbs.twimg.com/media/CdhSHfKUUAQ49kJ.jpg",
  "result": {
    "imgurl": "http://kirstygreenwood.typepad.com/.a/6a010536b33b69970b01a511491b51970c-600wi",
    "imgrefurl": "http://www.novelicious.com/2014/01/10-of-the-most-dramatic-sweet-valley-high-covers-part-one.html",
    "h": "974",
    "w": "600",
    "tbnid": "kjqYDH0lqPve6M",
    "tbnh": "286",
    "tbnw": "176",
    "usg": "__nYtGLq0Rq3jcwTLqWKEQPycXe_g",
    "docid": "fK000av-Q3yh_M"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CdhSHfKUUAQ49kJ.jpg' /> | <img width='300' src='http://kirstygreenwood.typepad.com/.a/6a010536b33b69970b01a511491b51970c-600wi' />


##### 123). 709076016178667520
https://twitter.com/paprbckparadise/status/709076016178667520
```js{
  "id": "709076016178667520",
  "in": "http://pbs.twimg.com/media/Cdck4SGUkAIKyJb.png",
  "result": {
    "imgurl": "https://scontent.cdninstagram.com/t51.2885-15/sh0.08/e35/12912755_978896642159423_1400608906_n.jpg%3Fig_cache_key%3DMTIyMzM3MjcwMDA4NzI2NzM3OQ%253D%253D.2",
    "imgrefurl": "http://instacelebs.net/philippines/yeng-constantino-yengconstantino-nagfitting-first-fitting-na-ng-gown-ko-for-the-wedding-at-may-bonus-inspirational-kwentuhan-pa-with-sir-albertandrada-super-blessed-sa-very-timely-conversation-nam",
    "h": "750",
    "w": "750",
    "tbnid": "UUOrim0VjQ4b0M",
    "tbnh": "225",
    "tbnw": "225",
    "usg": "__ayKPtdHPjv4d_qZYDrJiFYIukyM",
    "docid": "gBGhcmcMy2KMDM"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/Cdck4SGUkAIKyJb.png' /> | <img width='300' src='https://scontent.cdninstagram.com/t51.2885-15/sh0.08/e35/12912755_978896642159423_1400608906_n.jpg?ig_cache_key=MTIyMzM3MjcwMDA4NzI2NzM3OQ%3D%3D.2' />


##### 124). 708700694845345793
https://twitter.com/paprbckparadise/status/708700694845345793
```js{
  "id": "708700694845345793",
  "in": "http://pbs.twimg.com/media/CdXPhtIUEAArlrx.jpg",
  "result": {
    "imgurl": "http://images.scribblelive.com/2014/10/20/de758fbc-d99e-4a4e-971c-45bfb82d2ce1.jpg",
    "imgrefurl": "http://www.cbc.ca/books/2014/10/happy-birthday-gordon-korman.html",
    "h": "459",
    "w": "318",
    "tbnid": "LyHpdQZ1JV3kfM",
    "tbnh": "270",
    "tbnw": "187",
    "usg": "__lOv-Uonn8_k-mWl5PJ-morIvVvo",
    "docid": "ba_BKaz0oZOg4M"
  }
}```
ORIGINAL | RESULT
-------- | ------
<img src='http://pbs.twimg.com/media/CdXPhtIUEAArlrx.jpg' /> | <img width='300' src='http://images.scribblelive.com/2014/10/20/de758fbc-d99e-4a4e-971c-45bfb82d2ce1.jpg' />


##### 125). 708473713558032384
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


##### 126). 708381447032217601
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

Total: 148, failed: 22 (not displayed)
