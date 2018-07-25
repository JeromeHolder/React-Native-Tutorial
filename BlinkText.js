import React, { Component } from 'react';
import { Text } from 'react-native';

export default class BlinkText extends Component {
    constructor(props) {
        super(props);
        this.state = {isShowingText: true};

        // Togle state every second
        setInterval(()=>{
            this.setState(previousState => {
                return { isShowingText: !previousState.isShowingText};
            });
        }, 1000);
    }
    render() {
        let display = this.state.isShowingText ? this.props.text : ' ';
        return (
            <Text>{display}</Text>
        );
    }
}