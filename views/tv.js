import { StyleSheet, View, ImageBackground, Image, Text, Pressable } from 'react-native';



export default function TV({ navigation }) {
  return (
      <ImageBackground style={styles.container} source={require('../assets/background.png')}>
        <Text>Assalomu alaykum, iltimos bizning kanallaridan birini tanlang</Text>
        <View style={styles.channelsContainer}>
          <Pressable onPress={() => navigation.navigate('Channel')} style={styles.bizChannel}>
            <Image style={styles.channelImage} source={require('../assets/biztvLogo.png')} />
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Channel')} style={styles.bizCinemaChannel}>
            <Image style={styles.cinemaImage} source={require('../assets/BIZ_Cinema.png')} />
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Channel')} style={styles.bizMusicChannel}>
            <Image style={styles.musicImage} source={require('../assets/BIZ_Music.png')} />
          </Pressable>
        </View>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 23,
    paddingTop: 100,
    alignItems: 'center',
  },
  channelsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingTop: 20,
  },
  bizChannel: {
    width: "100%",
    height: 128,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF4C98',
    borderRadius: 19,
  },
  bizCinemaChannel: {
    width: "100%",
    height: 128,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#12245E',
    borderRadius: 19,
    marginTop: 12,
    marginBottom: 12,
  },
  bizMusicChannel: {
    width: "100%",
    height: 128,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6DD400',
    borderRadius: 19,

  },
  channelImage: {
    width: 131,
    height: 58,
    marginLeft: 20,
  },
  cinemaImage: {
    width: 180,
    height: 127,
    marginLeft: 20,
  },
  musicImage: {
    width: 180,
    height: 127,
    marginLeft: 20,
  }
});
