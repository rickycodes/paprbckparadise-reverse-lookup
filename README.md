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
In | out
--- | ---
<img src='http://pbs.twimg.com/media/Cq0vPF9VIAA4orD.png' /> | <img src='http://farm6.static.flickr.com/5135/5485289465_9db53b984b.jpg' />
<img src='http://pbs.twimg.com/media/Cqqg_9SUEAA1Y52.png' /> | <img src='http://d.gr-assets.com/books/1299729862l/1902527.jpg' />
<img src='http://pbs.twimg.com/media/CqgLZEqUIAAHNn5.png' /> | <img src='https://b.thumbs.redditmedia.com/Rp9z1Yg8UjY4oT4UR_omQ7eya0Abt3IqF1wTshMpEuM.jpg' />
<img src='http://pbs.twimg.com/media/CqLlwURUAAAvIh3.png' /> | <img src='http://www.fictiondb.com/covers/0141312351.jpg' />
<img src='http://pbs.twimg.com/media/Cp8O_1WVIAMihYo.png' /> | <img src='http://www.sharon-green.net/images/Jalav2.jpg' />
<img src='http://pbs.twimg.com/media/CpspMy2VYAAC7-J.png' /> | <img src='http://s.ecrater.com/stores/64590/4b46da90e3460_64590n.jpg' />
<img src='http://pbs.twimg.com/media/CpYH3pqVMAAc0OZ.jpg' /> | <img src='http://t1.gstatic.com/images?q=tbn:ANd9GcQorxSzz3n9_-_zgZt78ZjIV2Q_D4SmCu0KassjEVd0V6jGNLBu' />
<img src='http://pbs.twimg.com/media/CpIm8VFUkAA2L7i.png' /> | <img src='http://t1.gstatic.com/images?q=tbn:ANd9GcSAL9e13uR5KhBz4FhglRG9o9EeRo2-R92CzvdFz03ISP9TNIrK' />
<img src='http://pbs.twimg.com/media/CpDdnBsUIAEmEWv.jpg' /> | <img src='http://www.gwthomas.org/sskull.jpg' />
<img src='http://pbs.twimg.com/media/Co-TutlVIAA6HR4.jpg' /> | <img src='http://pictures.abebooks.com/isbn/9780380436460-us.jpg' />
<img src='http://pbs.twimg.com/media/CoaPh6kUMAIaCDG.jpg' /> | <img src='http://www.fictiondb.com/coversth/th_0373190360.jpg' />
<img src='http://pbs.twimg.com/media/CoVQFqzUMAEm88d.png' /> | <img src='http://www.fictiondb.com/covers/156597042X.jpg' />
<img src='http://pbs.twimg.com/media/CoPebvXUkAEeGD0.jpg' /> | <img src='http://www.historicalromancewriters.com/images/books/PR0373225598.jpg' />
<img src='http://pbs.twimg.com/media/Cn6p4xrVMAAdSEK.jpg' /> | <img src='http://d2arxad8u2l0g7.cloudfront.net/books/1373650358l/18190497.jpg' />
<img src='http://pbs.twimg.com/media/Cn14IN6VMAQ9Nvc.jpg' /> | <img src='http://www.louislamour.com/images/covers/large/hondo_hclp_f.jpg' />
<img src='http://pbs.twimg.com/media/CnwOKv3VMAAgwWl.jpg' /> | <img src='http://thumbs.ebaystatic.com/images/m/mzKusz02X0ZZt6GFzs1weRQ/s-l225.jpg' />
<img src='http://pbs.twimg.com/media/CnrTTyAVMAAkpo8.jpg' /> | <img src='http://img0064.psstatic.com/154189183_amazoncom-blazing-guns-slocum-37-9780872169906-jake-.jpg' />
<img src='http://pbs.twimg.com/media/CnbzjXIUMAUkUJj.jpg' /> | <img src='http://people.uncw.edu/smithms/Ace%20singles/s5N-series/47121-8.jpg' />
<img src='http://pbs.twimg.com/media/CnXSWqmUMAE5X3f.jpg' /> | <img src='https://upload.wikimedia.org/wikipedia/en/thumb/f/fa/The_Sermon!.jpg/220px-The_Sermon!.jpg' />
<img src='http://pbs.twimg.com/media/CnMXtEuUEAA2563.jpg' /> | <img src='http://t0.gstatic.com/images?q=tbn:ANd9GcTwBpn0jNtz5nsE9c450C9kkq_9yvfGwqU5_N9o5CfwQIMR6NCz' />
<img src='http://pbs.twimg.com/media/CnG4Zk8UsAA49AH.png' /> | <img src='https://image.tmdb.org/t/p/w342/tz2HEalpHl7JHm6DlxIP7mM6J2P.jpg' />
<img src='http://pbs.twimg.com/media/Cmt7QT2VUAAyrOe.png' /> | <img src='http://www.lwcurrey.com/pictures/146314.jpg' />
<img src='http://pbs.twimg.com/media/CmjbgfQUcAAkGzN.jpg' /> | <img src='http://www.fictiondb.com/coversth/th_0515154962.jpg' />
<img src='http://pbs.twimg.com/media/CmT48tAVUAAiPg5.jpg' /> | <img src='https://img.fantasticfiction.com/thumbs/x1/x5420.jpg' />
<img src='http://pbs.twimg.com/media/CmOUM3IUYAAXVpV.jpg' /> | <img src='https://d.gr-assets.com/books/1387750126l/363036.jpg' />
<img src='http://pbs.twimg.com/media/CmEvntqUgAAXJBs.png' /> | <img src='https://img1.etsystatic.com/115/0/10466290/il_340x270.922698829_9jrm.jpg' />
<img src='http://pbs.twimg.com/media/ClvhSEvVEAAjZLq.png' /> | <img src='http://www.series-books.com/svh/svh1.jpg' />
<img src='http://pbs.twimg.com/media/ClqmybGVYAAQZn6.jpg' /> | <img src='http://www.exodusbooks.com/images/item-large/28829.jpg' />
<img src='http://pbs.twimg.com/media/Cll_FyxUkAEilvZ.png' /> | <img src='http://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1377912916i/1753372._UY200_.jpg' />
<img src='http://pbs.twimg.com/media/Clg3wvRUYAQGR3Z.png' /> | <img src='http://www.eonline.com/resize/600/315//eol_images/Entire_Site/201634/rs_300x300-160404103027-600.sweet-valley-high.cm.4416.jpg' />
<img src='http://pbs.twimg.com/media/Clar7AhVAAADnP3.jpg' /> | <img src='https://images-na.ssl-images-amazon.com/images/I/41nNBCStx6L.jpg' />
<img src='http://pbs.twimg.com/media/ClLRKAzUgAABqNi.jpg' /> | <img src='http://www.hardyboysonline.net/thumbs/hb-069a.jpg' />
<img src='http://pbs.twimg.com/media/ClGSd81UoAAjz5y.jpg' /> | <img src='https://images-na.ssl-images-amazon.com/images/I/41N1CNiDLUL._AC_UL320_SR240,320_.jpg' />
<img src='http://pbs.twimg.com/media/ClA8d6bUkAA1WlU.png' /> | <img src='http://www.exodusbooks.com/images/item-large/23714.jpg' />
<img src='http://pbs.twimg.com/media/Ck8PHbvUYAA-Jjp.jpg' /> | <img src='https://i.ytimg.com/vi/LMr01iR5URQ/maxresdefault.jpg' />
<img src='http://pbs.twimg.com/media/Ck3WNYWUgAAyl-C.jpg' /> | <img src='http://t1.gstatic.com/images?q=tbn:ANd9GcR3EAI-NC_RRbKqw_QiYxUoee0lldj8lBMQ1Wk0qOnqOxn-2COs' />
<img src='http://pbs.twimg.com/media/CknbCsaUYAA1hXB.png' /> | <img src='http://farm9.staticflickr.com/8429/7725680930_357643912e_b.jpg' />
<img src='http://pbs.twimg.com/media/Ckivo2HVAAAqAb_.jpg' /> | <img src='http://product-images.highwire.com/847113/1125215.jpg' />
<img src='http://pbs.twimg.com/media/Ckd37NzUoAAhl_k.jpg' /> | <img src='http://d2arxad8u2l0g7.cloudfront.net/books/1377392739l/2720055.jpg' />
<img src='http://pbs.twimg.com/media/CkTZ9PRUYAAJB-o.jpg' /> | <img src='http://images.contentful.com/7h71s48744nc/y8RwVUO90kSiVSDnws8Wbd/55db5bfb165e359cdbce11b4e1aa9781/secret-of-the-caves-cover-image' />
<img src='http://pbs.twimg.com/media/CkOet0xUUAA1YG3.jpg' /> | <img src='http://product-images.highwire.com/847107/1125207.jpg' />
<img src='http://pbs.twimg.com/media/CkDDmhEUYAIOyPd.jpg' /> | <img src='http://d28hgpri8am2if.cloudfront.net/book_images/cvr9781481401951_9781481401951_hr.jpg' />
<img src='http://pbs.twimg.com/media/Cj-JwLEVAAE1LuO.jpg' /> | <img src='http://nancydrew.info/Images/ndbad4.jpg' />
<img src='http://pbs.twimg.com/media/Cj5z5DmVEAAir8F.jpg' /> | <img src='http://vignette1.wikia.nocookie.net/goosebumps/images/c/cd/ImagesCALQUUU3.jpg/revision/latest?cb=20110824140601' />
<img src='http://pbs.twimg.com/media/Cj0XZTQUgAEOiUK.jpg' /> | <img src='https://images-na.ssl-images-amazon.com/images/I/511AVBWGHTL.jpg' />
<img src='http://pbs.twimg.com/media/CjvCXb1UUAA72p2.jpg' /> | <img src='http://d.gr-assets.com/books/1410919062l/878969.jpg' />
<img src='http://pbs.twimg.com/media/CjpvgRMVAAAIT8-.jpg' /> | <img src='http://images.contentful.com/7h71s48744nc/foGQ1DsOVvHHZBUoNfpUpZ/9575f0c3a7b96d768c592ba3d9f09668/missing-chums-cover-image' />
<img src='http://pbs.twimg.com/media/CjfLf7BUUAEDKic.png' /> | <img src='http://www.scholastic.com/content5/media/products/10/9780689716010_xlg.jpg' />
<img src='http://pbs.twimg.com/media/CjZ_Gz1UoAA6CLg.jpg' /> | <img src='https://d.gr-assets.com/books/1176702645l/646491.jpg' />
<img src='http://pbs.twimg.com/media/CjU-l6iUYAAq5Z8.jpg' /> | <img src='https://images-na.ssl-images-amazon.com/images/I/41%2B%2BEEIW9LL.jpg' />
<img src='http://pbs.twimg.com/media/CjQIF-fUkAAXNUt.jpg' /> | <img src='http://library.ucmo.edu/faculty/criley/authorimages/haynes.jpg' />
<img src='http://pbs.twimg.com/media/CjKsBBGUkAAluGt.jpg' /> | <img src='https://images-na.ssl-images-amazon.com/images/I/41I5nk8gkmL._BO1,204,203,200_.jpg' />
<img src='http://pbs.twimg.com/media/CjASJPOVEAEoVB2.jpg' /> | <img src='https://upload.wikimedia.org/wikipedia/en/f/f0/Cave_of_time.jpg' />
<img src='http://pbs.twimg.com/media/Ci7NQJkUoAUFl-c.jpg' /> | <img src='http://d2arxad8u2l0g7.cloudfront.net/books/1330430819l/412618.jpg' />
<img src='http://pbs.twimg.com/media/CixdaArUkAAGl_W.jpg' /> | <img src='http://www.series-books.com/nancydrew/pbs/files42.jpg' />
<img src='http://pbs.twimg.com/media/Cir25wGUgAA4mz3.jpg' /> | <img src='http://providr-com.s3.amazonaws.com/all-images/things-you-will-only-see-at-a-thrift-store1.jpg' />
<img src='http://pbs.twimg.com/media/CinvALtVAAEauFW.jpg' /> | <img src='https://images-na.ssl-images-amazon.com/images/I/51B85N19BGL.jpg' />
<img src='http://pbs.twimg.com/media/CidFDBlU4AEEkI9.jpg' /> | <img src='https://images-na.ssl-images-amazon.com/images/I/51feHSdLMbL.jpg' />
<img src='http://pbs.twimg.com/media/CiYE-CuVAAEY6bU.png' /> | <img src='http://t3.gstatic.com/images?q=tbn:ANd9GcQTN3PZuepmACYlKs8XwrlnFiPVsBUTLjZdypHePrVqpOp2PSoV' />
<img src='http://pbs.twimg.com/media/CiTOs2mUoAAJI7q.jpg' /> | <img src='http://t1.gstatic.com/images?q=tbn:ANd9GcQB-AhydZnVSFlyFOuuJF4I7oRblIpKVXOyXS6h_UZsI1Olr58o' />
<img src='http://pbs.twimg.com/media/CiMyxiSUoAE0ns_.jpg' /> | <img src='https://upload.wikimedia.org/wikipedia/en/0/05/The_Tower_Treasure_(Hardy_Boys_no._1,_revised_edition_-_front_cover).jpg' />
<img src='http://pbs.twimg.com/media/CiBwoaHWwAAu7A8.jpg' /> | <img src='http://images.complex.com/complex/image/upload/c_limit,fl_progressive,q_80,w_680/ewnflnbngjonyu2bsf5m.jpg' />
<img src='http://pbs.twimg.com/media/Ch816FnXIAAZS-E.jpg' /> | <img src='https://images-na.ssl-images-amazon.com/images/I/51ZFdDE2suL.jpg' />
<img src='http://pbs.twimg.com/media/Ch3OKXwW0AEbVdN.jpg' /> | <img src='https://images-na.ssl-images-amazon.com/images/I/51LltWT4QGL.jpg' />
<img src='http://pbs.twimg.com/media/Cht9FFOWkAIBzyM.jpg' /> | <img src='http://images.amazon.com/images/P/0807554049.01._SCL_SX150_.jpg' />
<img src='http://pbs.twimg.com/media/Chi-D3ZUkAA0yr4.jpg' /> | <img src='https://images-na.ssl-images-amazon.com/images/I/51lz7WZLdvL.jpg' />
<img src='http://pbs.twimg.com/media/CheqbVEVEAAGXJH.jpg' /> | <img src='http://d2arxad8u2l0g7.cloudfront.net/books/1330774994l/290404.jpg' />
<img src='http://pbs.twimg.com/media/ChZ2OLbUgAADLhr.jpg' /> | <img src='https://images-na.ssl-images-amazon.com/images/I/21BV6B4983L._AC_UL320_SR214,320_.jpg' />
<img src='http://pbs.twimg.com/media/ChTta7ZU4AAi53n.jpg' /> | <img src='https://images-na.ssl-images-amazon.com/images/I/51fuMCeK9JL.jpg' />
<img src='http://pbs.twimg.com/media/ChOexIiUoAAZRd0.jpg' /> | <img src='http://www.series-books.com/nancydrew/pbs/files28.jpg' />
<img src='http://pbs.twimg.com/media/ChJSoQnUUAA1RJo.jpg' /> | <img src='https://images-na.ssl-images-amazon.com/images/I/51VVyFGwS%2BL.jpg' />
<img src='http://pbs.twimg.com/media/ChEF6qAU0AEr6gh.jpg' /> | <img src='https://images-na.ssl-images-amazon.com/images/I/811-zJ6JHmL.jpg' />
<img src='http://pbs.twimg.com/media/Cg_3uUXUcAARaHM.png' /> | <img src='http://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1391223976i/371048._UY468_SS468_.jpg' />
<img src='http://pbs.twimg.com/media/Cg1hrHkUYAAYvht.jpg' /> | <img src='https://images-na.ssl-images-amazon.com/images/I/41CYi2m4I7L.jpg' />
<img src='http://pbs.twimg.com/media/Cgrp57LU8AEE13D.jpg' /> | <img src='http://prodimage.images-bn.com/pimages/9780448089362_p0_v2_s1200x630.jpg' />
<img src='http://pbs.twimg.com/media/CglOQpNU4AAaijc.jpg' /> | <img src='https://upload.wikimedia.org/wikipedia/commons/9/99/The_Box-Car_Children-1924.jpg' />
<img src='http://pbs.twimg.com/media/CggnURlUMAAQjbo.jpg' /> | <img src='https://images-na.ssl-images-amazon.com/images/I/51MVH1R7jbL._UY250_.jpg' />
<img src='http://pbs.twimg.com/media/CggE33ZUYAAuMLw.jpg' /> | <img src='https://i.ytimg.com/vi/tDjuhxSSvoA/maxresdefault.jpg' />
<img src='http://pbs.twimg.com/media/CgMCuMeUAAA4g8N.jpg' /> | <img src='https://upload.wikimedia.org/wikipedia/commons/9/99/The_Box-Car_Children-1924.jpg' />
<img src='http://pbs.twimg.com/media/CgG2I3-UUAA8uR6.jpg' /> | <img src='https://images-na.ssl-images-amazon.com/images/I/6109%2BCCZm6L.jpg' />
<img src='http://pbs.twimg.com/media/CgA43UoUAAAWhOq.jpg' /> | <img src='https://images-na.ssl-images-amazon.com/images/I/51RCEHFHSML.jpg' />
<img src='http://pbs.twimg.com/media/Cf27pNcUEAAejZg.jpg' /> | <img src='http://i.ebayimg.com/00/s/NTYyWDgzMA==/z/9REAAOSw54xUWgTs/$_75.JPG' />
<img src='http://pbs.twimg.com/media/Cfx0KcpUsAEbObC.jpg' /> | <img src='http://www.fictiondb.com/covers/156179094X.jpg' />
<img src='http://pbs.twimg.com/media/Cfsx39uUYAA6_u9.jpg' /> | <img src='http://cdn.usatsimg.com/image/thumb/660-495nw/9244929.jpg' />
<img src='http://pbs.twimg.com/media/CfoBdSRUkAAI-LX.jpg' /> | <img src='x-raw-image:///86265ad205a6f7b48605a6f28977c394160793fdd8bf12e109e6e9a615dedc10' />
<img src='http://pbs.twimg.com/media/CfigjZAUYAADv1v.jpg' /> | <img src='http://1.darkroom.shortlist.com/980/141ec7cbedf3592a7a2dbc5789c017fc:cb7f1c6a3ca2d7df4549aa9159dc4910/covers.png' />
<img src='http://pbs.twimg.com/media/CfhxsGFUkAASBlH.jpg' /> | <img src='https://images-na.ssl-images-amazon.com/images/I/51-4tsz%2BUtL.jpg' />
<img src='http://pbs.twimg.com/media/CfdDvtkVAAAaUfj.jpg' /> | <img src='http://d2arxad8u2l0g7.cloudfront.net/books/1373647463l/290411.jpg' />
<img src='http://pbs.twimg.com/media/CfX0CyoUYAABkaZ.jpg' /> | <img src='https://images-na.ssl-images-amazon.com/images/I/51JT2W5H3QL.jpg' />
<img src='http://pbs.twimg.com/media/CfTPwLVUMAAyIJ4.jpg' /> | <img src='http://usatsimg.com/image/thumb/125-125ac/9244938.jpg' />
<img src='http://pbs.twimg.com/media/CfSqn3nUMAAFLbg.jpg' /> | <img src='https://images-na.ssl-images-amazon.com/images/I/51KhWg6zZzL._SX312_BO1,204,203,200_.jpg' />
<img src='http://pbs.twimg.com/media/CfNa1dwUIAA2_RT.png' /> | <img src='http://www.series-books.com/nancydrew/pbs/files8.jpg' />
<img src='http://pbs.twimg.com/media/CfIDQszUkAA9Kh0.jpg' /> | <img src='http://t3.gstatic.com/images?q=tbn:ANd9GcRXdKEAV9up4JHf4k8fEil5jTo_YaYDuyl7U3X8_MH1mYMp5THH' />
<img src='http://pbs.twimg.com/media/CfDmJQ9UkAI5Qm5.jpg' /> | <img src='http://t0.gstatic.com/images?q=tbn:ANd9GcRdjqecIaTSOXp9pps_TTg5NgUX3ODWWM22ZuTIT0CGDqxxaQAC' />
<img src='http://pbs.twimg.com/media/Ce-t7RLVIAAPX7A.jpg' /> | <img src='x-raw-image:///86265ad205a6f7b48605a6f28977c394160793fdd8bf12e109e6e9a615dedc10' />
<img src='http://pbs.twimg.com/media/Ce-OoW3UUAExyP-.jpg' /> | <img src='https://i.harperapps.com/covers/9780380712366/y648.png' />
<img src='http://pbs.twimg.com/media/Cez3sidWwAAGSCt.jpg' /> | <img src='https://images.sobadsogood.com/90s-childrens-books-photoshopped-hilarious-ways/13.jpg' />
<img src='http://pbs.twimg.com/media/CewDX96WwAEFS8d.jpg' /> | <img src='http://www.hardyboyscasefiles.com/images/casefiles/CF058.jpg' />
<img src='http://pbs.twimg.com/media/Ceujpj3WIAALvNy.jpg' /> | <img src='https://lh5.googleusercontent.com/--j3d6NXYwD0/AAAAAAAAAAI/AAAAAAAAEHU/8u0WmyUdc_s/s0-c-k-no-ns/photo.jpg' />
<img src='http://pbs.twimg.com/media/Cefay3TXIAELxWy.jpg' /> | <img src='https://images-na.ssl-images-amazon.com/images/I/51QSS5SAK4L.jpg' />
<img src='http://pbs.twimg.com/media/CeZxNnhVIAEJz2-.jpg' /> | <img src='https://images-na.ssl-images-amazon.com/images/I/41YRaf948kL.jpg' />
<img src='http://pbs.twimg.com/media/CeU6N_jUkAA646j.png' /> | <img src='http://kirstygreenwood.typepad.com/.a/6a010536b33b69970b01bb08686421970d-600wi' />
<img src='http://pbs.twimg.com/media/CeREZA9UsAAUBou.jpg' /> | <img src='http://www.shiversbooks.com/humano-morphs/images/04_large.jpg' />
<img src='http://pbs.twimg.com/media/CePvlPSVAAAQlul.jpg' /> | <img src='http://d2arxad8u2l0g7.cloudfront.net/books/1256604945s/1200937.jpg' />
<img src='http://pbs.twimg.com/media/CeMGJgzUkAA4wJP.jpg' /> | <img src='https://images-na.ssl-images-amazon.com/images/I/5150Nmusm8L.jpg' />
<img src='http://pbs.twimg.com/media/CeKjBwMVIAARWUY.png' /> | <img src='http://d2arxad8u2l0g7.cloudfront.net/books/1311152170l/1175133.jpg' />
<img src='http://pbs.twimg.com/media/CeGhghLUsAA6BNt.jpg' /> | <img src='https://img0.etsystatic.com/129/0/5123241/il_214x170.964979816_cccl.jpg' />
<img src='http://pbs.twimg.com/media/CeFRE5JUUAAlWpZ.jpg' /> | <img src='https://i.harperapps.com/covers/9780380724697/x500.png' />
<img src='http://pbs.twimg.com/media/CeATWcaUEAAjKzW.jpg' /> | <img src='https://images.sobadsogood.com/90s-childrens-books-photoshopped-hilarious-ways/12.jpg' />
<img src='http://pbs.twimg.com/media/Cd7WCY8UIAACSYj.jpg' /> | <img src='http://cdn29.elitedaily.com/content/uploads/2016/04/06094838/elite-daily-envision-books-600x300.jpg' />
<img src='http://pbs.twimg.com/media/Cd2uoayUAAAleD6.jpg' /> | <img src='https://images-na.ssl-images-amazon.com/images/I/418ChB5vhiL._SX258_BO1,204,203,200_.jpg' />
<img src='http://pbs.twimg.com/media/Cd19I-5UEAIaAQh.jpg' /> | <img src='x-raw-image:///efe1503057095d92c8bf71e104bb00423ab820f9512adac5c0175e6b7f1d5a7d' />
<img src='http://pbs.twimg.com/media/CdsmO08UUAA6taE.jpg' /> | <img src='http://kirstygreenwood.typepad.com/.a/6a010536b33b69970b01a511491b51970c-600wi' />
<img src='http://pbs.twimg.com/media/Cdoc_LKVAAA044E.png' /> | <img src='http://t1.gstatic.com/images?q=tbn:ANd9GcR0fiqb9EWwTz_ROksbBmruLBjo3LvWAfdxHPbojYiTQKjATycq' />
<img src='http://pbs.twimg.com/media/Cdmp30YUsAA2QHE.jpg' /> | <img src='https://images.sobadsogood.com/90s-childrens-books-photoshopped-hilarious-ways/17.png' />
<img src='http://pbs.twimg.com/media/CdiC8lWVAAEaspk.png' /> | <img src='http://t1.gstatic.com/images?q=tbn:ANd9GcSB8ZbCYOsMM_CrpG-N3bMBQb8whOZm3feoSyileljk2LXworU-' />
<img src='http://pbs.twimg.com/media/CdhSHfKUUAQ49kJ.jpg' /> | <img src='http://kirstygreenwood.typepad.com/.a/6a010536b33b69970b01a511491b51970c-600wi' />
<img src='http://pbs.twimg.com/media/CdXPhtIUEAArlrx.jpg' /> | <img src='http://www.fictiondb.com/covers/0590326430.jpg' />
<img src='http://pbs.twimg.com/media/CdStLA7UIAEwvSQ.jpg' /> | <img src='http://d2arxad8u2l0g7.cloudfront.net/books/1320838667l/1304651.jpg' />
Total: 146, failed: 27
