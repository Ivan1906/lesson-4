import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./AppSearch.css";

class AppSearch extends Component {

    onChangeChild(event) {
        this.props.onChange(event);
    }

    render() {
        return(
            <input type="text"
                className="AppSearch" 
                placeholder="Введіть назву поста"
                onChange={this.onChangeChild.bind(this)} />
        )
    }
}

AppSearch.protoTypes = {
    onChange: PropTypes.func
}

export default AppSearch;