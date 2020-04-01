import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import NoteDetails from "../features/noteDetails/NoteDetails"
import { MainRoute } from "./Main"

export const Routes = () => (
  <Router>
    <Switch>
      <Route path="/note/:noteId" component={NoteDetails} />
      <Route component={MainRoute} />
    </Switch>
  </Router>
)
