import React, {useState} from 'react';
import {Keyboard, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import SignButton from '../components/SignButton';
import SignForm from '../components/SignForm';

function SingInScreen({navigation, route}) {
  const {isSignUp} = route.params ?? {};
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const createChangeTextHandler = name => value => {
    setForm({...form, [name]: value});
  };
  const onSubmit = () => {
    Keyboard.dismiss();
    console.log(form);
  };

  return (
    <SafeAreaView style={styles.fullscreen}>
      <Text style={styles.text}>PublicGallery</Text>
      <View style={styles.form}>
        <SignForm
          form={form}
          createChangeTextHandler={createChangeTextHandler}
          isSignUp={isSignUp}
          onSubmit={onSubmit}
        />
        <SignButton isSignUp={isSignUp} onSubmit={onSubmit} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  form: {
    marginTop: 64,
    width: '100%',
    paddingHorizontal: 16,
  },
});

export default SingInScreen;
