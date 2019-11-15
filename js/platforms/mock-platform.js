// Implements SocialPlatform

import { ReplaySubject } from "https://dev.jspm.io/rxjs@6/_esm2015"

let fakePosts = [
  {
    platform: "Fakebook",
    author: "Metro",
    content: "Gelecek istasyon øńbęșțëmmůżkîźïłåýmíĺľîïřąðė",
  },
  {
    platform: "Fakebook",
    author: "Vivro virno",
    content: "cahıler anlamaz kı",
  },
  {
    platform: "Fakebook",
    author: "sorry i shoot the cam",
    content: "oh man, happens",
  },
  {
    platform: "Fakebook",
    author: "Fenasi Kerim",
    content: "Lorem ipsum dolor sit amet",
  },
]

export const create = () => {
  let _posts = new ReplaySubject([]);
  setTimeout(() => _posts.next(
      fakePosts = fakePosts.slice().reverse()),
    1000)
  return {
    name: "Fakebook",
    posts: _posts
  }
}
