import React, { useState, useEffect } from 'react';
import './Buttons.module.css';

function Buttons({ addPage }) {
  const [buttonName, setButtonName] = useState('Draw');

  return (
    <div>
      <button onClick={addPage}>ADD Page</button>
    </div>
  );
}

export default Buttons;
