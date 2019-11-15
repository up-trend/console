export default function newClientStore() {
  let clients
  const clients$ = fetch("testdata/clients.json")
    .then(res => res.json())
    .then(data => clients = data)
  return {
    get clients() {
      if (typeof clients !== "undefined") {
        return clients
      } else {
        return {}
      }
    },
    didLoadClients(f) {
      clients$.then(f)
    },
  }
}
