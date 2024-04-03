// InputPage.js
import React, { useState } from 'react';
import homeStore from '../store/homeStore';

const InputPage = () => {
  const [inputValue, setInputValue] = useState('');
  const setValue = homeStore(state => state.setValue);

  const handleSubmit = (event) => {
    event.preventDefault();
    setValue(inputValue);
    setInputValue('');
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter value..."
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputPage;
