### Reverse image lookup of [@paprbckparadise](https://twitter.com/paprbckparadise) tweets

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)  
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

While Google does have a convenient endpoint just _begging_ to be fed sweet image data (`/searchbyimage?image_url=`), if you hit it enough times you'll get this lovely message:

<img alt='CAPTCHA' src='http://i.imgur.com/gsIm2eI.png' style='border: 1px solid #e3e3e3;' />

[Why did this happen?](https://www.google.com/policies/terms/)

The important bit to note here is:

> Don’t misuse our Services. For example, don’t interfere with our Services or try to access them using a method other than the interface and the instructions that we provide.

So, basically this whole thing is a [righteous hack](https://www.youtube.com/watch?v=vbZB21sxdqk) since _technically_ we're abusing Google's TOS. :metal:

#### Getting around Google's captcha

I discovered there are a couple ways to do this (there could be others):

##### 1. Use a proxy

If you can route the requests through different IPs it stands to reason Google will not be able to mark the traffic as a bot.

##### 2. Throttle the requests

It occurred to me that I could simply delay the intervals between each consecutive request to make the script _look_ human. I started with a delay of 10 seconds, but this would still trigger the CAPTCHA, leaving me to try every 20 seconds which appears to work just fine.

Total script operation takes about 3206780 milliseconds (~53 minutes). This will of course vary depending on bandwidth.

#### DISCLAIMER

THIS SOFTWARE IS PROVIDED AS A PROOF-OF-CONCEPT EXPLORATION OF GOOGLE SEARCH.
RUNNING THIS SOFTWARE/ABUSING GOOGLE'S TOS COULD RESULT IN A PERMANENT BAN FROM THEIR SERVICES (I GUESS?)

#### TODO

- [ ] Write more about the _how_ (for now, just look at the sauce)
- [ ] Write a breakdown of success rate (for now, just check the results!)

#### Results

##### 1). 770408907411861504
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
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CrEJU-vVIAAGorr.png' /> | <img src='https://www.blackgate.com/wp-content/uploads/2014/12/A-Dream-of-Kinship.jpg' />


##### 2). 769323422820118528
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
img | result
--- | ------
<img src='http://pbs.twimg.com/media/Cq0vPF9VIAA4orD.png' /> | <img src='https://schlockvalue.files.wordpress.com/2014/08/cold-war-in-a-country-garden.png' />


##### 3). 768603978137415680
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
img | result
--- | ------
<img src='http://pbs.twimg.com/media/Cqqg_9SUEAA1Y52.png' /> | <img src='https://devonclaytor.files.wordpress.com/2013/08/faust.jpg' />


##### 4). 767876626449260554
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
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CqgLZEqUIAAHNn5.png' /> | <img src='http://cache.coverbrowser.com/image/ace-books/1474-1.jpg' />


##### 5). 766427726009905152
https://twitter.com/paprbckparadise/status/766427726009905152
```js{
  "id": "766427726009905152",
  "in": "http://pbs.twimg.com/media/CqLlwURUAAAvIh3.png",
  "result": {
    "imgurl": "http://i3.kym-cdn.com/photos/images/newsfeed/001/162/651/29a.jpg",
    "imgrefurl": "http://knowyourmeme.com/photos/1162651-childrens-book-cover-parodies",
    "h": "650",
    "w": "405",
    "tbnid": "GdPBt-txRPR24M",
    "tbnh": "285",
    "tbnw": "177",
    "usg": "__V5RcnP1gUnYaO3F3mI6t5mQJELM",
    "docid": "nBYBQfR8_LWUnM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CqLlwURUAAAvIh3.png' /> | <img src='http://i3.kym-cdn.com/photos/images/newsfeed/001/162/651/29a.jpg' />


##### 6). 765347383475576832
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
img | result
--- | ------
<img src='http://pbs.twimg.com/media/Cp8O_1WVIAMihYo.png' /> | <img src='http://www.sharon-green.net/images/Jalav2.jpg' />


##### 7). 764250300991442944
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
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CpspMy2VYAAC7-J.png' /> | <img src='https://images-na.ssl-images-amazon.com/images/I/41DlDWpEdkL._AC_UL320_SR190,320_.jpg' />


##### 8). 763888274255392768
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
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CpngU7oUIAA8O9B.png' /> | <img src='https://cheapscifi.files.wordpress.com/2011/01/the-secrets-of-synchronicity.jpg' />


##### 9). 763164890106257409
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
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CpdOJcrVYAAntPu.png' /> | <img src='https://sciencefictionruminations.files.wordpress.com/2012/12/thprmdsfrm1971.jpeg?w=388&h=640' />


##### 10). 762806076752277504
https://twitter.com/paprbckparadise/status/762806076752277504
```js{
  "id": "762806076752277504",
  "in": "http://pbs.twimg.com/media/CpYH3pqVMAAc0OZ.jpg",
  "result": {
    "imgurl": "http://www.sondheimguide.com/bishop/heaven.jpg",
    "imgrefurl": "http://www.sondheimguide.com/bishop/bisnovt.htm",
    "h": "599",
    "w": "360",
    "tbnid": "-cpkQRezKyWgHM",
    "tbnh": "290",
    "tbnw": "174",
    "usg": "__InYidDkPP8-T1MEGc_Y2wksQg_g",
    "docid": "pD1-ahFu1koccM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CpYH3pqVMAAc0OZ.jpg' /> | <img src='http://www.sondheimguide.com/bishop/heaven.jpg' />


##### 11). 761714306320732162
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
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CpIm8VFUkAA2L7i.png' /> | <img src='http://d.gr-assets.com/books/1315005716l/2887070.jpg' />


##### 12). 761352248584605696
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
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CpDdnBsUIAEmEWv.jpg' /> | <img src='http://www.gwthomas.org/sskull.jpg' />


##### 13). 759177754126356480
https://twitter.com/paprbckparadise/status/759177754126356480
```js{
  "id": "759177754126356480",
  "in": "http://pbs.twimg.com/media/Cokj3EpVIAAq8li.jpg",
  "result": {
    "imgurl": "https://littleredreviewer.files.wordpress.com/2014/02/breaking_through_by_juliedillon-d5dq2j8.jpg",
    "imgrefurl": "https://littleredreviewer.wordpress.com/2014/02/03/interview-with-julie-dillon",
    "h": "1050",
    "w": "761",
    "tbnid": "ZPB3zjuDBuIvXM",
    "tbnh": "264",
    "tbnw": "191",
    "usg": "__sKDiYie7p9k-MvcKtpA87CBwniw",
    "docid": "erKWICzt7ewskM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/Cokj3EpVIAAq8li.jpg' /> | <img src='https://littleredreviewer.files.wordpress.com/2014/02/breaking_through_by_juliedillon-d5dq2j8.jpg' />


##### 14). 758815411907342336
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
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CofaK3zUMAA91rl.jpg' /> | <img src='http://cache.coverbrowser.com/image/signet-books/382-1.jpg' />


##### 15). 758452312809410560
https://twitter.com/paprbckparadise/status/758452312809410560
```js{
  "id": "758452312809410560",
  "in": "http://pbs.twimg.com/media/CoaPh6kUMAIaCDG.jpg",
  "result": {
    "imgurl": "http://www.fictiondb.com/coversth/th_0373192800.jpg",
    "imgrefurl": "http://www.fictiondb.com/author/linda-varner~7519.htm",
    "h": "200",
    "w": "125",
    "tbnid": "l4rLjOac65pQAM",
    "tbnh": "160",
    "tbnw": "100",
    "usg": "__ACZFURD8dXUAN3rF0t-WJD_KcDs",
    "docid": "Pd5tmS67mlzloM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CoaPh6kUMAIaCDG.jpg' /> | <img src='http://www.fictiondb.com/coversth/th_0373192800.jpg' />


##### 16). 758101287300804608
https://twitter.com/paprbckparadise/status/758101287300804608
```js{
  "id": "758101287300804608",
  "in": "http://pbs.twimg.com/media/CoVQFqzUMAEm88d.png",
  "result": {
    "imgurl": "http://d2arxad8u2l0g7.cloudfront.net/books/1395786305l/1044431.jpg",
    "imgrefurl": "http://www.goodreads.com/book/show/1044431.Silke",
    "h": "475",
    "w": "285",
    "tbnid": "dFLTJBA5HvaouM",
    "tbnh": "290",
    "tbnw": "174",
    "usg": "__Ltjyd6qnOhkCCUEqmW0wmozq3Wg",
    "docid": "pd1s4EoHOiC4GM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CoVQFqzUMAEm88d.png' /> | <img src='http://d2arxad8u2l0g7.cloudfront.net/books/1395786305l/1044431.jpg' />


##### 17). 757694196543201281
https://twitter.com/paprbckparadise/status/757694196543201281
```js{
  "id": "757694196543201281",
  "in": "http://pbs.twimg.com/media/CoPebvXUkAEeGD0.jpg",
  "result": {
    "imgurl": "http://www.fictiondb.com/coversth/th_0373225598.jpg",
    "imgrefurl": "http://www.fictiondb.com/author/patricia-rosemoor~6394.htm",
    "h": "200",
    "w": "119",
    "tbnid": "PSjMtzS4GPXc0M",
    "tbnh": "160",
    "tbnw": "95",
    "usg": "__S3E_6L2Ro4J9KSECP-_vsBfUBKs",
    "docid": "4iHvyWpx1fmzYM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CoPebvXUkAEeGD0.jpg' /> | <img src='http://www.fictiondb.com/coversth/th_0373225598.jpg' />


##### 18). 756228929740943362
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
img | result
--- | ------
<img src='http://pbs.twimg.com/media/Cn6p4xrVMAAdSEK.jpg' /> | <img src='http://d2arxad8u2l0g7.cloudfront.net/books/1373650358l/18190497.jpg' />


##### 19). 755892639338160129
https://twitter.com/paprbckparadise/status/755892639338160129
```js{
  "id": "755892639338160129",
  "in": "http://pbs.twimg.com/media/Cn14IN6VMAQ9Nvc.jpg",
  "result": {
    "imgurl": "https://img.fantasticfiction.com/images/n17/n88475.jpg",
    "imgrefurl": "https://www.fantasticfiction.com/l/louis-lamour/callaghen.htm",
    "h": "475",
    "w": "288",
    "tbnid": "ES3ofA7VFwLhhM",
    "tbnh": "288",
    "tbnw": "175",
    "usg": "__B_uv1KVyXAN4CHz2qpLChQxFs-o",
    "docid": "-ChK4M5R6o6XFM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/Cn14IN6VMAQ9Nvc.jpg' /> | <img src='https://img.fantasticfiction.com/images/n17/n88475.jpg' />


##### 20). 755494650958360576
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
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CnwOKv3VMAAgwWl.jpg' /> | <img src='http://thumbs.ebaystatic.com/images/m/mzKusz02X0ZZt6GFzs1weRQ/s-l225.jpg' />


##### 21). 755148375108878336
https://twitter.com/paprbckparadise/status/755148375108878336
```js{
  "id": "755148375108878336",
  "in": "http://pbs.twimg.com/media/CnrTTyAVMAAkpo8.jpg",
  "result": {
    "imgurl": "https://img.fantasticfiction.com/thumbs/n35/n179178.jpg",
    "imgrefurl": "https://www.fantasticfiction.com/l/jake-logan",
    "h": "100",
    "w": "57",
    "tbnid": "FaN83zfxe1Uk2M",
    "tbnh": "94",
    "tbnw": "54",
    "usg": "__6gtRXZhXGTAVOSn0N13T4J3SHwg",
    "docid": "DaWrz_tocQMtAM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CnrTTyAVMAAkpo8.jpg' /> | <img src='https://img.fantasticfiction.com/thumbs/n35/n179178.jpg' />


##### 22). 754057968165920769
https://twitter.com/paprbckparadise/status/754057968165920769
```js{
  "id": "754057968165920769",
  "in": "http://pbs.twimg.com/media/CnbzjXIUMAUkUJj.jpg",
  "result": {
    "imgurl": "http://people.uncw.edu/smithms/Ace%2520singles/s5N-series/47121-8.jpg",
    "imgrefurl": "http://people.uncw.edu/smithms/Ace_5N4.html",
    "h": "525",
    "w": "333",
    "tbnid": "YTRNnM82bYiPFM",
    "tbnh": "282",
    "tbnw": "179",
    "usg": "__2he4mKcnUhNFr9jqY_vXT4TQ6xQ",
    "docid": "SOmJg6C_FWh1vM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CnbzjXIUMAUkUJj.jpg' /> | <img src='http://people.uncw.edu/smithms/Ace%20singles/s5N-series/47121-8.jpg' />


##### 23). 753740941907767296
https://twitter.com/paprbckparadise/status/753740941907767296
```js{
  "id": "753740941907767296",
  "in": "http://pbs.twimg.com/media/CnXSWqmUMAE5X3f.jpg",
  "result": {
    "imgurl": "http://pictures.abebooks.com/JOHNMCCORMICK/636792826.jpg",
    "imgrefurl": "http://www.abebooks.co.uk/book-search/title/time-beyond-time/author/green-i-g/first-edition",
    "h": "600",
    "w": "355",
    "tbnid": "OY-0R35CJw3VhM",
    "tbnh": "292",
    "tbnw": "173",
    "usg": "__9FPKF-dxKjqJw8mwBKSbSiBzCNs",
    "docid": "MGrUxfvVPwQhfM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CnXSWqmUMAE5X3f.jpg' /> | <img src='http://pictures.abebooks.com/JOHNMCCORMICK/636792826.jpg' />


##### 24). 753348300699381760
https://twitter.com/paprbckparadise/status/753348300699381760
```js{
  "id": "753348300699381760",
  "in": "http://pbs.twimg.com/media/CnRuFO1UsAEyPw2.jpg",
  "result": {
    "imgurl": "http://www.goodshowsir.co.uk/wp-content/uploads/2016/07/Hands_of_Glory.jpg",
    "imgrefurl": "http://www.goodshowsir.co.uk",
    "h": "1678",
    "w": "1120",
    "tbnid": "QgNDap3ZrsUzdM",
    "tbnh": "275",
    "tbnw": "183",
    "usg": "__f2LZVNhCQQiGRU4QC7tDgKgANmo",
    "docid": "dL9YWMyhB1TmEM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CnRuFO1UsAEyPw2.jpg' /> | <img src='http://www.goodshowsir.co.uk/wp-content/uploads/2016/07/Hands_of_Glory.jpg' />


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
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CnMXtEuUEAA2563.jpg' /> | <img src='https://images-na.ssl-images-amazon.com/images/I/51OLKNJf0XL.jpg' />


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
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CnG4Zk8UsAA49AH.png' /> | <img src='http://thetrashcollector.com/PaperbacksMZ/BookQuestorTapes.jpg' />


##### 27). 750829379115098112
https://twitter.com/paprbckparadise/status/750829379115098112
```js{
  "id": "750829379115098112",
  "in": "http://pbs.twimg.com/media/Cmt7QT2VUAAyrOe.png",
  "result": {
    "imgurl": "http://www.goodshowsir.co.uk/wp-content/uploads/2016/07/Firebird.jpg",
    "imgrefurl": "http://www.goodshowsir.co.uk",
    "h": "1689",
    "w": "1131",
    "tbnid": "iDTO6CxLmFrzzM",
    "tbnh": "274",
    "tbnw": "184",
    "usg": "__Aum9w0jHom9nrQ8vpUYpFLgLmK8",
    "docid": "dL9YWMyhB1TmEM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/Cmt7QT2VUAAyrOe.png' /> | <img src='http://www.goodshowsir.co.uk/wp-content/uploads/2016/07/Firebird.jpg' />


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
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CmjbgfQUcAAkGzN.jpg' /> | <img src='http://img0003.psstatic.com/133223798_amazoncom-gunsmith-246-the-dead-mans-eyes-gunsmith-jove-.jpg' />


##### 29). 748997182519332865
https://twitter.com/paprbckparadise/status/748997182519332865
```js{
  "id": "748997182519332865",
  "in": "http://pbs.twimg.com/media/CmT48tAVUAAiPg5.jpg",
  "result": {
    "imgurl": "https://img.fantasticfiction.com/thumbs/x1/x5420.jpg",
    "imgrefurl": "https://www.fantasticfiction.com/d/sandy-dengler",
    "h": "100",
    "w": "58",
    "tbnid": "3peyDh7eLVpeHM",
    "tbnh": "94",
    "tbnw": "54",
    "usg": "__5tp-gvQnf5z-KWyPZtaPoaRNGvw",
    "docid": "LegiB1IykRfNyM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CmT48tAVUAAiPg5.jpg' /> | <img src='https://img.fantasticfiction.com/thumbs/x1/x5420.jpg' />


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
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CmOUM3IUYAAXVpV.jpg' /> | <img src='http://www.sff.net/people/doylemacdonald/statue_big.jpg' />


##### 31). 747931791579721729
https://twitter.com/paprbckparadise/status/747931791579721729
```js{
  "id": "747931791579721729",
  "in": "http://pbs.twimg.com/media/CmEvntqUgAAXJBs.png",
  "result": {
    "imgurl": "http://media.boingboing.net/wp-content/uploads/2016/06/sweet-valley-01.jpg",
    "imgrefurl": "http://boingboing.net/2016/06/14/commission-your-own-sweet-vall.html",
    "h": "1600",
    "w": "988",
    "tbnid": "nqaicsHSkqduoM",
    "tbnh": "286",
    "tbnw": "176",
    "usg": "__1TRCK4vd7IxxKobP-_4CrqFZXPA",
    "docid": "8cGOVlQdgX-r9M"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CmEvntqUgAAXJBs.png' /> | <img src='http://media.boingboing.net/wp-content/uploads/2016/06/sweet-valley-01.jpg' />


##### 32). 746437990382075904
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
img | result
--- | ------
<img src='http://pbs.twimg.com/media/ClvhSEvVEAAjZLq.png' /> | <img src='https://cliqueypizza.files.wordpress.com/2009/01/sweet-valley-high-secrets-with-betty-veronica.jpg' />


##### 33). 746093289569300480
https://twitter.com/paprbckparadise/status/746093289569300480
```js{
  "id": "746093289569300480",
  "in": "http://pbs.twimg.com/media/ClqmybGVYAAQZn6.jpg",
  "result": {
    "imgurl": "http://www.exodusbooks.com/images/item-large/28829.jpg",
    "imgrefurl": "http://www.exodusbooks.com/sugar-creek-gang-34/hutchens/28829",
    "h": "700",
    "w": "425",
    "tbnid": "stuVZqemCLCJqM",
    "tbnh": "288",
    "tbnw": "175",
    "usg": "__CSCU9FeAvM_qd7TqWgLM3EXxlnQ",
    "docid": "LFT_wvnlxmDtEM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/ClqmybGVYAAQZn6.jpg' /> | <img src='http://www.exodusbooks.com/images/item-large/28829.jpg' />


##### 34). 745767866511745024
https://twitter.com/paprbckparadise/status/745767866511745024
```js{
  "id": "745767866511745024",
  "in": "http://pbs.twimg.com/media/Cll_FyxUkAEilvZ.png",
  "result": {
    "imgurl": "https://d2arxad8u2l0g7.cloudfront.net/books/1182578659l/1297731.jpg",
    "imgrefurl": "https://www.goodreads.com/book/show/412347.Cover_Girls",
    "h": "475",
    "w": "280",
    "tbnid": "SP0rGhAE9FCGsM",
    "tbnh": "293",
    "tbnw": "172",
    "usg": "__gBA1ZoNR4B_Y-5SEFNWaKrIOK0A",
    "docid": "Z7rdxBg1HF-_FM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/Cll_FyxUkAEilvZ.png' /> | <img src='https://d2arxad8u2l0g7.cloudfront.net/books/1182578659l/1297731.jpg' />


##### 35). 745407512535408640
https://twitter.com/paprbckparadise/status/745407512535408640
```js{
  "id": "745407512535408640",
  "in": "http://pbs.twimg.com/media/Clg3wvRUYAQGR3Z.png",
  "result": {
    "imgurl": "https://a.dilcdn.com/bl/wp-content/uploads/sites/8/2016/06/svh12-2.jpg",
    "imgrefurl": "https://www.babble.com/entertainment/sweet-valley-high-best-covers",
    "h": "957",
    "w": "600",
    "tbnid": "TrlWNtYfMZr-CM",
    "tbnh": "284",
    "tbnw": "178",
    "usg": "__9lfa7DZYsOHGlQaxphYfeZh3R-Q",
    "docid": "aWCEmXDxyG9UZM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/Clg3wvRUYAQGR3Z.png' /> | <img src='https://a.dilcdn.com/bl/wp-content/uploads/sites/8/2016/06/svh12-2.jpg' />


##### 36). 744972618948706304
https://twitter.com/paprbckparadise/status/744972618948706304
```js{
  "id": "744972618948706304",
  "in": "http://pbs.twimg.com/media/Clar7AhVAAADnP3.jpg",
  "result": {
    "imgurl": "https://images-na.ssl-images-amazon.com/images/I/51DUIdHMX9L._AC_UL320_SR194,320_.jpg",
    "imgrefurl": "https://www.amazon.com/Danger-Vampire-Trail-Hardy-Boys/dp/0448089505",
    "h": "320",
    "w": "194",
    "tbnid": "NZS29PDPtKTGCM",
    "tbnh": "256",
    "tbnw": "155",
    "usg": "__ypZCpqf_Becpi3xvtVtW4NJCKWI",
    "docid": "QYQ7B9toa-TLDM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/Clar7AhVAAADnP3.jpg' /> | <img src='https://images-na.ssl-images-amazon.com/images/I/51DUIdHMX9L._AC_UL320_SR194,320_.jpg' />


##### 37). 743536457617285121
https://twitter.com/paprbckparadise/status/743536457617285121
```js{
  "id": "743536457617285121",
  "in": "http://pbs.twimg.com/media/ClGSd81UoAAjz5y.jpg",
  "result": {
    "imgurl": "http://taracalaby.com/wp-content/uploads/2015/10/svt4.jpg",
    "imgrefurl": "http://taracalaby.com/tag/junior-fiction",
    "h": "222",
    "w": "150",
    "tbnid": "YM9RHowELdaRAM",
    "tbnh": "177",
    "tbnw": "120",
    "usg": "__XaMsSlY-uK1JdYyzdOyxFzfnjgw",
    "docid": "itmAGVElKHlynM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/ClGSd81UoAAjz5y.jpg' /> | <img src='http://taracalaby.com/wp-content/uploads/2015/10/svt4.jpg' />


##### 38). 743160425223593984
https://twitter.com/paprbckparadise/status/743160425223593984
```js{
  "id": "743160425223593984",
  "in": "http://pbs.twimg.com/media/ClA8d6bUkAA1WlU.png",
  "result": {
    "imgurl": "https://images-na.ssl-images-amazon.com/images/I/51a-ehziDrL.jpg",
    "imgrefurl": "https://www.amazon.com/Silver-Pencil-Newbery-Library-Puffin/dp/0140347925",
    "h": "500",
    "w": "323",
    "tbnid": "XXULjAlWsWTvyM",
    "tbnh": "279",
    "tbnw": "180",
    "usg": "__PtEv5Wajdj63emRno4Kn1z6R2eg",
    "docid": "-ZKgB9-Z_bF6vM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/ClA8d6bUkAA1WlU.png' /> | <img src='https://images-na.ssl-images-amazon.com/images/I/51a-ehziDrL.jpg' />


##### 39). 742829085194231808
https://twitter.com/paprbckparadise/status/742829085194231808
```js{
  "id": "742829085194231808",
  "in": "http://pbs.twimg.com/media/Ck8PHbvUYAA-Jjp.jpg",
  "result": {
    "imgurl": "http://prodimage.images-bn.com/pimages/9781453208144_p0_v3_s118x184.jpg",
    "imgrefurl": "http://www.barnesandnoble.com/w/poison-chris-wooding/1102165395"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/Ck8PHbvUYAA-Jjp.jpg' /> | <img src='http://prodimage.images-bn.com/pimages/9781453208144_p0_v3_s118x184.jpg' />


##### 40). 742485039678509056
https://twitter.com/paprbckparadise/status/742485039678509056
```js{
  "id": "742485039678509056",
  "in": "http://pbs.twimg.com/media/Ck3WNYWUgAAyl-C.jpg",
  "result": {
    "imgurl": "http://s.ecrater.com/stores/49641/510f51213bf65_49641f.jpg",
    "imgrefurl": "http://www.ecrater.com/p/16200831/a-little-golden-book-jack-and-the",
    "h": "135",
    "w": "135",
    "tbnid": "r7OHvWJE_ee2rM",
    "tbnh": "108",
    "tbnw": "108",
    "usg": "__iXXsbPFZ7LVZ1FRyVSZ_yIFDTVI",
    "docid": "BlqUjMF99fanXM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/Ck3WNYWUgAAyl-C.jpg' /> | <img src='http://s.ecrater.com/stores/49641/510f51213bf65_49641f.jpg' />


##### 41). 741364453849993218
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
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CknbCsaUYAA1hXB.png' /> | <img src='http://ic.pics.livejournal.com/mockingbird_13/12895513/2366/300.jpg' />


##### 42). 741035255969153024
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
img | result
--- | ------
<img src='http://pbs.twimg.com/media/Ckivo2HVAAAqAb_.jpg' /> | <img src='https://images-na.ssl-images-amazon.com/images/I/51RuZIBOU3L._AC_UL320_SR218,320_.jpg' />


##### 43). 740692523593519105
https://twitter.com/paprbckparadise/status/740692523593519105
```js{
  "id": "740692523593519105",
  "in": "http://pbs.twimg.com/media/Ckd37NzUoAAhl_k.jpg",
  "result": {
    "imgurl": "https://images-eu.ssl-images-amazon.com/images/I/41DtsWlJ%252BiL._AC_UL320_SR196,320_.jpg",
    "imgrefurl": "https://www.amazon.co.uk/Dear-Sister-Sweet-Valley-High/dp/0553276727",
    "h": "320",
    "w": "196",
    "tbnid": "BkolGqzozHlCwM",
    "tbnh": "256",
    "tbnw": "156",
    "usg": "__BVAlY9KPpakqsZHDjDBBdJk1g_Q",
    "docid": "EJdKj35F3Vj4BM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/Ckd37NzUoAAhl_k.jpg' /> | <img src='https://images-eu.ssl-images-amazon.com/images/I/41DtsWlJ%2BiL._AC_UL320_SR196,320_.jpg' />


##### 44). 739955885707907072
https://twitter.com/paprbckparadise/status/739955885707907072
```js{
  "id": "739955885707907072",
  "in": "http://pbs.twimg.com/media/CkTZ9PRUYAAJB-o.jpg",
  "result": {
    "imgurl": "http://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1349040064i/96646._UY400_SS400_.jpg",
    "imgrefurl": "http://www.goodreads.com/book/show/96646.The_Firebird_Rocket",
    "h": "400",
    "w": "400",
    "tbnid": "4x_xbRzx1rnZOM",
    "tbnh": "225",
    "tbnw": "225",
    "usg": "__FTAYN3IB5nleq_mQRaO37P0BEDQ",
    "docid": "nSY8ed6T6waVyM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CkTZ9PRUYAAJB-o.jpg' /> | <img src='http://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1349040064i/96646._UY400_SS400_.jpg' />


##### 45). 739609275153027072
https://twitter.com/paprbckparadise/status/739609275153027072
```js{
  "id": "739609275153027072",
  "in": "http://pbs.twimg.com/media/CkOet0xUUAA1YG3.jpg",
  "result": {
    "imgurl": "https://images-na.ssl-images-amazon.com/images/I/51M76UzfsAL.jpg",
    "imgrefurl": "https://www.amazon.com/Collie-Animal-Holiday-Treasury-6-Valentines/dp/0439687608",
    "h": "500",
    "w": "349",
    "tbnid": "6ZeF5rCjyokXWM",
    "tbnh": "269",
    "tbnw": "187",
    "usg": "__YR8-_e9dOy79Mn-MhzOlwnC0iRU",
    "docid": "__RUGjYwENWMCM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CkOet0xUUAA1YG3.jpg' /> | <img src='https://images-na.ssl-images-amazon.com/images/I/51M76UzfsAL.jpg' />


##### 46). 738805406458249216
https://twitter.com/paprbckparadise/status/738805406458249216
```js{
  "id": "738805406458249216",
  "in": "http://pbs.twimg.com/media/CkDDmhEUYAIOyPd.jpg",
  "result": {
    "imgurl": "http://d28hgpri8am2if.cloudfront.net/book_images/cvr9781481401951_9781481401951_hr.jpg",
    "imgrefurl": "http://www.simonandschuster.ca/books/The-Ghost-of-Craven-Cove/Carolyn-Keene/Nancy-Drew/9781481401951",
    "h": "933",
    "w": "624",
    "tbnid": "5_uAadnzTwjwaM",
    "tbnh": "275",
    "tbnw": "184",
    "usg": "__jpQGJ8dd2xGJs8mGFroy_zjHodM",
    "docid": "7qYzOisY0SUmoM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CkDDmhEUYAIOyPd.jpg' /> | <img src='http://d28hgpri8am2if.cloudfront.net/book_images/cvr9781481401951_9781481401951_hr.jpg' />


##### 47). 738460325381431297
https://twitter.com/paprbckparadise/status/738460325381431297
```js{
  "id": "738460325381431297",
  "in": "http://pbs.twimg.com/media/Cj-JwLEVAAE1LuO.jpg",
  "result": {
    "imgurl": "http://nancydrew.info/Images/ndbad4.jpg",
    "imgrefurl": "http://nancydrew.info/nd1.htm",
    "h": "275",
    "w": "185",
    "tbnid": "p0mZx-xQPh_twM",
    "tbnh": "220",
    "tbnw": "148",
    "usg": "__OdL6-zJSauVs16FikaUjQOY8p44",
    "docid": "jmBIOundfghQjM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/Cj-JwLEVAAE1LuO.jpg' /> | <img src='http://nancydrew.info/Images/ndbad4.jpg' />


##### 48). 738154814836637697
https://twitter.com/paprbckparadise/status/738154814836637697
```js{
  "id": "738154814836637697",
  "in": "http://pbs.twimg.com/media/Cj5z5DmVEAAir8F.jpg",
  "result": {
    "imgurl": "http://vignette2.wikia.nocookie.net/goosebumps/images/e/ea/The_Curse_of_Camp_Cold_Lake_(Cover).jpg/revision/latest%3Fcb%3D20160704022245",
    "imgrefurl": "http://goosebumps.wikia.com/wiki/The_Curse_of_Camp_Cold_Lake",
    "h": "1767",
    "w": "1198",
    "tbnid": "JMjq78e4IW4p8M",
    "tbnh": "273",
    "tbnw": "185",
    "usg": "__9ptUwcTII9TmN1HhWx2dt9vpC_4",
    "docid": "OZxtQlufoPOusM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/Cj5z5DmVEAAir8F.jpg' /> | <img src='http://vignette2.wikia.nocookie.net/goosebumps/images/e/ea/The_Curse_of_Camp_Cold_Lake_(Cover).jpg/revision/latest?cb=20160704022245' />


##### 49). 737771638280724480
https://twitter.com/paprbckparadise/status/737771638280724480
```js{
  "id": "737771638280724480",
  "in": "http://pbs.twimg.com/media/Cj0XZTQUgAEOiUK.jpg",
  "result": {
    "imgurl": "https://images-na.ssl-images-amazon.com/images/I/51B3S9KD07L.jpg",
    "imgrefurl": "https://www.amazon.com/Dangerous-Diamond-Clue-Book-14/dp/059062377X",
    "h": "475",
    "w": "322",
    "tbnid": "69Mw4oxPkW7HEM",
    "tbnh": "273",
    "tbnw": "185",
    "usg": "__WZfAnnGxq1QBsR5Q6HMLwEu2h_c",
    "docid": "TcQJI7l8oSJduM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/Cj0XZTQUgAEOiUK.jpg' /> | <img src='https://images-na.ssl-images-amazon.com/images/I/51B3S9KD07L.jpg' />


##### 50). 737396672993497089
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
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CjvCXb1UUAA72p2.jpg' /> | <img src='https://shechive.files.wordpress.com/2015/12/book-fair-day-was-the-best-day-11.jpg?quality=80&strip=info&w=600' />


##### 51). 737024090033131520
https://twitter.com/paprbckparadise/status/737024090033131520
```js{
  "id": "737024090033131520",
  "in": "http://pbs.twimg.com/media/CjpvgRMVAAAIT8-.jpg",
  "result": {
    "imgurl": "https://images-na.ssl-images-amazon.com/images/I/51UT18gB%252B%252BL.jpg",
    "imgrefurl": "https://www.amazon.com/Missing-Chums-Hardy-Boys-Book/dp/0448089041",
    "h": "500",
    "w": "312",
    "tbnid": "jhbz_mfZ-YDisM",
    "tbnh": "284",
    "tbnw": "177",
    "usg": "__I1pLYnNsNjK4kIAIzxUW5MX_D8A",
    "docid": "58escEFYo62oQM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CjpvgRMVAAAIT8-.jpg' /> | <img src='https://images-na.ssl-images-amazon.com/images/I/51UT18gB%2B%2BL.jpg' />


##### 52). 736280814107824128
https://twitter.com/paprbckparadise/status/736280814107824128
```js{
  "id": "736280814107824128",
  "in": "http://pbs.twimg.com/media/CjfLf7BUUAEDKic.png",
  "result": {
    "imgurl": "http://g.christianbook.com/dg/product/cbd/w163/71601.jpg",
    "imgrefurl": "http://www.christianbook.com/the-black-stallion-walter-farley/9780679813439/pd/813438",
    "h": "245",
    "w": "163",
    "tbnid": "c7uZBiMoyYcBEM",
    "tbnh": "196",
    "tbnw": "130",
    "usg": "__w8RwWzIU_9slE_DXL7SHcmwidW0",
    "docid": "mSMEgjHWnGoxHM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CjfLf7BUUAEDKic.png' /> | <img src='http://g.christianbook.com/dg/product/cbd/w163/71601.jpg' />


##### 53). 735915344749985792
https://twitter.com/paprbckparadise/status/735915344749985792
```js{
  "id": "735915344749985792",
  "in": "http://pbs.twimg.com/media/CjZ_Gz1UoAA6CLg.jpg",
  "result": {
    "imgurl": "https://images-na.ssl-images-amazon.com/images/I/512A1JR2QDL.jpg",
    "imgrefurl": "https://www.amazon.com/Karens-Ducklings-Baby-Sitters-Little-Sister/dp/0590448307",
    "h": "475",
    "w": "327",
    "tbnid": "ok1CtupFjS6GkM",
    "tbnh": "271",
    "tbnw": "186",
    "usg": "__lpgM9xd_ULyzcA5uelIbIEog4PU",
    "docid": "aPgEoZwYvbxM_M"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CjZ_Gz1UoAA6CLg.jpg' /> | <img src='https://images-na.ssl-images-amazon.com/images/I/512A1JR2QDL.jpg' />


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
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CjU-l6iUYAAq5Z8.jpg' /> | <img src='http://www.oversixty.co.nz/media/8332/hardy-boys-3.jpg' />


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
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CjQIF-fUkAAXNUt.jpg' /> | <img src='http://d2arxad8u2l0g7.cloudfront.net/books/1311811772s/2785169.jpg' />


##### 56). 734838823285202944
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
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CjKsBBGUkAAluGt.jpg' /> | <img src='https://chelleshockk.files.wordpress.com/2011/07/on-the-edge1.jpg' />


##### 57). 734106689952059392
https://twitter.com/paprbckparadise/status/734106689952059392
```js{
  "id": "734106689952059392",
  "in": "http://pbs.twimg.com/media/CjASJPOVEAEoVB2.jpg",
  "result": {
    "imgurl": "https://img.fantasticfiction.com/images/n6/n32203.jpg",
    "imgrefurl": "https://www.fantasticfiction.com/p/edward-packard/space-vampire.htm",
    "h": "334",
    "w": "199",
    "tbnid": "xyK0OD-utTn4jM",
    "tbnh": "267",
    "tbnw": "159",
    "usg": "__AcqA_oOn3iQ3lj23J7bBlgCTaIM",
    "docid": "NMIjnwHPONkvSM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CjASJPOVEAEoVB2.jpg' /> | <img src='https://img.fantasticfiction.com/images/n6/n32203.jpg' />


##### 58). 733749467590107136
https://twitter.com/paprbckparadise/status/733749467590107136
```js{
  "id": "733749467590107136",
  "in": "http://pbs.twimg.com/media/Ci7NQJkUoAUFl-c.jpg",
  "result": {
    "imgurl": "https://90sflashback.files.wordpress.com/2015/07/app.jpg",
    "imgrefurl": "https://90sflashback.wordpress.com/2015/07/28/svt-35-amys-pen-pal-p-s-i-hate-you",
    "h": "2271",
    "w": "1500",
    "tbnid": "80TGfZIoLzaJJM",
    "tbnh": "276",
    "tbnw": "182",
    "usg": "__64bC51dnAF597DElBKTB6BXwxGA",
    "docid": "z4rLGXSUp8HWxM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/Ci7NQJkUoAUFl-c.jpg' /> | <img src='https://90sflashback.files.wordpress.com/2015/07/app.jpg' />


##### 59). 733376307728416768
https://twitter.com/paprbckparadise/status/733376307728416768
```js{
  "id": "733376307728416768",
  "in": "http://pbs.twimg.com/media/Ci153XvWUAA-hCT.jpg",
  "result": {
    "imgurl": "https://followmetocertaindoom.files.wordpress.com/2016/08/sea-you-in-hell.jpg%3Fw%3D225%26h%3D357%26crop%3D1",
    "imgrefurl": "https://followmetocertaindoom.com/2016/08/22/paperback-paradise",
    "h": "357",
    "w": "225",
    "tbnid": "TVx5ZnrCsJH_aM",
    "tbnh": "283",
    "tbnw": "178",
    "usg": "__vlsDtAWU__JmEd2PtM3_v1Tc9YM",
    "docid": "FpLT6gbQ9jc0nM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/Ci153XvWUAA-hCT.jpg' /> | <img src='https://followmetocertaindoom.files.wordpress.com/2016/08/sea-you-in-hell.jpg?w=225&h=357&crop=1' />


##### 60). 733063541595344898
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
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CixdaArUkAAGl_W.jpg' /> | <img src='http://www.series-books.com/nancydrew/pbs/files42.jpg' />


##### 61). 732669361970761728
https://twitter.com/paprbckparadise/status/732669361970761728
```js{
  "id": "732669361970761728",
  "in": "http://pbs.twimg.com/media/Cir25wGUgAA4mz3.jpg",
  "result": {
    "imgurl": "http://www.pmslweb.com/the-blog/wp-content/uploads/2016/06/5-please-stop-petting-me-funny-book-cover.jpg",
    "imgrefurl": "http://www.pmslweb.com/the-blog/nutcase-monday-a-new-week-compilation-of-funny-pics/5-please-stop-petting-me-funny-book-cover",
    "h": "677",
    "w": "450",
    "tbnid": "AKKE5Iz0yGPB0M",
    "tbnh": "275",
    "tbnw": "183",
    "usg": "__UnK453c81wte_V9lPC1KISiOXF8",
    "docid": "NvsRihygPZkHSM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/Cir25wGUgAA4mz3.jpg' /> | <img src='http://www.pmslweb.com/the-blog/wp-content/uploads/2016/06/5-please-stop-petting-me-funny-book-cover.jpg' />


##### 62). 732379201458708480
https://twitter.com/paprbckparadise/status/732379201458708480
```js{
  "id": "732379201458708480",
  "in": "http://pbs.twimg.com/media/CinvALtVAAEauFW.jpg",
  "result": {
    "imgurl": "https://img.fantasticfiction.com/images/n66/n332651.jpg",
    "imgrefurl": "https://www.fantasticfiction.com/s/devra-newberger-speregen/phone-call-from-flamingo.htm",
    "h": "472",
    "w": "316",
    "tbnid": "EBPKS30MtG0SOM",
    "tbnh": "274",
    "tbnw": "184",
    "usg": "__3alXbW3nXEi6xiAhYELOhj5zcfA",
    "docid": "PX7EWxEdYjSLDM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CinvALtVAAEauFW.jpg' /> | <img src='https://img.fantasticfiction.com/images/n66/n332651.jpg' />


##### 63). 731629383333478400
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
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CidFDBlU4AEEkI9.jpg' /> | <img src='https://cliqueypizza.files.wordpress.com/2012/05/thenewbobbseytwinslauraleehope_thumb1.jpg?w=251&h=368' />


##### 64). 731277454103318528
https://twitter.com/paprbckparadise/status/731277454103318528
```js{
  "id": "731277454103318528",
  "in": "http://pbs.twimg.com/media/CiYE-CuVAAEY6bU.png",
  "result": {
    "imgurl": "https://images-na.ssl-images-amazon.com/images/P/1932425861.jpg",
    "imgrefurl": "https://www.lexile.com/book/details/9781561643516",
    "h": "500",
    "w": "353",
    "tbnid": "CnFqinjps-Wq9M",
    "tbnh": "267",
    "tbnw": "189",
    "usg": "__dfPyEvCVePCcRHsSYyN8TRmGfm4",
    "docid": "QA8a5jj9iPPr5M"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CiYE-CuVAAEY6bU.png' /> | <img src='https://images-na.ssl-images-amazon.com/images/P/1932425861.jpg' />


##### 65). 730936310559428613
https://twitter.com/paprbckparadise/status/730936310559428613
```js{
  "id": "730936310559428613",
  "in": "http://pbs.twimg.com/media/CiTOs2mUoAAJI7q.jpg",
  "result": {
    "imgurl": "https://images-na.ssl-images-amazon.com/images/I/21J0R9zOSWL.jpg",
    "imgrefurl": "https://www.amazon.com/Treasure-Oatmeal-Box-Ken-Gire/dp/0891093672",
    "h": "160",
    "w": "120",
    "tbnid": "C5QFIlvuRH0QJM",
    "tbnh": "128",
    "tbnw": "96",
    "usg": "__Gew2z1i9YRgN0j6tjctfUHGAxtM",
    "docid": "8gdChmgaSSGQuM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CiTOs2mUoAAJI7q.jpg' /> | <img src='https://images-na.ssl-images-amazon.com/images/I/21J0R9zOSWL.jpg' />


##### 66). 730483391817121792
https://twitter.com/paprbckparadise/status/730483391817121792
```js{
  "id": "730483391817121792",
  "in": "http://pbs.twimg.com/media/CiMyxiSUoAE0ns_.jpg",
  "result": {
    "imgurl": "https://upload.wikimedia.org/wikipedia/commons/a/aa/Martini_bologna_mozart_1777.jpg",
    "imgrefurl": "https://en.wikipedia.org/wiki/Ghostwriter",
    "h": "3460",
    "w": "3003",
    "tbnid": "1EykatEezPVszM",
    "tbnh": "241",
    "tbnw": "209",
    "usg": "__4MBoQzIMy6T7n7_x46oWLH8B73A",
    "docid": "HOj751U_0I9jvM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CiMyxiSUoAE0ns_.jpg' /> | <img src='https://upload.wikimedia.org/wikipedia/commons/a/aa/Martini_bologna_mozart_1777.jpg' />


##### 67). 729706980403761152
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
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CiBwoaHWwAAu7A8.jpg' /> | <img src='https://anastasiagarcia.files.wordpress.com/2013/09/vampire-breath.jpg' />


##### 68). 729360937422073856
https://twitter.com/paprbckparadise/status/729360937422073856
```js{
  "id": "729360937422073856",
  "in": "http://pbs.twimg.com/media/Ch816FnXIAAZS-E.jpg",
  "result": {
    "imgurl": "http://pictures.abebooks.com/DMURRILLS/12923635843.jpg",
    "imgrefurl": "http://www.abebooks.com/book-search/title/clue-diary/author/carolyn-keene/first-edition",
    "h": "1500",
    "w": "2340",
    "tbnid": "y9P1sx9mWPV48M",
    "tbnh": "180",
    "tbnw": "281",
    "usg": "__TRE7jXV5qlSaqZbEATxdFxMVe9A",
    "docid": "210UjV3-sz4gEM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/Ch816FnXIAAZS-E.jpg' /> | <img src='http://pictures.abebooks.com/DMURRILLS/12923635843.jpg' />


##### 69). 728965392899686400
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
img | result
--- | ------
<img src='http://pbs.twimg.com/media/Ch3OKXwW0AEbVdN.jpg' /> | <img src='https://images-na.ssl-images-amazon.com/images/I/51LltWT4QGL.jpg' />


##### 70). 728631383225151488
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
img | result
--- | ------
<img src='http://pbs.twimg.com/media/ChyeYcjWEAEJdbw.jpg' /> | <img src='http://ewoodruff.com/wp-content/uploads/awfully_short.jpg' />


##### 71). 728313291601252352
https://twitter.com/paprbckparadise/status/728313291601252352
```js{
  "id": "728313291601252352",
  "in": "http://pbs.twimg.com/media/Cht9FFOWkAIBzyM.jpg",
  "result": {
    "imgurl": "https://images-na.ssl-images-amazon.com/images/I/41-Oc4ctrSL.jpg",
    "imgrefurl": "https://www.amazon.com/Mystery-Hidden-Boxcar-Children-Mysteries/dp/0807554049",
    "h": "500",
    "w": "375",
    "tbnid": "wamo1j_O5Q6yvM",
    "tbnh": "259",
    "tbnw": "194",
    "usg": "__rpdb6ni175D2GiHQxjldarPiYa8",
    "docid": "W1d6s7KpcEXiCM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/Cht9FFOWkAIBzyM.jpg' /> | <img src='https://images-na.ssl-images-amazon.com/images/I/41-Oc4ctrSL.jpg' />


##### 72). 727910483517448195
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
img | result
--- | ------
<img src='http://pbs.twimg.com/media/ChoOuhtWUAIFqpM.jpg' /> | <img src='http://www.auctionexpress.com/bmz_cache/2/202cbb4534a30340a1925677d0046e36.image.81x100.jpg' />


##### 73). 727540314034970625
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
img | result
--- | ------
<img src='http://pbs.twimg.com/media/Chi-D3ZUkAA0yr4.jpg' /> | <img src='https://images-na.ssl-images-amazon.com/images/I/51lz7WZLdvL.jpg' />


##### 74). 727237251948679169
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
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CheqbVEVEAAGXJH.jpg' /> | <img src='http://d2arxad8u2l0g7.cloudfront.net/books/1330774994l/290404.jpg' />


##### 75). 726898376504025088
https://twitter.com/paprbckparadise/status/726898376504025088
```js{
  "id": "726898376504025088",
  "in": "http://pbs.twimg.com/media/ChZ2OLbUgAADLhr.jpg",
  "result": {
    "imgurl": "http://cloudfront.sportsgrid.com/wp-content/uploads/2016/07/Front01.jpg",
    "imgrefurl": "http://www.sportsgrid.com/social-media/young-readers-books-with-perverted-titles-its-the-return-of-paperback-paradise",
    "h": "420",
    "w": "728",
    "tbnid": "6XsRMN7MxvbhcM",
    "tbnh": "170",
    "tbnw": "296",
    "usg": "__K5dsh6RKBSG9WtBoUuWycenkng0",
    "docid": "cfdG9gRQ4nbQJM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/ChZ2OLbUgAADLhr.jpg' /> | <img src='http://cloudfront.sportsgrid.com/wp-content/uploads/2016/07/Front01.jpg' />


##### 76). 726466487918039040
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
img | result
--- | ------
<img src='http://pbs.twimg.com/media/ChTta7ZU4AAi53n.jpg' /> | <img src='http://www.newworldzorro.com/seriesbooks/nancydrew/pc/drewpc2b.jpg' />


##### 77). 726098532973703168
https://twitter.com/paprbckparadise/status/726098532973703168
```js{
  "id": "726098532973703168",
  "in": "http://pbs.twimg.com/media/ChOexIiUoAAZRd0.jpg",
  "result": {
    "imgurl": "http://seriesbookart.weebly.com/uploads/2/4/0/8/24088442/2484291_orig.jpg",
    "imgrefurl": "http://seriesbookart.weebly.com/the-nancy-drew-files-1-75.html",
    "h": "600",
    "w": "372",
    "tbnid": "dBEMBENu1ffvjM",
    "tbnh": "285",
    "tbnw": "177",
    "usg": "__VimKoGrtQbGgGDioJKpbDRNhST8",
    "docid": "xRvh-VOZqDneQM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/ChOexIiUoAAZRd0.jpg' /> | <img src='http://seriesbookart.weebly.com/uploads/2/4/0/8/24088442/2484291_orig.jpg' />


##### 78). 725733343342415872
https://twitter.com/paprbckparadise/status/725733343342415872
```js{
  "id": "725733343342415872",
  "in": "http://pbs.twimg.com/media/ChJSoQnUUAA1RJo.jpg",
  "result": {
    "imgurl": "http://pictures.abebooks.com/isbn/9781616510879-us.jpg",
    "imgrefurl": "http://www.abebooks.com/book-search/title/moby-dick/author/herman-melville/used",
    "h": "500",
    "w": "315",
    "tbnid": "LaPNCj7mOP3nsM",
    "tbnh": "283",
    "tbnw": "178",
    "usg": "__oX8jfIYn_9nCAMTPwr-Z1GRAz2I",
    "docid": "2bgKl2cavqQLkM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/ChJSoQnUUAA1RJo.jpg' /> | <img src='http://pictures.abebooks.com/isbn/9781616510879-us.jpg' />


##### 79). 725367520971120640
https://twitter.com/paprbckparadise/status/725367520971120640
```js{
  "id": "725367520971120640",
  "in": "http://pbs.twimg.com/media/ChEF6qAU0AEr6gh.jpg",
  "result": {
    "imgurl": "https://images-na.ssl-images-amazon.com/images/I/811-zJ6JHmL.jpg",
    "imgrefurl": "https://www.amazon.com/Haunted-Fort-Hardy-Boys-Book/dp/0448089440",
    "h": "1812",
    "w": "1152",
    "tbnid": "fW2CdQo_MzjHHM",
    "tbnh": "282",
    "tbnw": "179",
    "usg": "__WAhOORePQklxr3-2c2XxotyqKLk",
    "docid": "NuJGUJUi-uYedM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/ChEF6qAU0AEr6gh.jpg' /> | <img src='https://images-na.ssl-images-amazon.com/images/I/811-zJ6JHmL.jpg' />


##### 80). 725070441166045189
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
img | result
--- | ------
<img src='http://pbs.twimg.com/media/Cg_3uUXUcAARaHM.png' /> | <img src='http://www.oddee.com/_media/imgs/articles2/a97274_b6.jpg' />


##### 81). 724342509137104896
https://twitter.com/paprbckparadise/status/724342509137104896
```js{
  "id": "724342509137104896",
  "in": "http://pbs.twimg.com/media/Cg1hrHkUYAAYvht.jpg",
  "result": {
    "imgurl": "http://www.hardyboysonline.net/thumbs/hb-047.jpg",
    "imgrefurl": "http://www.hardyboysonline.net/content.php"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/Cg1hrHkUYAAYvht.jpg' /> | <img src='http://www.hardyboysonline.net/thumbs/hb-047.jpg' />


##### 82). 723647872307064833
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
img | result
--- | ------
<img src='http://pbs.twimg.com/media/Cgrp57LU8AEE13D.jpg' /> | <img src='https://images-na.ssl-images-amazon.com/images/I/51QfnK1zARL.jpg' />


##### 83). 723195263758688257
https://twitter.com/paprbckparadise/status/723195263758688257
```js{
  "id": "723195263758688257",
  "in": "http://pbs.twimg.com/media/CglOQpNU4AAaijc.jpg",
  "result": {
    "imgurl": "https://beanstack.s3.amazonaws.com/book_images/8433/large/297249.jpg%3F1452101788",
    "imgrefurl": "https://montgomerycountymd.beanstack.com/books/8942",
    "h": "650",
    "w": "442",
    "tbnid": "9RshONxY-KDx2M",
    "tbnh": "272",
    "tbnw": "185",
    "usg": "__XIi0YE_mItL2aRs4J80Kybx6fPA",
    "docid": "6zZDlQCdcaDYnM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CglOQpNU4AAaijc.jpg' /> | <img src='https://beanstack.s3.amazonaws.com/book_images/8433/large/297249.jpg?1452101788' />


##### 84). 722870970130653185
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
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CggnURlUMAAQjbo.jpg' /> | <img src='https://cliqueypizza.files.wordpress.com/2009/03/fifth-grade-stars-80s-teen-young-adult-book-series.jpg' />


##### 85). 722833098694479873
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
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CggE33ZUYAAuMLw.jpg' /> | <img src='https://images-na.ssl-images-amazon.com/images/I/41Sir1QkH-L.jpg' />


##### 86). 721423358580002816
https://twitter.com/paprbckparadise/status/721423358580002816
```js{
  "id": "721423358580002816",
  "in": "http://pbs.twimg.com/media/CgMCuMeUAAA4g8N.jpg",
  "result": {
    "imgurl": "https://huskiesinwonderland.files.wordpress.com/2013/02/the-boxcar-children.jpg",
    "imgrefurl": "http://millionbookmill.blogspot.com/2015_10_01_archive.html",
    "h": "400",
    "w": "278",
    "tbnid": "VW-gXP88UKdbqM",
    "tbnh": "269",
    "tbnw": "187",
    "usg": "__na-gMSrpDC6MlNNxvjkgHTncPjI",
    "docid": "EPBzIneOEjIHbM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CgMCuMeUAAA4g8N.jpg' /> | <img src='https://huskiesinwonderland.files.wordpress.com/2013/02/the-boxcar-children.jpg' />


##### 87). 721057679574065158
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
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CgG2I3-UUAA8uR6.jpg' /> | <img src='https://images-na.ssl-images-amazon.com/images/I/6109%2BCCZm6L.jpg' />


##### 88). 720638464102764544
https://twitter.com/paprbckparadise/status/720638464102764544
```js{
  "id": "720638464102764544",
  "in": "http://pbs.twimg.com/media/CgA43UoUAAAWhOq.jpg",
  "result": {
    "imgurl": "http://d.gr-assets.com/books/1202225756m/1961505.jpg",
    "imgrefurl": "http://www.goodreads.com/book/show/1961505.The_Case_of_the_Runaway_Money",
    "h": "144",
    "w": "98",
    "tbnid": "Y-L_6QpVwRxWQM",
    "tbnh": "115",
    "tbnw": "78",
    "usg": "__Hmd_Kuu3CGpwWTQO7fUgkASQqPw",
    "docid": "_B21bY8YZx6gdM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CgA43UoUAAAWhOq.jpg' /> | <img src='http://d.gr-assets.com/books/1202225756m/1961505.jpg' />


##### 89). 719937833100685312
https://twitter.com/paprbckparadise/status/719937833100685312
```js{
  "id": "719937833100685312",
  "in": "http://pbs.twimg.com/media/Cf27pNcUEAAejZg.jpg",
  "result": {
    "imgurl": "https://i.ebayimg.com/00/s/MTAyNFg3MzQ%3D/z/JcoAAOxy7vJTeC8M/%24_75.JPG",
    "imgrefurl": "http://www.gumtree.com.au/s-ad/mundaring/children-s-books/paul-jennings-books-x7-unreal-unseen-uncanny-undone/1119267299",
    "h": "325",
    "w": "233",
    "tbnid": "hApWhV7COES1CM",
    "tbnh": "260",
    "tbnw": "186",
    "usg": "__L2Z9QjUITY2J9vG6CmxCBcegdFM",
    "docid": "Y6e9qaPHnHTgvM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/Cf27pNcUEAAejZg.jpg' /> | <img src='https://i.ebayimg.com/00/s/MTAyNFg3MzQ=/z/JcoAAOxy7vJTeC8M/$_75.JPG' />


##### 90). 719577764253138945
https://twitter.com/paprbckparadise/status/719577764253138945
```js{
  "id": "719577764253138945",
  "in": "http://pbs.twimg.com/media/Cfx0KcpUsAEbObC.jpg",
  "result": {
    "imgurl": "http://images.contentful.com/7h71s48744nc/KjYIEoErWW4AVPB4G59LLQ/47bd814095a5db3b4abb6f03517f9f30/heart-full-of-hope-cover-image",
    "imgrefurl": "http://www.pluggedin.com/book-reviews/heart-full-of-hope",
    "h": "480",
    "w": "336",
    "tbnid": "o1lEXhV_CCn7UM",
    "tbnh": "268",
    "tbnw": "188",
    "usg": "__NS82vZf1-jHH0-tLBC-xeSBomP8",
    "docid": "uJusxm6w9f6OEM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/Cfx0KcpUsAEbObC.jpg' /> | <img src='http://images.contentful.com/7h71s48744nc/KjYIEoErWW4AVPB4G59LLQ/47bd814095a5db3b4abb6f03517f9f30/heart-full-of-hope-cover-image' />


##### 91). 719223403626909697
https://twitter.com/paprbckparadise/status/719223403626909697
```js{
  "id": "719223403626909697",
  "in": "http://pbs.twimg.com/media/Cfsx39uUYAA6_u9.jpg",
  "result": {
    "imgurl": "http://d2arxad8u2l0g7.cloudfront.net/books/1465103095m/645911.jpg",
    "imgrefurl": "http://www.goodreads.com/book/show/1346421.Mysteriously_Yours",
    "h": "143",
    "w": "98",
    "tbnid": "yXuxtvNZpIEuFM",
    "tbnh": "114",
    "tbnw": "78",
    "usg": "__jSmEjd3o2gL_kL2nOxFtg5PGOhs",
    "docid": "BHEv7SKVZiJuKM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/Cfsx39uUYAA6_u9.jpg' /> | <img src='http://d2arxad8u2l0g7.cloudfront.net/books/1465103095m/645911.jpg' />


##### 92). 718500670995701760
https://twitter.com/paprbckparadise/status/718500670995701760
```js{
  "id": "718500670995701760",
  "in": "http://pbs.twimg.com/media/CfigjZAUYAADv1v.jpg",
  "result": {
    "imgurl": "http://5.darkroom.shortlist.com/710/26322c370621bbc77ed1e50b4340c2e3:0fc35b2ada8dbdffed46685bffc0fde5/ferguson1.jpg",
    "imgrefurl": "http://www.shortlist.com/tag"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CfigjZAUYAADv1v.jpg' /> | <img src='http://5.darkroom.shortlist.com/710/26322c370621bbc77ed1e50b4340c2e3:0fc35b2ada8dbdffed46685bffc0fde5/ferguson1.jpg' />


##### 93). 718449143597772802
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
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CfhxsGFUkAASBlH.jpg' /> | <img src='https://cliqueypizza.files.wordpress.com/2012/05/thenewbobbseytwinslauraleehope_thumb1.jpg?w=251&h=368' />


##### 94). 717748045069180928
https://twitter.com/paprbckparadise/status/717748045069180928
```js{
  "id": "717748045069180928",
  "in": "http://pbs.twimg.com/media/CfX0CyoUYAABkaZ.jpg",
  "result": {
    "imgurl": "http://0.media.collegehumor.cvcdn.com/36/83/bd8d25281545ab9f0c5ff834a504b9aa.jpg",
    "imgrefurl": "http://www.collegehumor.com/post/7036577/14-honest-childrens-book-covers-according-to-twitter",
    "h": "884",
    "w": "600",
    "tbnid": "4yWUcgSfOQVLzM",
    "tbnh": "273",
    "tbnw": "185",
    "usg": "__Mc-wGKzFnls_esTcf29Yp42ArAs",
    "docid": "vJmqO81do_95AM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CfX0CyoUYAABkaZ.jpg' /> | <img src='http://0.media.collegehumor.cvcdn.com/36/83/bd8d25281545ab9f0c5ff834a504b9aa.jpg' />


##### 95). 717426667791069184
https://twitter.com/paprbckparadise/status/717426667791069184
```js{
  "id": "717426667791069184",
  "in": "http://pbs.twimg.com/media/CfTPwLVUMAAyIJ4.jpg",
  "result": {
    "imgurl": "http://grouchymuffin.com/wp-content/uploads/2014/04/toddspence.jpg",
    "imgrefurl": "http://grouchymuffin.com/2016/04/07/paperback-to-the-future",
    "h": "969",
    "w": "640",
    "tbnid": "IRj6isXP1OLLvM",
    "tbnh": "276",
    "tbnw": "182",
    "usg": "__Kon957zBBr1fw7aR5a_pt1sm6Oc",
    "docid": "PURaaU-Ah02u4M"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CfTPwLVUMAAyIJ4.jpg' /> | <img src='http://grouchymuffin.com/wp-content/uploads/2014/04/toddspence.jpg' />


##### 96). 717385843065753600
https://twitter.com/paprbckparadise/status/717385843065753600
```js{
  "id": "717385843065753600",
  "in": "http://pbs.twimg.com/media/CfSqn3nUMAAFLbg.jpg",
  "result": {
    "imgurl": "http://www.newworldzorro.com/seriesbooks/nancydrew/pc/drewpc40.jpg",
    "imgrefurl": "http://www.series-books.com/nancydrew/pc1-56.html",
    "h": "927",
    "w": "609",
    "tbnid": "0_gUkKcN9v2XmM",
    "tbnh": "277",
    "tbnw": "182",
    "usg": "__wEnuA9ImV5JDvvX0h6EAD4yYw40",
    "docid": "P9rYWe8AhGaN5M"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CfSqn3nUMAAFLbg.jpg' /> | <img src='http://www.newworldzorro.com/seriesbooks/nancydrew/pc/drewpc40.jpg' />


##### 97). 717016641947639809
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
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CfNa1dwUIAA2_RT.png' /> | <img src='http://www.series-books.com/nancydrew/pbs/files8.jpg' />


##### 98). 716638876920455170
https://twitter.com/paprbckparadise/status/716638876920455170
```js{
  "id": "716638876920455170",
  "in": "http://pbs.twimg.com/media/CfIDQszUkAA9Kh0.jpg",
  "result": {
    "imgurl": "http://d.gr-assets.com/books/1465358075l/5059187.jpg",
    "imgrefurl": "http://www.goodreads.com/book/show/5059187-what-is-the-teacher-s-toupee-doing-in-the-fish-tank",
    "h": "469",
    "w": "318",
    "tbnid": "YuDfTX_LV7KU1M",
    "tbnh": "273",
    "tbnw": "185",
    "usg": "__vv9yotMfY7gXXBXT5wPWVjdq9yU",
    "docid": "KGJw9MoEyQtamM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CfIDQszUkAA9Kh0.jpg' /> | <img src='http://d.gr-assets.com/books/1465358075l/5059187.jpg' />


##### 99). 715947690421587969
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
img | result
--- | ------
<img src='http://pbs.twimg.com/media/Ce-OoW3UUAExyP-.jpg' /> | <img src='https://i.harperapps.com/covers/9780380712366/y648.png' />


##### 100). 715218786555547648
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
img | result
--- | ------
<img src='http://pbs.twimg.com/media/Cez3sidWwAAGSCt.jpg' /> | <img src='https://img1.etsystatic.com/067/1/7110130/il_fullxfull.793950477_rata.jpg' />


##### 101). 714844901905567744
https://twitter.com/paprbckparadise/status/714844901905567744
```js{
  "id": "714844901905567744",
  "in": "http://pbs.twimg.com/media/Ceujpj3WIAALvNy.jpg",
  "result": {
    "imgurl": "http://cf.broadsheet.ie/wp-content/uploads/2016/04/Screen-Shot-2016-04-11-at-12.56.31-e1460376424544.jpeg",
    "imgrefurl": "http://www.broadsheet.ie/tag/book",
    "h": "801",
    "w": "800",
    "tbnid": "qPXCcioqx_yGUM",
    "tbnh": "225",
    "tbnw": "224",
    "usg": "__9FupfF7qwq24qnji5CsHetXkYwI",
    "docid": "084tqisL2ekNhM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/Ceujpj3WIAALvNy.jpg' /> | <img src='http://cf.broadsheet.ie/wp-content/uploads/2016/04/Screen-Shot-2016-04-11-at-12.56.31-e1460376424544.jpeg' />


##### 102). 714476410765619201
https://twitter.com/paprbckparadise/status/714476410765619201
```js{
  "id": "714476410765619201",
  "in": "http://pbs.twimg.com/media/CepUgljXEAItKh3.jpg",
  "result": {
    "imgurl": "https://brobible.files.wordpress.com/2016/04/book.jpg%3Fquality%3D90%26w%3D638",
    "imgrefurl": "http://brobible.com/life/article/twitter-account-photoshops-childhood-book-covers",
    "h": "360",
    "w": "638",
    "tbnid": "LcSzDACn97Ro2M",
    "tbnh": "169",
    "tbnw": "299",
    "usg": "__E4A6ri42IOR0mvdZ0ZmmAyUrrw0",
    "docid": "H6Ah9R1i2QT7MM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CepUgljXEAItKh3.jpg' /> | <img src='https://brobible.files.wordpress.com/2016/04/book.jpg?quality=90&w=638' />


##### 103). 714161617978531840
https://twitter.com/paprbckparadise/status/714161617978531840
```js{
  "id": "714161617978531840",
  "in": "http://pbs.twimg.com/media/Cek2NN7WIAErU_C.jpg",
  "result": {
    "imgurl": "http://grouchymuffin.com/wp-content/uploads/2014/04/toddspence.jpg",
    "imgrefurl": "http://grouchymuffin.com/2016/04/07/paperback-to-the-future",
    "h": "969",
    "w": "640",
    "tbnid": "IRj6isXP1OLLvM",
    "tbnh": "276",
    "tbnw": "182",
    "usg": "__Kon957zBBr1fw7aR5a_pt1sm6Oc",
    "docid": "PURaaU-Ah02u4M"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/Cek2NN7WIAErU_C.jpg' /> | <img src='http://grouchymuffin.com/wp-content/uploads/2014/04/toddspence.jpg' />


##### 104). 713779634676957184
https://twitter.com/paprbckparadise/status/713779634676957184
```js{
  "id": "713779634676957184",
  "in": "http://pbs.twimg.com/media/Cefay3TXIAELxWy.jpg",
  "result": {
    "imgurl": "https://img.fantasticfiction.com/images/n66/n332740.jpg",
    "imgrefurl": "https://www.fantasticfiction.com/o/laura-oneil/major-league-trouble.htm",
    "h": "468",
    "w": "316",
    "tbnid": "X4F83qRmDrqIgM",
    "tbnh": "273",
    "tbnw": "184",
    "usg": "__xUELlCFuhsfKvxQub_Hew5mZPSM",
    "docid": "EWa7VP-B24mPOM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/Cefay3TXIAELxWy.jpg' /> | <img src='https://img.fantasticfiction.com/images/n66/n332740.jpg' />


##### 105). 712419926963654657
https://twitter.com/paprbckparadise/status/712419926963654657
```js{
  "id": "712419926963654657",
  "in": "http://pbs.twimg.com/media/CeMGJgzUkAA4wJP.jpg",
  "result": {
    "imgurl": "http://grouchymuffin.com/wp-content/uploads/2014/04/toddspence.jpg",
    "imgrefurl": "http://grouchymuffin.com/2016/04/07/paperback-to-the-future",
    "h": "969",
    "w": "640",
    "tbnid": "IRj6isXP1OLLvM",
    "tbnh": "276",
    "tbnw": "182",
    "usg": "__Kon957zBBr1fw7aR5a_pt1sm6Oc",
    "docid": "PURaaU-Ah02u4M"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CeMGJgzUkAA4wJP.jpg' /> | <img src='http://grouchymuffin.com/wp-content/uploads/2014/04/toddspence.jpg' />


##### 106). 712310942181122048
https://twitter.com/paprbckparadise/status/712310942181122048
```js{
  "id": "712310942181122048",
  "in": "http://pbs.twimg.com/media/CeKjBwMVIAARWUY.png",
  "result": {
    "imgurl": "http://nancydrew.info/Images/nd58a.jpg",
    "imgrefurl": "http://nancydrew.info/nddigests.htm",
    "h": "325",
    "w": "225",
    "tbnid": "WvpAUJti6xFr2M",
    "tbnh": "260",
    "tbnw": "180",
    "usg": "__WvQgS8HGJh0DNy9hzY1DkNnem5I",
    "docid": "u-auMHeH_EqfGM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CeKjBwMVIAARWUY.png' /> | <img src='http://nancydrew.info/Images/nd58a.jpg' />


##### 107). 712027796604723200
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
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CeGhghLUsAA6BNt.jpg' /> | <img src='https://img0.etsystatic.com/064/1/7110130/il_fullxfull.794196902_eau6.jpg' />


##### 108). 711939361089060866
https://twitter.com/paprbckparadise/status/711939361089060866
```js{
  "id": "711939361089060866",
  "in": "http://pbs.twimg.com/media/CeFRE5JUUAAlWpZ.jpg",
  "result": {
    "imgurl": "https://i.harperapps.com/covers/9780380707645/x500.png",
    "imgrefurl": "https://www.harpercollins.com/9780380724697/time-for-andrew",
    "h": "812",
    "w": "500",
    "tbnid": "K1Gxgg_9F7eDmM",
    "tbnh": "286",
    "tbnw": "176",
    "usg": "__HAdrsQUYJYGOS02H7uKCzupNxR4",
    "docid": "p1E5a2J5vdlAmM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CeFRE5JUUAAlWpZ.jpg' /> | <img src='https://i.harperapps.com/covers/9780380707645/x500.png' />


##### 109). 711241128251555840
https://twitter.com/paprbckparadise/status/711241128251555840
```js{
  "id": "711241128251555840",
  "in": "http://pbs.twimg.com/media/Cd7WCY8UIAACSYj.jpg",
  "result": {
    "imgurl": "http://www.pmslweb.com/the-blog/wp-content/uploads/2016/04/13-grandpa-voted-for-Trump-funny-book-cover.png",
    "imgrefurl": "http://www.pmslweb.com/the-blog/monday-comedy-club-the-internet-at-its-best-and-worst/13-grandpa-voted-for-trump-funny-book-cover",
    "h": "688",
    "w": "450",
    "tbnid": "4TqcMCvItdXiFM",
    "tbnh": "278",
    "tbnw": "181",
    "usg": "__TTblWjWRVWJEGt1HEMABiVS7gKQ",
    "docid": "MtjGkPe-1gPU9M"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/Cd7WCY8UIAACSYj.jpg' /> | <img src='http://www.pmslweb.com/the-blog/wp-content/uploads/2016/04/13-grandpa-voted-for-Trump-funny-book-cover.png' />


##### 110). 710916326378700800
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
img | result
--- | ------
<img src='http://pbs.twimg.com/media/Cd2uoayUAAAleD6.jpg' /> | <img src='https://img0.etsystatic.com/064/1/7110130/il_570xN.794196902_eau6.jpg' />


##### 111). 710504687061979136
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
img | result
--- | ------
<img src='http://pbs.twimg.com/media/Cdw4P3lUAAEkv6j.jpg' /> | <img src='http://thumbs2.ebaystatic.com/d/l225/m/mnDRwui8UyaqT2TOPT5n6pA.jpg' />


##### 112). 710203403029389313
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
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CdsmO08UUAA6taE.jpg' /> | <img src='http://kirstygreenwood.typepad.com/.a/6a010536b33b69970b01a511491b51970c-600wi' />


##### 113). 709911763374845952
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
img | result
--- | ------
<img src='http://pbs.twimg.com/media/Cdoc_LKVAAA044E.png' /> | <img src='https://images-na.ssl-images-amazon.com/images/I/51yzKajmr6L.jpg' />


##### 114). 709836379581128704
https://twitter.com/paprbckparadise/status/709836379581128704
```js{
  "id": "709836379581128704",
  "in": "http://pbs.twimg.com/media/CdnYbQjUkAEQWnQ.jpg",
  "result": {
    "imgurl": "https://90sflashback.files.wordpress.com/2015/11/ttgc.jpg",
    "imgrefurl": "https://90sflashback.wordpress.com/sitemap.xml",
    "h": "475",
    "w": "314",
    "tbnid": "6s6YLQng72WVZM",
    "tbnh": "276",
    "tbnw": "182",
    "usg": "__51FuRfprNTCb6j2dfnRNGEiitpQ",
    "docid": "5H7uGdbEpKh5CM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CdnYbQjUkAEQWnQ.jpg' /> | <img src='https://90sflashback.files.wordpress.com/2015/11/ttgc.jpg' />


##### 115). 709460919164674049
https://twitter.com/paprbckparadise/status/709460919164674049
```js{
  "id": "709460919164674049",
  "in": "http://pbs.twimg.com/media/CdiC8lWVAAEaspk.png",
  "result": {
    "imgurl": "http://www.bhpanthers.org/cms/lib7/NY26000220/Centricity/Domain/5/68.jpg",
    "imgrefurl": "http://www.bhpanthers.org/Page/1741",
    "h": "453",
    "w": "300",
    "tbnid": "aSi3_eYMWPVhLM",
    "tbnh": "276",
    "tbnw": "183",
    "usg": "__OcApfE3XPZ2mtNz7DTM6Y0CB9yw",
    "docid": "P74RWgVAQ3pp3M"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CdiC8lWVAAEaspk.png' /> | <img src='http://www.bhpanthers.org/cms/lib7/NY26000220/Centricity/Domain/5/68.jpg' />


##### 116). 709407230404112385
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
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CdhSHfKUUAQ49kJ.jpg' /> | <img src='http://kirstygreenwood.typepad.com/.a/6a010536b33b69970b01a511491b51970c-600wi' />


##### 117). 708700694845345793
https://twitter.com/paprbckparadise/status/708700694845345793
```js{
  "id": "708700694845345793",
  "in": "http://pbs.twimg.com/media/CdXPhtIUEAArlrx.jpg",
  "result": {
    "imgurl": "http://www.therooster.com/sites/default/files/userfiles/images/CdXPhtIUEAArlrx.jpg",
    "imgrefurl": "http://www.therooster.com/blog/some-literary-genius-photoshopping-our-favorite-childhood-books-masterpieces",
    "h": "500",
    "w": "345",
    "tbnid": "lZjZeSqWJKxD2M",
    "tbnh": "270",
    "tbnw": "186",
    "usg": "__V202pwOdFKGSPVx7BY01Q_owyoA",
    "docid": "kZ6ap5i5ARCTkM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CdXPhtIUEAArlrx.jpg' /> | <img src='http://www.therooster.com/sites/default/files/userfiles/images/CdXPhtIUEAArlrx.jpg' />


##### 118). 708473713558032384
https://twitter.com/paprbckparadise/status/708473713558032384
```js{
  "id": "708473713558032384",
  "in": "http://pbs.twimg.com/media/CdUBFp6UkAAp0Nr.jpg",
  "result": {
    "imgurl": "https://251d2191a60056d6ba74-1671eccf3a0275494885881efb0852a4.ssl.cf1.rackcdn.com/7800012_classic-comes-to-life-the-jungle-book_dfe79402_m.jpg%3Fbg%3D313D38",
    "imgrefurl": "http://www.notey.com/blogs/classic-books",
    "h": "349",
    "w": "620",
    "tbnid": "AbiH4wVPX-nd_M",
    "tbnh": "168",
    "tbnw": "299",
    "usg": "__kk3q4AjmBhGI9J30gwfo9ZxsKHs",
    "docid": "Rg3oUekRo3_lMM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CdUBFp6UkAAp0Nr.jpg' /> | <img src='https://251d2191a60056d6ba74-1671eccf3a0275494885881efb0852a4.ssl.cf1.rackcdn.com/7800012_classic-comes-to-life-the-jungle-book_dfe79402_m.jpg?bg=313D38' />


##### 119). 708381447032217601
https://twitter.com/paprbckparadise/status/708381447032217601
```js{
  "id": "708381447032217601",
  "in": "http://pbs.twimg.com/media/CdStLA7UIAEwvSQ.jpg",
  "result": {
    "imgurl": "http://6.darkroom.shortlist.com/315/bfbe895f6bd9dbc853a039544e608433:c4964ef0fe8406f818d6a1874f345922/covers.png",
    "imgrefurl": "http://www.shortlist.com/entertainment/books/40-coolest-sci-fi-book-covers",
    "h": "236",
    "w": "315",
    "tbnid": "bhNKHnGuDG5YzM",
    "tbnh": "188",
    "tbnw": "252",
    "usg": "__W45JK_6_B8vROSaFtpURrhfDlyI",
    "docid": "q9PCXTn3bP49hM"
  }
}```
img | result
--- | ------
<img src='http://pbs.twimg.com/media/CdStLA7UIAEwvSQ.jpg' /> | <img src='http://6.darkroom.shortlist.com/315/bfbe895f6bd9dbc853a039544e608433:c4964ef0fe8406f818d6a1874f345922/covers.png' />

Total: 147, failed: 28
