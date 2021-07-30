import React from 'react';
import Greetings from './components/Greetings'

const InternalGreeting = () => {
  const name = 'Jeanine Rogers'
  const fgcolor = '#544ac1';
  const bgcolor = '#ac740e';
  return (
    <div className="container">
      <header >
        <h1 className="center-text">Greetings Component</h1>
        <h1 className="center-text-m0">(Internal)</h1>
        <div className="center-text">
          <h2>Welome!</h2>
        </div>
        <div className="center-text-m0">
          <h2 style={{
            color: fgcolor,
            backgroundColor: bgcolor,
          }}>
            {name}
          </h2>
        </div>
      </header>
    </div>
  )
}

function App() {
  const name = 'Tyron Arnold'
  const fgcolor = 'orange';
  const bgcolor = 'steelblue';

  return (
    <>
      <InternalGreeting />
      <div className="container">
        <Greetings
          name={name}
          fgcolor={fgcolor}
          bgcolor={bgcolor}
        />
      </div>
    </>
  );
}


/*
class App extends React.Component {
  render() {
    return <h1>Hello from a class</h1>
  }
}
*/

export default App;
