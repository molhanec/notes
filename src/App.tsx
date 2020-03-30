import './App.css'

import React from 'react'

import { Notes } from './features/notes/Notes'

const Header = () => <header>Notes.</header>

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Notes></Notes>
      </main>
    </>
  )
}

export default App
