import m from "/lib/mithril.js"

import SocialPost from "./SocialPost.js"

import Platforms, { NullFeed } from "./platforms/platforms.js"

export default () => {
  const posts = [] 
  let platformName
  
  return {
    oninit(v) {
      let { feed, platform, creds } = v.attrs
      if (feed!==undefined) {
        feed_ = feed
        platformName = feed.name
      } else if (platform in Platforms) {
        Platforms[platform]().then(plat => { 
          console.log(plat)
          plat.create(creds).posts
            .subscribe(postChunk => {
            posts.push(...postChunk)
            m.redraw()
          })
        })
        platformName = platform
      } else {
        platformName = m("em", "Unsupported platform: " + platform)
      }
      feed && feed.posts.subscribe(postChunk => {
        posts.push(...postChunk)
        m.redraw()
      })
    },
    view(v) {
      return m("article.social-feed", {}, [
        m("h3", {}, platformName),
        m("section.posts", {},
          posts.map(post =>
            m(SocialPost, {post}))
        )
      ])
    }
  }
}
