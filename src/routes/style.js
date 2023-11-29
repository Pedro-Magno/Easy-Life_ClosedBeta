import { StyleSheet } from 'react-native'

const styles = StyleSheet.create ({
    containerHome: {
        backgroundColor: '#D7CFFC',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        height: '90%',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,       
        borderBottomRightRadius: 50,
        marginTop: 10,
        gap: 1,       
    },
    containerHeader: {
        width: '80%',
        height: 90,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 0,
    },
    containerImg: {
        marginLeft: 0,
    },
    containerHeaderText: {
        // backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    textName: {
        fontSize: 19,
    },
    textEmail: {
        fontSize: 12,
    },
    containerButtons: {
        display: 'flex',
        alignItems: 'center',
    },
    buttonsHome: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: 45,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 10,
        borderRadius: 15,
    },
    buttonLogout: {
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: 45,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 10,
        borderRadius: 15,
        marginTop: 350,
    },
    iconButtons: {
        marginLeft: 15
    },
    textButtons: {
        fontSize: 15
    },
    containerDrawerList: {
        flex: 1,
        display: 'flex',
        width: '100%',
        height: '100%',
    }
 });

export default styles