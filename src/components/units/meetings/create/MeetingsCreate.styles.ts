import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff'
  },
  textInput: {
    marginBottom: 8
  },
  remarksWrapper: {
    flexDirection: 'row',
    marginBottom: 20
  },
  subView: {
    flexDirection: 'row',
    borderWidth: 0.4,
    borderColor: '#bdbdbd',
    alignItems: 'center',
    width: 350,
    height: 40,
    marginBottom: 10,
    paddingLeft: 30,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tagImg: {
    position: 'absolute',
    top: 0,
    left: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 12,
    width: '30%',
  },
  text: {
    fontSize: 12,
  },
  contentsWrapper: {
    flexDirection: 'row',
    borderWidth: 0.4,
    borderColor: '#bdbdbd',
    paddingTop: 10,
    width: 350,
    height: 220,
    marginBottom: 45,
    paddingLeft: 30,
    marginTop: 15,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    marginLeft: 15,
    width: '90%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.3,
    borderColor: '#bdbdbd',
    borderRadius: 20,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff'
  },
})