import React from 'react';
import Banner from './Banner'
import Content from './Content'
import Mode from './Mode'
import '../styles/App.css'

function App() {

  return (
    <React.Fragment>
      <Mode />
      <Banner />
      <Content />
    </React.Fragment>
  )
}

export default App;
