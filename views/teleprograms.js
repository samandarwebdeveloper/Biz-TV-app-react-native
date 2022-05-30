import React from 'react';
import { Text, View, SafeAreaView, Pressable, Image, StyleSheet, ScrollView, FlatList } from "react-native";

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
    }
]


export default function TelePrograms({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Pressable style={styles.backbtn} onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/left-arrow.png')} />
                </Pressable>
                <Text style={styles.headerText}>Teledasturlar</Text>
            </View>
            <ScrollView style={styles.textContainer}>
                <View style={styles.dayBox}>
                    <View style={styles.dayDot}>
                    </View>
                        <Text style={styles.day}>Dushanba</Text>
                </View>
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
                <View style={styles.dayBox}>
                    <View style={styles.dayDot}>
                    </View>
                        <Text style={styles.day}>Seshanba</Text>
                </View>
                {
                    data.map((item, i) => {
                        return <View style={styles.item} key={i}>
                            <Text style={styles.date}>{item.date}</Text>
                            <Text style={styles.title}>{item.title}</Text>
                        </View>
                    })
                }
                <View style={styles.dayBox}>
                    <View style={styles.dayDot}>
                    </View>
                        <Text style={styles.day}>Chorshanba</Text>
                </View>
                {
                    data.map((item, i) => {
                        return <View style={styles.item} key={i}>
                            <Text style={styles.date}>{item.date}</Text>
                            <Text style={styles.title}>{item.title}</Text>
                        </View>
                    })
                }
            </ScrollView>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        paddingBottom: 10,
        backgroundColor: '#fff',
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
    textContainer: {
        paddingHorizontal: 10,
    },
    item: {
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