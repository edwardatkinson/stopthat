import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProgressBar from './components/ProgressBar/ProgressBar';


// BEGIN HERE:
// DATA TO VISUALIZE
// Days toward hitting your goal or milestone 
// Countdown towards hitting your goal
// Graphs: seconds, minutes, hours, weeks, months that have been saved

// Sept 11: define components

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <p>
          StopThat app. Save to reload.
        </p>
      </header>

{/* Commenting out components, except the ones that are defined and being worked on
      <Navigation />
      <Logo />
      <UserGoals />
      <ProfileManagement />
      <Dashboard />
      <Countdown />  */}
      <ProgressBar />
      {/* <TimeSavedGraph />
      <Footer /> */}



    </div>

  );
}

export default App;
