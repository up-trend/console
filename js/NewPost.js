import m from "/lib/mithril.js"

export default () => {
  let post = ""
  return {
    view({attrs}) {
      return [
        m("h2", "New Post"),
        m("datalist",
          // TODO:
        ),
        m("textarea.post-composer", {
          oninput: e => post = e.target.value,
        }),
        m("div.toolbar.toolbar-sticky", [
          m("button", {
            onclick: () => console.log(post),
          }, "Post"),
          m("button.primary", {
            onclick: () => console.log("sched"+post),
          }, "Schedule Post"),
        ]),
      ]
    },
  }
}
