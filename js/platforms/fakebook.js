let fakePosts = [
  {
    platform: "Fakebook",
    author: "Metro",
    content: "Gelecek istasyon øńbęșțëmmůżkîźïłåýmíĺľîïřąðė",
  },
  {
    platform: "Fakebook",
    author: "Vivro virno",
    content: "cahıler anlamaz kı",
  },
  {
    platform: "Fakebook",
    author: "sorry i shoot the cam",
    content: "oh man, happens",
  },
  {
    platform: "Fakebook",
    author: "Fenasi Kerim",
    content: "Lorem ipsum dolor sit amet",
  },
]

export function create() {
  return {
    name: 'Fakebook',
    posts: [],
    onloadmore(f) { this.didloadmore = f },
    loadMore() {
      setTimeout(() => {
        this.posts.push(...fakePosts)
        this.didloadmore()
      }, 1000)
    },
  }
}
