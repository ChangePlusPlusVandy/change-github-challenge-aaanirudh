import React from 'react';
import './App.css';
import logo from './images/changeplusplus.png'
import Member from './Member'


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className='page-title-section'>
              <p className='page-title'>Change++ Github Challenge</p>
              <p className='page-description'>
                  This is just a quick web-page created to simulate the work of a change++ team.
                  Please create a member component for yourself and add some creativity to the page if you can!
              </p>
          </div>

          <p style={{fontSize: '2rem'}}>Project Name: Fire App </p>
          <p style={{margin: "5px", fontSize: "1.6rem"}}>Team members:</p>                                                  
          
          <div className='team-section'>
              <Member name = 'Hadley Shapland' favFood = 'PB & J' favColor='Yellow'/>
          </div>

          <div className='club-logo'>
              <label htmlFor='logo'>Developed by</label>
              <a href='http://changeplusplus.org/'>
                  <img className='club-logo-image' id='logo' src={logo} />
              </a>
          </div>

      </header>
    </div>
  );
}

export default App;
