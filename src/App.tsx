import "./App.css"

import React from "react"
import { Routes } from "./routes/Routes"
import { Link } from "react-router-dom"

const Header = () => (
  <header>
    <Link to="/">Notes.</Link>
  </header>
)

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Routes />
      </main>
    </>
  )
}

export default App
