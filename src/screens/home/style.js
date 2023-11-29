import { StyleSheet } from 'react-native'

const styles = StyleSheet.create ({
    containerHome: {
        backgroundColor: '#D7CFFC',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '60%',
        height: '90%',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,       
        borderBottomRightRadius: 50,
        marginLeft: 15,
        marginTop: 50,       
    },
    containerTop: {
        width: 'auto',
        marginTop: 50,
        gap: 50
    },
    containerHeader: {
        width: '90%',
        height: 80,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    containerImg: {
        marginLeft: 5,
    },
    containerHeaderText: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    textName: {
        fontSize: 18,
    },
    textEmail: {
        fontSize: 12,
    },
    containerButtons: {
        display: 'flex',
        alignItems: 'center',
        gap: 20
    },
    buttonsHome: {
        backgroundColor: '#FFFFFF',
        width: '95%',
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 15,
        borderRadius: 15,
    },
    iconButtons: {
        marginLeft: 10
    },
    textButtons: {
        fontSize: 15
    },
    containerBottom: {
        display: 'flex',
        width: '95%',
        marginBottom: 38,
    },
 });

export default styles