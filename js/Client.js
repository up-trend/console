import m from "/lib/mithril.js"

import SocialFeed from "./SocialFeed.js"

export default {
  oninit({attrs, state}) {
    const { store, clientName } = attrs
    state.store = store
    store.onload(m.redraw)
    state.client = store.clients[clientName]
    console.log(JSON.stringify(state.store))
    state.name = clientName
  },
  onupdate({state}) {
    state.client = state.store.clients[state.name] || {}
  }, 
  view({state}) {
    let {name, store, client} = state
    try {
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
          m(SocialFeed, {platform, creds})
        )
      )
    ]
    }catch(e){
      return m("span", {onclick: ()=>
    console.log(JSON.stringify(state.store))
      }, String(e))}
  }
}
