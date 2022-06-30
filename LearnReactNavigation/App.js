import React from 'react';
import {Button, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator;

function HomeScreen({navigation}) {
  return (
    <View>
      <Text>Home</Text>
      <Button title="Drawer 열기" onPress={() => navigation.openDrawer()} />
      <Button
        title="Setting 열기"
        onPress={() => navigation.navigate('Setting')}
      />
    </View>
  );
}

function SettingScreen({navigation}) {
  return (
    <View>
      <Text>Setting</Text>
      <Button title="뒤로가기" onPress={() => navigation.goBack()} />
    </View>
  );
}

function App() {
  return (
    <>
      <Text>테스트</Text>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          drawerPosition="left"
          backBehavior="history">
          <Drawer.Screen
            name="Home"
            component={HomeScreen}
            options={{title: '홈'}}
          />
          <Drawer.Screen
            name="Setting"
            component={SettingScreen}
            options={{title: '설정'}}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
