import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Video } from 'expo-av';

export default function ChannelVideo() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}

      />
      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    video: {
        width: '100%',
        height: '100%',
    },
    buttons: {
        position: 'absolute',
        bottom: 30,
        width: '100%',
        height: 50,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
