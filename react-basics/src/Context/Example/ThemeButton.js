import React, { Component } from 'react';
import {ThemeContext} from './ThemeContext';

class ThemeButton extends Component {
    render() {

        let props = this.props;
        let theme = this.theme;
        console.log(props);
        console.log(theme);
        return (
            <button
                {...props}
                style={{backgroundColor:theme.background}}
            />
        )
    }
}
ThemeButton.contextType = ThemeContext;

export default ThemeButton;