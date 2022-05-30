import { SafeAreaView, StyleSheet, View, ImageBackground, Image, Text, Pressable, ScrollView, TouchableHighlight } from 'react-native';

const data = [
    { 
        id: 1, 
        date: '10:00',
        title: 'Отель. Премьера нового сезона'
    },
    {
        id: 2,
        date: '10:00',
        title: 'Отель. Премьера нового сезона'
    },
    {
        id: 3,
        date: '10:00',
        title: 'Отель. Премьера нового сезона',
        live: true
    },
    {
        id: 4,
        date: '10:00',
        title: 'Отель. Премьера нового сезона'
    },
    {
        id: 5,
        date: '10:00',
        title: 'Отель. Премьера нового сезона'
    },
    {
        id: 6,
        date: '11:00',
        title: 'Start Up Club'
    },
    {
        id: 7,
        date: '11:00',
        title: 'Start Up Club'
    }
]


export default function Channel({ navigation }) {

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.imagebackground} source={require('../assets/background.png')}>
                <Pressable onPress={() => navigation.navigate("ChannelVideo")} style={styles.channelContainer}>
                    <Image style={styles.channelImage} source={require('../assets/channelthumbnail.png')} />
                    <Image style={styles.channelLogo} source={require('../assets/channellogo.png')} />
                    <Pressable style={styles.playBtn}>
                        <Image style={styles.channelPlay} source={require('../assets/play-button.png')} />
                    </Pressable>
                </Pressable>
            </ImageBackground>
                <View style={styles.channelActivities}>
                    <View style={styles.channelQualityContainer}>
                        <Pressable style={({ pressed }) => [{ backgroundColor: pressed ? '#eee' : '#fff' }, styles.channelQuality ]}>
                        {({ pressed }) => (
                            <Text style={[{ color: pressed ? '#000' : '#E1084D' }, styles.channelQualityText]}>
                            480
                            </Text>
                        )}
                        </Pressable>
                        <Pressable style={styles.channelQuality}>
                            <Text style={styles.channelQualityText}>720</Text>
                        </Pressable>
                        <Pressable style={styles.channelQuality}>
                            <Text style={styles.channelQualityText}>1080</Text>
                        </Pressable>
                    </View>
                    <View style={styles.dayBox}>
                        <View style={styles.dayDot}>
                        </View>
                            <Text style={styles.day}>Hozir efirda</Text>
                    </View>
                </View>
                <ScrollView style={styles.channelprograms}>
                    {
                        data.map((item, i) => {
                            if(item.live) {
                                return (
                                    <View style={styles.liveItem} key={i}>
                                        <Text style={styles.date}>{item.date}</Text>
                                        <View style={styles.liveTitle}>
                                            <Text style={styles.title}>{item.title}</Text>
                                            <Text style={styles.live}>●Hozir efirda</Text>
                                        </View>
                                    </View>
                                )
                            } else {
                                return (
                                    <View style={styles.item} key={i}>
                                        <Text style={styles.date}>{item.date}</Text>
                                        <Text style={styles.title}>{item.title}</Text>
                                    </View>
                                )
                            }
                        })
                    }
                </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imagebackground: {
        paddingHorizontal: 12,
        paddingTop: 100,
    },
    channelContainer: {
        width: '100%',
        borderRadius: 9,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingBottom: 5,
        shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 8,
        },
        shadowOpacity:  0.21,
        shadowRadius: 8.19,
        elevation: 11,
        marginBottom: 50,
    },
    channelImage: {
        width: '100%',
        height: 213,
        borderTopRightRadius: 9,
        borderTopLeftRadius: 9,
        marginBottom: 6,
    },
    channelLogo: {
        width: 134,
        height: 24,
    },
    playBtn: {
        position: 'absolute',
        top: '20%',
        left: '35%',
    },
    channelActivities: {
        width: '100%',
        paddingHorizontal: 12,
        backgroundColor: '#fff',
    },
    channelQualityContainer: {
        width: 306,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 4,
        backgroundColor: '#D1D6E0',
        borderRadius: 22
    },
    channelQuality: {
        width: 100,
        height: 39,
        paddingHorizontal: 30,
        paddingVertical: 12,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center',
    },
    channelQualityText: {
        fontSize: 11,
        fontWeight: 'bold',
    },
    channelprograms: {
        width: '100%',
        paddingHorizontal: 12,
        paddingTop: 20,
        backgroundColor: '#fff',
    },
    dayBox: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 8,
    },
    dayDot: {
        width: 23,
        height: 23,
        backgroundColor: '#FFA4C1',
        borderRadius: 23 / 2,
    },
    day: {
        fontSize: 16,
        fontWeight: '700',
        textTransform: 'uppercase',
        marginLeft: -12,
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        marginVertical: 10,
        paddingHorizontal: 10,
    },
    liveItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        backgroundColor: '#FFF0F0',
        paddingHorizontal: 12,
        borderRadius: 9,
    },
    liveTitle: {
        marginVertical: 10,
    },
    live: {
        color: '#FF0000',
    },
    dayBox: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 8,
    },
    dayDot: {
        width: 23,
        height: 23,
        backgroundColor: '#FFA4C1',
        borderRadius: 23 / 2,
    },
    day: {
        fontSize: 16,
        fontWeight: '700',
        textTransform: 'uppercase',
        marginLeft: -12,
    },
    date: {
        fontSize: 13,
        color: '#A8AEAF',
        marginRight: 12,
        fontWeight: '600',
    },
    title: {
        fontSize: 13,
        color: '#253536'
    }

});
