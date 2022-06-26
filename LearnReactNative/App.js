import React from 'react';
import {SafeAreaView} from 'react-native';
import Greeting from './components/Greeting';

const App = () => {
  const name = 'JSX';
  return (
    <SafeAreaView>
      {/* 주석을 작성해봅시다. */}
      <Greeting
        name={name}
        // 이름을 설정하기
      />
    </SafeAreaView>
  );
};

export default App;
