import React from 'react';
import {Header, Icon} from 'react-native-elements';
import {View,Text} from 'react-native';

const MyHeader = props => {
    return(
        <Header
            centerComponent = {{ text : props.title, style : {color : 'red',fontSize : 30}}}
            backgroundColor = 'cyan'
        />
    )
}

export default MyHeader;