import {StyleSheet} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    backgroundColor: '#fff',
  },
  icons: {
    height: RFValue(15),
    width: RFValue(15),
    marginTop: RFValue(3),
  },
  button: {
    backgroundColor: '#4F285E',
    padding: RFValue(10),
    width: '100%',
    marginTop: RFValue(20),
    borderRadius: RFValue(50),
    color: '#fff',
  },
  imageBack: {
    height: RFPercentage(200),
    backgroundColor: '#4F285E',
  },
  imageBackView: {
    padding: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: RFValue(100),
  },
  //   logoImage: {
  //     height: RFPercentage(28),
  //     width: RFPercentage(28),
  //   },
  bottomView: {
    flex: 2,
    backgroundColor: '#ffffff',
    bottom: RFValue(36),
    borderTopStartRadius: RFValue(40),
    borderTopEndRadius: RFValue(40),
  },
  //   signInText: {
  //     fontSize: RFValue(32),
  //     fontWeight: 'semibold',
  //     marginVertical: RFValue(10),
  //   },
  inputStyles: {
    height: RFValue(50),
    width: '100%',
    borderWidth: 0,
    fontWeight: 'regular',
  },
  forgotpass: {
    alignSelf: 'flex-end',
    color: '#023e98',
    marginTop: 10,
    fontWeight: 'regular',
    fontSize: RFValue(14),
  },
  buttonText: {
    fontSize: RFValue(18),
    color: '#fff',
    fontWeight: 'regular',
    fontSize: RFValue(14),
  },
  signUpText: {
    color: '#023e98',
    fontSize: RFValue(14),
  },
  textInputView: {
    marginHorizontal: RFValue(35),
    paddingVertical: RFValue(15),
  },
  signUpView: {
    flexDirection: 'row',
    marginTop: RFValue(15),
    alignSelf: 'center',
  },
  input: {
    height: RFValue(50),
    width: '100%',
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    borderWidth: 1,
    borderColor: '#D1CFCD',
    padding: 15,
    fontSize: RFValue(18),
    color: '#50464B',
    minHeight: 65,
    color: '#50464B',
    borderRadius: RFValue(24),
    backgroundColor: '#E5E2DE',
  },
  
});
