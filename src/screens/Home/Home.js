import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {data} from '../../constants/Listdata';
import {useNavigation} from '@react-navigation/native';
const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <Text style={styles.welcmtxt}>Hello, Welcome</Text>
      <Text style={styles.plformtxt}>
        Fow which Platform you want to create post
      </Text>
      <FlatList
        data={data}
        numColumns={3}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('CreatePost', {
                  name: item.name,
                  image: item.image,
                })
              }
              style={{margin: 25}}>
              <Image style={styles.platformicon} source={item.image} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Home;
