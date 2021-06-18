import React from 'react';
import {Button, FlatList, Image, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Styles from './Styles';
import DATA from './Data';

const HomeScreen = ({navigation}) => (
  <View style={Styles.container}>
    <Text>Home Screen</Text>
    <Button
      title="Go to Gallery"
      onPress={() =>
        navigation.navigate('Gallery', {
          otherParam: 'anything you want here',
        })
      }
    />
  </View>
);

const renderItem = ({item}) => (
  <View style={Styles.item}>
    <Image style={Styles.image} source={{uri: `${item.url}`}} />
  </View>
);

const GalleryScreen = () => (
  <FlatList
    data={DATA}
    renderItem={renderItem}
    keyExtractor={item => item.id}
  />
);

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Gallery" component={GalleryScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
