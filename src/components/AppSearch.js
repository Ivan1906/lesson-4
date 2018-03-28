import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./AppSearch.css";

class AppSearch extends Component {
    render() {
        const { onChange } = this.props;
        return(
            <input type="text"
                className="AppSearch" 
                placeholder="Enter title"
                onChange={onChange} />
        )
    }
}

AppSearch.protoTypes = {
    onChange: PropTypes.func
}

export default AppSearch;