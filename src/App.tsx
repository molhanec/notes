import './App.css'

import React from 'react'

import NoteList from './features/notes/NoteList'

const Header = () => <header>Notes.</header>

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <NoteList></NoteList>
      </main>
    </>
  )
}

export default App
