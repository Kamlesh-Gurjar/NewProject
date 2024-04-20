import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  ScrollView,
  PermissionsAndroid,
} from 'react-native';
import React, {useState} from 'react';
import {useRoute} from '@react-navigation/native';
import CustomInput from '../../component/common/customComponets/CustomInput';
import CustomButton from '../../component/common/CustomButton';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const CreatePost = () => {
  const route = useRoute();
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [caption, setCaption] = useState('');
  const [imagedata, setImageData] = useState('');
  const OpenCamera = async () => {
    const result = await launchCamera({mediaType: 'photo'});
    if (result.didCancel) {
    } else {
      console.log(result);
      setImageData(result);
    }
  };
  const OpenGallery = async () => {
    const result = await launchImageLibrary({mediaType: 'photo'});
    if (result.didCancel) {
    } else {
      console.log(result);
      setImageData(result);
    }
  };
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'New Project App Camera Permission',
          message:
            'New Project App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
        OpenCamera();
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const requestGalleryPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'New Project App Camera Permission',
          message:
            'New Project App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
        OpenGallery();
      } else {
        console.log('Gallery permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  return (
    <ScrollView style={styles.contanier}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <Text style={styles.platformname}>
        Create Post For {route.params.name}
      </Text>
      <View style={styles.postview}>
        <View style={styles.topview}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {imagedata == '' ? (
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCJoVnuKWv43i_Tti7OWhbBsfeyYDCi7KjYxcyXP--Qg&s',
                }}
                style={styles.userimage}
              />
            ) : (
              <Image
                source={{
                  uri: imagedata.assets[0].uri,
                }}
                style={styles.userimage}
              />
            )}

            <View style={{marginLeft: 10}}>
              <Text style={styles.name}>{name == '' ? 'Name' : name}</Text>
              <Text style={styles.username}>
                {userName == '' ? '@UserName' : '@' + userName}
              </Text>
            </View>
          </View>
          <Image style={styles.platformicon} source={route.params.image} />
        </View>
        <Text style={styles.DemoCaption}>
          {caption == '' ? 'Caption here ...' : caption}
        </Text>
      </View>
      <CustomInput
        placeholder={'Name'}
        value={name}
        onChangeText={text => setName(text)}
      />
      <CustomInput
        placeholder={'User Name'}
        value={userName}
        onChangeText={text => setUserName(text)}
      />
      <CustomInput
        placeholder={'Caption'}
        value={caption}
        onChangeText={text => setCaption(text)}
        multiline={true}
        otherstyle={{marginBottom: 20}}
      />
      <CustomButton
        btnname={'Gallery'}
        onPress={() => requestGalleryPermission()}
      />
      <CustomButton
        btnname={'Camera'}
        onPress={() => requestCameraPermission()}
      />
    </ScrollView>
  );
};

export default CreatePost;
const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },
  platformname: {
    alignSelf: 'center',
    color: '#000',
    fontSize: 18,
    marginTop: 80,
    fontWeight: '600',
  },
  postview: {
    padding: 10,
    elevation: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginTop: 40,
    marginHorizontal: 10,
  },
  topview: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  username: {
    color: '#000',
    fontSize: 12,
  },
  platformicon: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  DemoCaption: {
    color: '#000',
    marginTop: 20,
  },
  userimage: {height: 70, width: 70, borderRadius: 50},
  name: {
    color: '#000',
    fontSize: 15,
    fontWeight: '700',
  },
});
