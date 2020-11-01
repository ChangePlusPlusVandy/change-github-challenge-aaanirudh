import React from 'react';
import './App.css';
import Member from './Member'
import logo from './images/changeplusplus.png'


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className='page-title-section'>
              <p className='page-title'>Change++ Github Challenge</p>
              <p className='page-description'>
                  This is just a quick web-page created to simulate the workflow on a change++ team.
                  Please create a member component for yourself and add some creativity to the page if possible!
              </p>
          </div>

          <p style={{fontSize: '2rem'}}>Project Name: [Add Here] </p>
          <p style={{margin: "5px"}}>Team members:</p>
          <div className='team-section'>
              <Member name = 'Jaden Hicks' classification = 'Junior' favColor='cyan'/>
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
