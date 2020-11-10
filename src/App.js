import React from 'react'

import ShortUrl from './views/shortUrl/ShortUrl';
import './App.css';

const App = () => {
  return (
    <div className="App" data-testid="app">
      <ShortUrl />      
    </div>
  );
}

export default App;
