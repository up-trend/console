import m from "/lib/mithril.js"

import Layout from "./Layout.js"
import Clients from "./Clients.js"
import Client from "./Client.js"
import NewPost from "./NewPost.js"

import newClientStore from "./client-store.js"

const clientStore = newClientStore()

m.route(document.body, "/clients", {
  "/clients": {
    render(v) { 
      return m(Layout, {},
        m(Clients, {store:clientStore}))
    }
  },
  "/clients/:clientName": {
    render({attrs}) {
      return m(Layout, {},
        m(Client, {store:clientStore,
          clientName: attrs.clientName}))
    }
  },
  "/clients/:clientName/new-post": {
    render({attrs}) {
      return m(Layout, {},
        m(NewPost, {store:clientStore,
          clientName: attrs.clientName}))
    }
  }
})
