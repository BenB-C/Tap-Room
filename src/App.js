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
      filterList: false,
      kegList: [
        {
          name: 'Pale Ale',
          brand: 'Sierra Nevada',
          price: 6,
          alcoholContent: 5,
          pints: 9
        },
        {
          name: 'Coors Light',
          brand: 'Coors Brewing Company',
          price: 3,
          alcoholContent: 4.2,
          pints: 10
        },
        {
          name: 'Belgian White Ale',
          brand: 'Blue Moon Brewing Company',
          price: 5,
          alcoholContent: 5.4,
          pints: 8
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
    this.kegListToShow = this.state.kegList;
  }

  handleAddKeg = newKeg => {
    const newKegList = this.state.kegList;
    newKegList.unshift(newKeg);
    this.setState({kegList: newKegList});
  }

  handleMinusPint = keg => {
    if (keg.pints > 0) keg.pints--;
    this.setState({state: this.state});
  }

  handleEditKeg = (keg, newAttributes) => {
    keg.name = newAttributes.name;
    keg.brand = newAttributes.brand;
    keg.price = newAttributes.price;
    keg.alcoholContent = newAttributes.alcoholContent;
    keg.pints = newAttributes.pints;
    this.setState({state: this.state});
  }

  handleDeleteKeg = keg => {
    const newKegList = this.state.kegList.filter(value => value !== keg);
    this.setState({kegList: newKegList});
  }

  handleFilterList = shouldFilter => {
    if (shouldFilter) {
      this.kegListToShow = this.state.kegList.filter(keg => keg.pints < 10) || [];
      this.setState({filterList: true});
    } else {
      this.kegListToShow = this.state.kegList;
      this.setState({filterList: false});
    }
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <Router>
          <Switch>
            <Route exact path='/' render={() => <KegList
                kegList={this.kegListToShow}
                onMinusPint={this.handleMinusPint}
                onEditKeg={this.handleEditKeg}
                onDeleteKeg={this.handleDeleteKeg}
                onFilterList={this.handleFilterList}
                listIsFiltered={this.state.filterList} />} />
            <Route path='/newkeg' render={() => <NewKegForm onAddKeg={this.handleAddKeg} />} />
            <Route path='/editkeg' render={(props) => <EditKegForm
                keg={props.location.state ? props.location.state.keg : null}
                onEditKeg={this.handleEditKeg} />} />
            <Route component={Error404} />
          </Switch>
        </Router>
      </div>
    );
  }

}

export default App;
