import "./App.css"

import React from "react"
import { Routes } from "./routes/Routes"
import { Link } from "react-router-dom"

import Info from "./features/info/Info"

const Header = () => (
  <header>
    <Link to="/">Notes.</Link>
  </header>
)

function App() {
  return (
    <>
      <Header></Header>
      <Info />
      <main>
        <Routes />
      </main>
    </>
  )
}

export default App
