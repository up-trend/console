import m from "/lib/mithril.js"

export default () => ({
  view: ({attrs}) => {
    return [
      m("h2.pagetitle", "Clients"),
      m("ul.clients", Object.entries(
          attrs.store.clients)
        .map(([id, client]) =>
          m("li.client.listitem",
            m(m.route.Link, {
              href: "/clients/"+id,
              class: "listlink"
            }, id)
          )
        )
      )
    ]
  }
}) 
