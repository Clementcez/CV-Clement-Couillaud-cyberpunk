import React, {useState} from 'react';
import Banner from './Banner'
import Content from './Content'
import Mode from './mode/Mode'
import Footer from './Footer'
import FirstLoader from './FirstLoader'
import '../styles/App.css'
import '../styles/Responsive.css'

function App() {

  const [stateMode, setStateMode] = useState({ mode: 'loader' })

  return (
    <React.Fragment>
      {stateMode.mode === 'loader' &&
      <FirstLoader updateMode={setStateMode} />
      }
      {stateMode.mode === 'content' &&
      <div>
        {/* effet brouillage lors du click sur un bouton */}
        <div id='invisible'></div>
        <Mode />
        <Banner />
        <Content />
        <Footer />
      </div>
      }
    </React.Fragment>
  )
}

export default App;
