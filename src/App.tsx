import { BrowserRouter, Link } from "react-router-dom"

import React from "react"
import { Routes } from "./routes/Routes"

import Info from "./features/info/Info"

const Header = () => (
  <header>
    <Link to="/">Notes.</Link>
  </header>
)

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Info />
      <main>
        <Routes />
      </main>
    </BrowserRouter>
  )
}

export default App
