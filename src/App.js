import React from 'react';
import Reader from './components/Reader/Reader';
import publications from './components/Reader/publications.json';

function App() {
  return <Reader items={publications} />;
}

export default App;
