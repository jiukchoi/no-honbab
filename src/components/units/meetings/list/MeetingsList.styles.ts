import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    paddingTop: 50,
  },
  subView: {
    paddingTop: 15,
  },
  searchView: {
    position: 'relative',
  },
  textInput: {
    height: 40,
    margin: 12,
    borderWidth: 1.5,
    borderColor: '#E24E4A',
    borderRadius: 15,
    paddingHorizontal: 20,
  },
  searchImg: {
    position: 'absolute',
    top: 20,
    right: 30,
  },
  bannerImg: {
    width: '100%',
  },
  bannerRemarkImg: {
    position: 'absolute',
    top: 40,
    left: 110,
  },
  locationSubWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingBottom: 5,
  },
  searchMessage: {
    color: '#bdbdbd',
    fontSize: 12,
    paddingLeft: 35,
    marginBottom: 20,
  },
  meetingWrapper: {
    flexDirection: 'row',
    width: 335,
    height: 125,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#bdbdbd',
    marginBottom: 10

  },
  meetingLeftWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    backgroundColor: '#E24E4A',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  meetingRightWrapper: {
    padding: 10,
  }
})