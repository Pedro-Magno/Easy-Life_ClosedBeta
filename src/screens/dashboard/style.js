import { StyleSheet } from 'react-native'

const styles = StyleSheet.create ({
    backgroundImage: {
        flex: 1,
        backgroundColor: '#23195F',
    },
    containerSuporte: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        height: 550 ,
        width: '100%',
        borderRadius: 25,
        gap: 25,
    },
    containerChart: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '95%',
        height: 'auto',
        borderRadius: 25,
        backgroundColor: 'white',
    },
    backgroundImageII: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 300,
        resizeMode: 'cover'
    },
    titleDash: {
        textAlign: 'center',
        width: '100%',
        color: 'white',
        fontSize: 35,
    },
    divTest: {
        display: 'flex',
        flexDirection: 'column',
        width: '90%',
        height: 70,
        backgroundColor: '#FF8110',
        borderRadius: 15,
    }
 });

export default styles