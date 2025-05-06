import React from 'react';
import AlertButton from './AlertButton';

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

export default Toolbar;
