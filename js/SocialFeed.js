import m from "/lib/mithril.js"

import SocialPost from "./SocialPost.js"

import { create, NullFeed } from "./platforms/platforms.js"

export default () => {
  return {
    oninit({attrs: {feed, platform, creds}, state}) {
      if (feed===undefined) {
        state.feed = NullFeed()
        create(platform, creds).then(f => {
          f.onloadmore(m.redraw)
          f.loadMore()
          console.log(JSON.stringify(f.posts))
          m.redraw(state.feed = f)
        })
      } else { state.feed = feed }
    },
    view({state: {feed}}) {
      return m("article.social-feed", {}, [
        m("h3", {
          onclick: ()=> 
          console.log(JSON.stringify(feed.posts))
        }, feed.name),
        m("section.posts", {
        },
          feed&&feed.posts.map(post =>
            m(SocialPost, {post}))
        )
      ])
    }
  }
}
