import {configureStore} from '@reduxjs/toolkit';
import React from 'react';
import {Provider} from 'react-redux';
import rootReducer from './slices';

const store = configureStore({
  reducer: rootReducer,
});

function App() {
  return <Provider store={store}>{}</Provider>;
}

export default App;
