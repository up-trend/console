import m from "/lib/mithril.js"

export default () => ({
  view: ({attrs, children}) => m.fragment({}, [
    m("header#titlebar", {}, [
      m("h1.app-title", "Uptrend Console"),
      m("nav.nav", {}, [
        m(m.route.Link, {
          href:"/clients",
          class:"navlink"
        }, "Clients"),
        attrs.clientName &&
          m("span.currentClient",
            attrs.clientName)
      ])
    ]),// header.titlebar

    m("main.main", {}, children),

    m("footer")
  ])
})
