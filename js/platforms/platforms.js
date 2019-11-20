
export function NullFeed(creds) {
  return {
    name: "Unsupported platform",
    posts: [],
    onloadmore(_) {},
    loadMore() {
      console.error(
        'Tried to load more from unsupported platform')
    }
  }
}

const platforms = {
  Fakebook: (creds) => import("./fakebook.js"),
}

export async function create(name, creds) {
  const factory = platforms[name]
  if (factory!==undefined) {
    return (await factory()).create(creds) 
  }
  return NullFeed() 
}
