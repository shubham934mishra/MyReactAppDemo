
import React, { Component } from 'react';
import { Text } from 'react-native';
import { styles } from '../utilities/style';


 class CustomText extends Component {
      
    render() {
        return (
            <Text style={[styles.welcomeText, this.props.style]} >
             {this.props.children}
            </Text>
        );
    }
 
}

export default CustomText;
