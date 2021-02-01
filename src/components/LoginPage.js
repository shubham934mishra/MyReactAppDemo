//@flow
import React, { Component } from 'react';
import { View } from 'react-native';
import connect from 'react-redux/lib/connect/connect';
import { getLoginData } from '../actions/LoginAction';
import { NAVIGATION_DASHBOARD } from '../navigations/routes';
import { styles } from '../utilities/style';
import { CustomTextInput } from '../globalComponents/CustomTextInput';
import { AppButton } from '../globalComponents/CustomButton';


type Props = {
    callService: Function,
    navigation: { navigate: Function }

};
type States = {
    userName: string,
};

const mapStateToProps = (state: any) => {
    const dataSource = state.LoginReducer.data;
    return {
        dataSource
    };
};

const mapDispatchToProps = (dispatch: any) => ({
    callService: (loginObj) => dispatch(getLoginData(loginObj)),
});


class LoginPage extends Component<Props, States> {

    state = {
        userName: ''
    };

    onGuestPress = () => {
        const loginObj = {
            userName: this.state.userName
        };
        this.props.callService(loginObj);
        this.props.navigation.navigate(NAVIGATION_DASHBOARD);
    }

    render() {
        return (
            <View style={styles.container}>

                <CustomTextInput
                    ipOnChangeText={userName => this.setState({ userName })}
                    label='User Name'
                    style={styles.textInput}
                    testID={'TextInput'}
                />

                <AppButton
                    onPress={this.onGuestPress}
                    stylee={styles.appButtonContainer}
                    testID='loginButton'
                    title='LOGIN'
                />
            </View>
        );
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
