/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
	SafeAreaView,
	StyleSheet
} from 'react-native';
import VideoPlayer from './Examples/Video'

const App: () => React$Node = () => {
  return (
    <>
			<SafeAreaView>
				<VideoPlayer />
			</SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default App;
