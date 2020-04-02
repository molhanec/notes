import { Router } from "react-router-dom"

import React from "react"
import { Routes } from "./routes/Routes"

import Info from "./features/info/Info"
import Header from "./features/header/Header"

import { Container } from "reactstrap"
import { history } from "./app/store"

function App() {
  return (
    <Router history={history}>
      <Container>
        <Header></Header>
        <Info />
        <main>
          <Routes />
        </main>
      </Container>
    </Router>
  )
}

export default App
