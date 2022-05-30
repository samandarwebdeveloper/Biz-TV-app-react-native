import React, { useEffect } from 'react';
import { Animated, StyleSheet, ImageBackground } from 'react-native';

export default function Splash({ navigation }) {

  useEffect(() => {
    setTimeout(() => {
        navigation.navigate("TabNavigator")
    }, 2000);
}, []);

  const [logoOpacity] = React.useState(new Animated.Value(0));
  const [logoPosition] = React.useState(new Animated.Value(0));


  useEffect(() => {
    Animated.parallel([
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(logoPosition, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View 
    style={styles.container}>
      <ImageBackground style={styles.loadContainer} source={require('../assets/app-loading-img.png')}>
        <Animated.Image
          source={require('../assets/biz-tv-load-logo.png')}
          style={[
            styles.logo,
            {
              opacity: logoOpacity,
              transform: [
                { translateY: logoPosition.interpolate({
                  inputRange: [0, 1],
                  outputRange: [100, 0],
                }) },
              ],
            },
          ]}
        />
      </ImageBackground>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
  },
  logo: {
    width: 186,
    height: 100,
  }
});