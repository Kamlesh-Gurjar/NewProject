import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  logintxt: {
    color: 'skyblue',
    alignSelf: 'center',
    fontSize: 18,
    marginTop: 60,
    fontWeight: 'bold',
  },
  welcometxt: {
    color: '#C3C3C3',
    alignSelf: 'center',
    marginTop: 10,
  },

  chackboxview: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop:20
  },
  forgotpassword: {
    textDecorationLine: 'underline',
    color: 'skyblue',
    fontSize: 15,
  },
  bottomtext: {
    alignSelf: 'center',
    color: 'gray',
    position: 'absolute',
    bottom: 20,
  },
  checkbox:{
   flexDirection:"row",
   alignItems:"center"
  }
});
