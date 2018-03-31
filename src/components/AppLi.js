import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AppLi.css';

class AppLi extends Component {
    render() {
        const { item: { title, body }, index } = this.props;
        return(
            <div className="post">
                <h5>{index + 1}. {title.toUpperCase()}</h5>
                <p>{body.slice(0, 200)}</p>
            </div>
        )
    }
}

AppLi.protoTypes = {
    index: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string
}

AppLi.defaultProps = {
    index: 0,
    item: {
        title: "Не має назви.",
        body: "Не має опису."
    }
}

export default AppLi;