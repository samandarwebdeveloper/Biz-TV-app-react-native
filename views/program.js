import { ScrollView, View, Image, Text, StyleSheet, Pressable } from "react-native"

const data = [
    {
        id: 1,
        title: 'Markaziy studiya 839 soni',
        image: require('../assets/allprogram1.png'),
        likes: 154,
        date: '09.01.2018 10:08' 
    },
    {
        id: 2,
        title: 'Markaziy studiya 839 soni',
        image: require('../assets/allprogram2.png'),
        likes: 124,
        date: '09.01.2018 10:20'
    },
    {
        id: 3,
        title: 'Markaziy studiya 839 soni',
        image: require('../assets/allprogram3.png'),
        likes: 224,
        date: '09.01.2018 12:08'
    }
]

export default function Program({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Pressable style={styles.backbtn} onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/left-arrow.png')} />
                </Pressable>
                <Text style={styles.headerText}>Markaziy studiya</Text>
            </View>
            <ScrollView style={styles.Scrollcontainer}>
                {
                    data.map((item, i) => {
                        return (
                            <View key={i} style={styles.item}>
                                <Image style={styles.itemImage} source={item.image} />
                                <View style={styles.itemText}>
                                    <Text style={styles.itemTitle}>{item.title}</Text>
                                </View>
                                <View style={styles.itemActions}>
                                    <View style={styles.itemActionBtns}>
                                        <Image style={styles.itemActionBtn} source={require('../assets/share.png')} />
                                        <Image style={styles.itemActionBtn} source={require('../assets/like.png')} />
                                        <Text style={styles.itemLikes}>{item.likes}</Text>
                                    </View>
                                    <Text style={styles.itemDate}>{item.date}</Text>
                                </View>
                                <Pressable style={styles.playBtn} onPress={() => navigation.navigate("ChannelVideo")}>
                                    <Image style={styles.itemPlay} source={require('../assets/videoPlay.png')} />
                                </Pressable>
                            </View>
                        )
                    }
                )}
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 35
    },  
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,

    },
    backbtn: {
        position: 'absolute',
        width: 40,
        height: 40,
        left: 20,
        backgroundColor: '#FFE7EE',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    headerText: {
        fontSize: 13,
        textAlign: 'center',
    },
    Scrollcontainer: {
        width: '100%',
    },
    item: {
        width: '100%',
        paddingHorizontal: 20,
        marginVertical: 5,
    },
    itemImage: {
        width: '100%',
        height: 215,
        borderRadius: 10,
    },
    itemText: {
        paddingVertical: 10,
    },
    itemTitle: {
        fontSize: 14,
        color: '#2945AB'
    },
    itemActions: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    itemActionBtns: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemActionBtn: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    itemDate: {
        fontSize: 12,
        color: '#75758C'
    },
    playBtn: {
        position: 'absolute',
        top: '30%',
        left: '50%',
    },  
    itemPlay: {
        width: 46,
        height: 46,
    }

})