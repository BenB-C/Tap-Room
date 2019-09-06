import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header.js';
import KegList from './KegList.js';
import NewKegForm from './NewKegForm.js';
import EditKegForm from './EditKegForm.js';
import Error404 from './Error404.js';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Router>
        <Switch>
          <Route exact path='/' component={KegList} />
          <Route path='/newkeg' component={NewKegForm} />
          <Route path='/editkeg/id' component={EditKegForm} />
          <Route component={Error404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
