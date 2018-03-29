import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./AppButton.css";

class AppButton extends Component {
    render() {
        const { text, onClick } = this.props;
        return(
            <input type="button"
                className="AppButton" 
                value={text}
                onClick={onClick} />
        )
    }
}

AppButton.protoTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

AppButton.defaultProps = {
    text: "Назва за замовчуванням"
}

export default AppButton;