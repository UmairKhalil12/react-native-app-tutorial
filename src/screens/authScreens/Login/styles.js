import { StyleSheet } from "react-native"
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


const styles = StyleSheet.create({
  loginView: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: '#F8F8F8',
    color: 'black'
  },
  heading: {
    color: '#0056FE',
    fontSize: moderateScale(40),
    fontWeight: '400',
    marginBottom: moderateScale(40)
  },
  loginButton: {
    marginTop: moderateScale(20),
    backgroundColor: '#0339F9',
    height: moderateScale(50),
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(10)
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textTransform: 'capitalize'
  },
  forgettenPass: {
    color: '#0266FB',
    textTransform: 'capitalize',
    marginTop: moderateScale(20)
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    marginVertical: moderateScale(40),
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray',
  },
  lineOr: {
    marginHorizontal: moderateScale(10),
    fontSize: moderateScale(15),
    color: 'black',
    textTransform : 'lowercase'
  },
  signupBtn: {
    backgroundColor: '#07A717',
    width: '60%',
    height: moderateScale(40),
    alignItems: 'center',
    justifyContent: 'center'
  },
  signupBtnText: {
    color: ' white',
    fontWeight: 'bold',
    textTransform: 'capitalize'
  }
})

export default styles