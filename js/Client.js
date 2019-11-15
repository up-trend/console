import m from "/lib/mithril.js"

import SocialFeed from "./SocialFeed.js"

export default () => {
  let client
  let store_
  let name
  return {
    oninit({attrs, state}) {
      const { store, clientName } = attrs
      store.didLoadClients(m.redraw)
      state.name = clientName
      state.clients = store.clients
    },
    view({state}) {
      console.log(name)
      client = clients[name] || {}
      console.log(JSON.stringify(store_))
      return [
      m("header", {}, [
        m("h2.pagetitle", {}, state.name),
        m("div.toolbar", [
          m(m.route.Link, {
            href: "/clients/"+name+"/new-post",
            class: "navbutton new-post",
          }, "New Post")
        ])
      ]),
      m("section.multipane", {},
        Object.entries(state.client)
        .map(([platform, creds]) =>
          m(SocialFeed, {platform, creds})))
    ]
    }
  }
}
