import { StyleSheet } from 'react-native'

const styles = StyleSheet.create ({
  containerHeader: {
    paddingTop: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  containerLeft: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 15,
    backgroundColor: '#D7CFFC',
    borderRadius: 10,
  },
  iconNav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D7CFFC',
    borderRadius: 10,
    width: 60,
    height: 60,
  },
  containerRight: {
    marginRight: 25,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconFAQ: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#FF8110',
    width: 40,
    height: 40,
  },
  iconUser: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#D7CFFC',
    borderRadius: 50,
    width: 60,
    height: 60,
  },
  buttonChat: {
    backgroundColor: '#FF8110',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    // backgroundColor: '#D7CFFC',
    borderRadius: 50,
    width: 60,
    height: 60,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    borderRadius: 30,
    backgroundColor: '#23195F',
    gap: 10,
  },
  modalTitle: {
    fontSize: 16,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  modalInput: {
    backgroundColor: '#D4D3D3',
    textAlign: 'center',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 501,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  modalButton: {
    backgroundColor: '#FF8110',
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 10,
    width: 100,
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  containerTextChat: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 50,
    marginBottom: 10,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  containerButonsModal: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 25,
  },
 });

export default styles