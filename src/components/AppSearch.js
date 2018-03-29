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
                ref="searchInput"
                placeholder="Enter title"
                onChange={this.onChangeChild.bind(this)} />
        )
    }
}

AppSearch.protoTypes = {
    onChange: PropTypes.func
}

export default AppSearch;