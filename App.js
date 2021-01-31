/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
	SafeAreaView
} from 'react-native';
import VideoPlayer from './Examples/Video'

const App: () => React$Node = () => {
  return (
    <>
			<SafeAreaView>
				<VideoPlayer/>
			</SafeAreaView>
    </>
  );
};

export default App;
