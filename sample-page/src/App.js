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

          <p style={{margin: "5px", fontSize: '2rem'}}>Project Name: Change++ Github Demo </p>
          <p style={{margin: "5px", fontSize: "1.6rem"}}>Team members:</p>

          <div className='team-section'>
              {/*MAKE CHANGES HERE*/}
              {/* the code below is an example of how to create a member component.*/}
              {/* feel free to copy it and update with your information */}
              <Member name = 'Jaden Hicks' favFood = 'calamari' favColor='orange'/>
              <Member name = 'Ani Bala...' favFood = 'Apples' favColor='Blue'/>
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
