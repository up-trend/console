import m from "/lib/mithril.js"
export default function newClientStore() {
  let clients = {}
  let req = m.request({
    url:"testdata/clients.json",
    background: true
  }).then(data => {
    clients = data
    m.redraw()
  })
  return {
    get clients() {
        return clients
    },
    onload(f) { req.then(f) }
  }
}
