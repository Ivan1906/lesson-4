import React, { Component } from 'react';
import './App.css';

import AppButton from './components/AppButton';
import AppSearch from './components/AppSearch';
import AppUl from './components/AppUl';
import DBpost from './data.json';

const textAddPost = "Добавити нових постів";
const textNone = "Записів для добавлення немає";

class App extends Component {

  constructor() {
    super();

    this.state = {
      textButton: "",
      count: 10,
      step: 10,
      db: []
    };

    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);    
  }

  componentDidMount() {
    this.setState({
      db: DBpost,
      textButton: textAddPost
    });
  }

  onClick() {
    const { count, step, db } = this.state;
    if (count < db.length) {
      this.setState((prevState) => {
        return {
          count: prevState.count + step < prevState.db.length ? prevState.count + step : prevState.db.length,
          textButton: textAddPost
        }
      });
    } else {
      this.setState({textButton: textNone});
    }
  };

  onChange(event) {
    let searchText = event.target.value;
    this.setState((prevState) => {
      return {
        db: DBpost.reduce((prevValue, elem) => {
          return elem.title.includes(searchText) ? 
          prevValue
            .concat(elem)
            .sort((a, b) => (a.title > b.title) ? 1 : (a.title < b.title) ? -1 : 0) : 
          prevValue;
      }, []),
        count: 10
    }
    });
    this.setState((prevState) => {
      return {
        textButton: prevState.db.length !== 0 ? textAddPost : textNone
      }
    });
  }

  render() {
    let { count, textButton, db } = this.state;
    return (
      <div className="App">
        <AppSearch onChange={this.onChange}/>
        <h1>Кількість записів {count}</h1>
        <AppUl items={db.slice(0, count)} />
        <AppButton text={textButton} onClick={this.onClick} />
      </div>
    );
  }
}

export default App;