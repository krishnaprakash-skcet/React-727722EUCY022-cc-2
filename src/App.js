import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <textarea onChange={handleChange} value={{text}}/>
      <p>{text}</p>
    </div>
  );
}

export default App;
