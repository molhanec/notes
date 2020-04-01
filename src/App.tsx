import './App.css'

import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NoteList from './features/noteList/NoteList'

const Header = () => <header>Notes.</header>

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Router>
          <Switch>
            <Route path="/note/:noteId"></Route>
            <Route>
              <NoteList />
            </Route>
          </Switch>
        </Router>
      </main>
    </>
  )
}

export default App
