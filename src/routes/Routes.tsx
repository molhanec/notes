import React from "react"
import { Route, Switch } from "react-router-dom"

import NoteDetails from "../features/noteDetails/NoteDetails"
import { MainRoute } from "./Main"

export const Routes = () => (
  <Switch>
    <Route path="/note/:noteId" component={NoteDetails} />
    <Route component={MainRoute} />
  </Switch>
)
