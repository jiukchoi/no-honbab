import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 20
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
    borderWidth: 1,
    borderColor: '#bdbdbd',
    alignItems: 'center',
    width: 320,
    height: 40,
    marginBottom: 10,
    paddingLeft: 30,
  },
  tagImg: {
    position: 'absolute',
    top: 0,
    left: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  text: {

  },
  contentsWrapper: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#bdbdbd',
    paddingTop: 10,
    width: 320,
    height: 220,
    marginBottom: 70,
    paddingLeft: 30,
    marginTop: 25,
  },
  button: {
    marginLeft: 25,
    width: '90%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#bdbdbd',
    backgroundColor: '#bdbdbd',
    borderRadius: 20
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff'
  }
})