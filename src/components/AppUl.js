import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppLi from './AppLi.js';
import './AppUl.css';

const defValue = {
    items: [
        {
            id: 0,
            title: "Назва об'єкту вибору не має.",
            body: "Опису об'єкту вибору не має."
        }
    ]
};

class AppUl extends Component {
    render() {
        const { items } = this.props.items.length !== 0 ? this.props : defValue;
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