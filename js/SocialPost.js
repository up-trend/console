import m from "/lib/mithril.js"

const renderContent = c => c

export default () => {
  return {
    view({attrs}) {
      const { post, showPlatform } = attrs
      return m("article.social-post", {}, [
        showPlatform ? 
          m("small", post.platform) : null,
        m("section.author", post.author),
        m("section.content",
          renderContent(post.content)),
        m("section.meta", post.meta),
      ])
    }
  }
}
