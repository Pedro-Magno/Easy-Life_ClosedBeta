import { StyleSheet, Platform } from 'react-native'

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        backgroundColor: '#23195F',
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: Platform.OS === 'ios' ? 0 : 80,        
    },
    
    title: {
      fontSize: 30,
      marginBottom: 10,
      fontWeight: 'bold',
      color: '#ffff'
    },
    input: {
      backgroundColor: '#ffff',
      borderRadius: 10,
      width: 300,
      marginLeft:'auto',
      marginRight:'auto',
      marginTop:10,
      padding: 10,
      height: 50,
      borderBottomWidth: 1,
      borderBottomColor: '#F92E6A',
      color: "#4d5156",  
    },
    buttonLoginDisabled: {
      backgroundColor: "#683e75",
      width: 200,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:40,
      marginTop: 20,
    },
    buttonLogin: {
      backgroundColor: "#ab518f",
      width: 200,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:40,
      marginTop: 20,
    },
    textButtonLogin: {
      color: '#ffffff',
    },
    contentAlert: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    warningAlert: {
        paddingLeft: 10,
        color: '#FFD700',
        fontSize: 16,
    },
    registration: {
        marginTop: 20,
        color: '#ffff',
    },
    linkSubscribe: {
        color: '#00BFFF',
        fontSize: 16,
    },
    titleLogin: {
        fontSize: 45,
        color: 'white',
        marginBottom: 40,
        marginTop: 75,
    },
    textButtonLoginGoogle: {
        fontSize: 18,
        color: 'black'
    },
    buttonLoginGoogle: {
        height: 70,
        width: 270,
        display: 'flex',
        backgroundColor: "#FFFFFF",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
        borderRadius: 15,
    },
})

export default styles