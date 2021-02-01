import {
    StyleSheet
} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#1a1924',
    },
    //Dashboard
    appButtonContainer: {
        elevation: 8,
        marginBottom: 20,
        backgroundColor: '#34424b',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
     appSecondButtonContainer: {
        marginTop:10,
        marginBottom: 10,
        backgroundColor: '#1a1924',
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    submitButtonStyle: {
        marginBottom: 10,
        backgroundColor: '#00BCD4',
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    welcomeText: {
        alignSelf: 'center',
        height: 30,
        color: '#fff',
        marginBottom:20,
        fontSize: 22,
    },
    nativeText: {
        alignSelf: 'center',
        height: 30,
        color: '#fff',
        fontSize: 15,
    },
    //Custom Text Input
    inputView: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        backgroundColor:'#fff',
        borderWidth: 1
    },
    //LoginPage
    textInput: {
        height: 50,
        flex: 1,
        padding: 10,
        margin: 20,
    },
    submitButtonText: {
        color: 'white',
        alignSelf: 'center'
    }
});

