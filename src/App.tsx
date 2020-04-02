import { BrowserRouter } from "react-router-dom"

import React from "react"
import { Routes } from "./routes/Routes"

import Info from "./features/info/Info"
import Header from "./features/header/Header"

import { Container } from "reactstrap"

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header></Header>
        <Info />
        <main>
          <Routes />
        </main>
      </Container>
    </BrowserRouter>
  )
}

export default App
