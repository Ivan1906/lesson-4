import React, { Component } from 'react';
import './App.css';

import AppButton from './components/AppButton';
import AppSearch from './components/AppSearch';
import AppUl from './components/AppUl';
import DBpost from './data.json';

class App extends Component {

  constructor() {
    super();

    this.state = {
      textButton: '',
      allCount: DBpost.length,
      count: 10,
      step: 10,
      db: []
    };

    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.setState((prevState) => {
      return {db: DBpost.slice(0, prevState.count)};
    });
    this.setState((prevState) => {
      return {textButton: `Добавити ${prevState.step} нових постів`}
    });
  }

  onClick() {
    const { allCount, count, step } = this.state;
    if (count < allCount) {
      this.setState((prevState) => {
        return prevState.count + step < allCount ? {count: prevState.count + step} : {count: allCount};
      });
      this.setState((prevState) => {
        return {db: DBpost.slice(0, prevState.count)}
      });
    } else {
      this.setState((prevState) => {
        return {textButton: ""}
      });
    }
  };

  onChange(event) {
    this.setState((prevState) => {
      return {db: DBpost.reduce((prevValue, elem) => {
        let searchText = event.target.value;
        return elem.title.includes(searchText) ? 
          prevValue
            .concat(elem)
            .sort((a, b) => 
              (a.title > b.title) ? 1 : (a.title < b.title) ? -1 : 0
            ) : 
          prevValue;
      }, [])}
    });
  }

  render() {
    return (
      <div className="App">
        <AppSearch onChange={this.onChange}/>
        <h1>Кількість записів {this.state.count}</h1>
        <AppUl items={this.state.db} />
        <AppButton text={this.state.textButton} onClick={this.onClick} />
      </div>
    );
  }
}

export default App;