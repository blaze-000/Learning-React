import { useState } from 'react';

import Header from './components/Header/Header.jsx';
import { EXAMPLES } from './data.js';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';
import ArrayComponent from './components/array.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
        <ArrayComponent />
      </main>
    </>
  );
}

export default App;
