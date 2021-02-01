//@flow
import React, { Component } from 'react';
import { View, Image } from 'react-native';
import SwipeButton from 'rn-swipe-button';
import { connect } from 'react-redux';
import { styles } from '../utilities/style';
import { NAVIGATION_PROFILE } from '../navigations/routes';
import CustomText from '../globalComponents/CustomText';
import { AppButton } from '../globalComponents/CustomButton';
import COLORS from '../utilities/Colors';

const {secondary,primary,darkGrey,white} = COLORS;


type Props = {
    onGuestPress: Function,
    navigation: { navigate: Function },
    dataSource: { userName: Object }

};
type States = {
};

class Dashboard extends Component<Props, States> {
    onGuestPress = () => {
        this.props.navigation.navigate(NAVIGATION_PROFILE);
    }

    render() {
        return (
            <View style={styles.container}>
                <CustomText>Welcome,
                 {this.props.dataSource.userName}
                </CustomText>
            
                <AppButton
                    activeOpacity={0.6}
                    onPress={this.onGuestPress}
                    stylee={styles.appSecondButtonContainer}
                    title='Press Me'
                 />

                <AppButton
                    onPress={this.onGuestPress}
                    stylee={styles.appButtonContainer}
                    title='Press Me'
                />
                
                <AppButton
                    onPress={this.onGuestPress}
                    stylee={styles.submitButtonStyle}
                    title='Press Me'
                />
            
                <SwipeButton
                    disabled={false}
                    height={45}
                    onSwipeSuccess={() => {
                        this.onGuestPress();
                    }}
                    railBackgroundColor={secondary}
                    railBorderColor={darkGrey}
                      swipeSuccessThreshold={70}
                    shouldResetAfterSuccess={true}
                     resetAfterSuccessAnimDelay={1000}
                    railFillBackgroundColor={primary}
                    railFillBorderColor={primary}
                    thumbIconBackgroundColor={primary}
                    thumbIconBorderColor={primary}
                    title="Slide me to Continue"
                    titleColor={white}
                />
                
                </View>
            
        );
    }


}


const mapStateToProps = (state: any) => {
    const dataSource = state.LoginReducer.data;
    return {
        dataSource
    };
};

export default connect(mapStateToProps, null)(Dashboard);
