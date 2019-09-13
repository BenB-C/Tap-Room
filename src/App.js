import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header.js';
import KegList from './KegList.js';
import NewKegForm from './NewKegForm.js';
import EditKegForm from './EditKegForm.js';
import Error404 from './Error404.js';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      kegList: [
        {
          name: 'Coors Light',
          brand: 'Coors Brewing Company',
          price: 3,
          alcoholContent: 4.2,
          pints: 124
        },
        {
          name: 'Belgian White Ale',
          brand: 'Blue Moon Brewing Company',
          price: 5,
          alcoholContent: 5.4,
          pints: 124
        },
        {
          name: 'Especial',
          brand: 'Modelo',
          price: 6,
          alcoholContent: 4.4,
          pints: 124
        },
        {
          name: 'Bud Light',
          brand: 'Anheuser-Busch',
          price: 3,
          alcoholContent: 4.2,
          pints: 124
        }
      ]
    };
  }

  handleAddKeg = newKeg => {
    const newKegList = this.state.kegList;
    newKegList.push(newKeg);
    this.setState({kegList: newKegList});
  }

  handleMinusPint = kegIndex => {
    const newKegList = this.state.kegList;
    const keg = newKegList[kegIndex];
    if (keg.pints > 0) keg.pints--;
    this.setState({kegList: newKegList});
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Router>
          <Switch>
            <Route exact path='/' render={() => <KegList kegList={this.state.kegList} onMinusPint={this.handleMinusPint}/>} />
            <Route path='/newkeg' render={() => <NewKegForm onAddKeg={this.handleAddKeg} />} />
            <Route path='/editkeg' component={EditKegForm} />
            <Route component={Error404} />
          </Switch>
        </Router>
      </div>
    );
  }

}

export default App;
