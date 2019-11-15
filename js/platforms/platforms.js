import { EMPTY } from "https://dev.jspm.io/rxjs@6/_esm2015"

export function NullFeed(creds) {
  return {
    name: "Unsupported platform",
    posts: EMPTY
  }
}

export default {
  Fakebook: (creds) => import("./mock-platform.js"),
}
