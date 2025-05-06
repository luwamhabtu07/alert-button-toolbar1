import React from 'react';

// AlertButton Component
function AlertButton({ message, children }) {
  return (
    <button onClick={() => alert(message)} style={{ margin: '10px', padding: '10px 20px' }}>
      {children}
    </button>
  );
}

// Toolbar Component
function Toolbar() {
  return (
    <div>
      <AlertButton message="Hello! This is Button 1's alert.">
        Button 1
      </AlertButton>
      <AlertButton message="You clicked Button 2!">
        Button 2
      </AlertButton>
      <AlertButton message="This is Button 3's custom message!">
        Button 3
      </AlertButton>
    </div>
  );
}

function App() {
  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Toolbar Example</h1>
      <Toolbar />
    </div>
  );
}

export default App;
