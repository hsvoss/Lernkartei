import React from 'react';
import {Text, View} from 'react-native';
import {Navigation} from "./components/shared/Navigation";
import StatusBarWrapper from "./components/shared/StatusBarWrapper";
import {blue} from "./components/shared/StylesAndColors";

export default function App() {
    return (
        <View style={{flex: 1}}>
            <StatusBarWrapper backgroundColor={blue}/>
            <Navigation/>
        </View>
    );
}



