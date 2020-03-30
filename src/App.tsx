import './App.css'

import React from 'react'

const Header = () => <header>Notes.</header>;
const Notes = () => <main>Poznamky</main>;

function App() {
  return (
    <>
      <Header></Header>
      <Notes></Notes>
    </>
  );
}

export default App;
