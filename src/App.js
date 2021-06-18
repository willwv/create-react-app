import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import HomePage from './pages/home/home'

function App() {
  return (
    <BrowserRouter>
        <Route path='/' component={HomePage}/>
    </BrowserRouter>
  );
}

export default App;
