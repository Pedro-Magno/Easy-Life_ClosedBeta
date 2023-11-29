import { StyleSheet } from 'react-native'

const styles = StyleSheet.create ({
    containerProfile: {
        flex: 1,
        backgroundColor: '#D7CFFC',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 30,
    },
    containerImg: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 25,
    },
    containerReturnIcon: {
        width: '100%',
        paddingLeft: 25,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    containerImgProfile: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
    },
    containerInputs: {
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 10,
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        // backgroundColor: 'white',
    },
    iconInputs: {
        marginLeft: 20,
    },
    containerPassword: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '40%',
        gap: 30
    },
    containerButtons: {
        display: 'flex',
        flexDirection: 'row',
        gap: 50,
    },
    buttonEdit: {
        backgroundColor: '#664FC9',
        height: 60,
        width: '70%',
        borderRadius: 35,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'normal',
    },
    textButtonEdit: {
        fontSize: 20,
        color: "#FFFFFF"
    },
    textUser: {
        color: 'black',
        fontSize: 15,
    },
    textUser: {
        marginLeft: 20,
    },
    containerButtons: {
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
        backgroundColor: '#683e75',
        borderRadius: 5,
        padding: 10,
        width: '35%',
      },
      textButton: {
        color: '#FFFFFF',
        fontSize: 16,
      },
 });

export default styles
