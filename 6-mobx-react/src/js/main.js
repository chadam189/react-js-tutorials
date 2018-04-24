import "../css/main.css"
import React from "react"
import ReactDOM from "react-dom"

import TodoList from "./TodoList.js"
import store from "./TodoStore.js"

const app = document.getElementById("app")

ReactDOM.render(<TodoList store={store} />, app)

