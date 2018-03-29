import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppLi from './AppLi.js';
import './AppUl.css';

class AppUl extends Component {
    render() {
        const { items } = this.props;
        return (
            <div className="listPost">
                {items.map((item, index) => 
                    <AppLi key={item.id} item={item} index={index}/>
                )}
            </div>
        )
    }
}

AppUl.protoTypes = {
    items: PropTypes.arrayOf(PropTypes.object)
}

AppUl.defaultProps = {
    items: []
}
export default AppUl;