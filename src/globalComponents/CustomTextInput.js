/* eslint-disable no-shadow */

import React from 'react';
import { View, TextInput } from 'react-native';
import { styles } from '../utilities/style';
import COLORS from "../utilities/Colors";

export const CustomTextInput = ({ children, label, ipOnChangeText, testID }) => (
    <View style={styles.inputView}>
        <TextInput
            testID={testID}
            placeholder={label}
            placeholderTextColor={COLORS.placeholderColor}
            onChangeText={ipOnChangeText}
        />
        {children}
    </View>
);
