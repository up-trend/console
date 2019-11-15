import m from "/lib/mithril.js"

import SocialFeed from "./SocialFeed.js"

export default () => {
  let client
  let store_
  let name
  return {
    oninit: v => {
      const { store, clientName } = v.attrs
      store.didLoadClients(m.redraw)
      name = clientName
      store_ = store.clients
    },
    view(v) {
      console.log(name)
      client = store_[name] || {}
      console.log(JSON.stringify(store_))
      return [
      m("header", {}, [
        m("h2.pagetitle", {}, name),
        m("div.toolbar", [
          m(m.route.Link, {
            href: "/clients/"+name+"/new-post",
            class: "navbutton new-post",
          }, "New Post")
        ])
      ]),
      m("section.multipane", {},
        Object.entries(client)
        .map(([platform, creds]) =>
          m(SocialFeed, {platform, creds})))
    ]
    }
  }
}
