// DisplayPage.js
import React from 'react';
import homeStore from '../store/homeStore';

const DisplayPage = () => {
  const value = homeStore(state => state.value);

  return (
    <div>
      <h2>Value from Store:</h2>
      <p>{value}</p>
    </div>
  );
};

export default DisplayPage;
