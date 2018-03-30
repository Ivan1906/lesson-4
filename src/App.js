import React, { Component } from 'react';
import './App.css';

import AppButton from './components/AppButton';
import AppSearch from './components/AppSearch';
import AppUl from './components/AppUl';
import DBpost from './data.json';

const TEXT_ADD_POST = "Добавити нових постів";
const TEXT_NONE = "Записів для добавлення немає";

class App extends Component {

  constructor() {
    super();

    this.state = {
      count: 10,
      step: 33,
      db: DBpost
    };

    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);    
  }

  onClick() {
    const { count, step, db } = this.state;
    if (count < db.length) {
      this.setState((prevState) => {
        return {
          count: prevState.count + step < DBpost.length 
                  ? prevState.count + step 
                  : DBpost.length
        }
      });
    }
  };

  onChange(event) {
    let searchText = event.target.value;
    this.setState((prevState) => {
      return {
        db: DBpost.reduce((prevValue, elem) => {
          return elem.title.includes(searchText) 
              ? prevValue
                  .concat(elem)
                  .sort((a, b) => 
                    (a.title > b.title) ? 1 : 
                      (a.title < b.title) ? -1 : 0) 
              : prevValue;
      }, [])
    }});
    this.setState((prevState) => {
      return {
        count: prevState.db.length > prevState.step 
          ? prevState.step 
          : prevState.db.length
      }
    });
  }

  render() {
    let { count, step, db } = this.state;
    return (
      <div className="App">
        <AppSearch onChange={this.onChange}/>
        <h1>Кількість записів {count}</h1>
        <AppUl items={db.slice(0, count)} />
        <AppButton 
          text={(db.length !== count && step < db.length) ? TEXT_ADD_POST : TEXT_NONE} 
          onClick={this.onClick} />
      </div>
    );
  }
}

export default App;