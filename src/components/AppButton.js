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
    onClick: PropTypes.func
}

AppButton.defaultProps = {
    text: "Добавити 10 записів"
}

export default AppButton;