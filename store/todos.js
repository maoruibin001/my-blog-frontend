export const state = () => ({
  name: "maoruibin",
  value: 0
})

export const mutations = {
  add (state, value=1) {
    console.log("value is: ", value)
    state.value += value
  },
  remove (state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle (state, todo) {
    todo.done = !todo.done
  }
}