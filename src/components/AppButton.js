import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./AppButton.css";

class AppButton extends Component {
    constructor(props) {
        super(props);
        this.onClickChild = this.onClickChild.bind(this);
        this.state = {
            textButton: "Записів для добавлення не має"
        }
    }

    onClickChild() {
        this.props.onClick()
    }

    render() {
        const { text } = this.props;
        return(
            <input type="button"
                className="AppButton" 
                value={text ? text : this.state.textButton}
                onClick={this.onClickChild} />
        )
    }
}

AppButton.protoTypes = {
    text: PropTypes.string,
    onclick: PropTypes.func
}

AppButton.defaultProps = {
    text: "Добавити 10 записів"
}

export default AppButton;