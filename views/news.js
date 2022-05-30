import { View, Text, StyleSheet, FlatList, Pressable, Image  } from "react-native";
// import EStyleSheet from "react-native-extended-stylesheet";


export default function News({ navigation }) {
    return (
        <View style={styles.container}>
            <FlatList 
                data={[
                    {   
                        id: 1,
                        title: 'Barchasi',
                        background: '#FFF1F5',
                        color: '#E1084D'
                    },
                    {   
                        id: 2,
                        title: 'Madaniyat',
                        background: '#D8EAF2',
                        color: '#0071D4'
                    },
                    {   
                        id: 3,
                        title: 'Iqtisodiyot',
                        background: '#F3E9E4',
                        color: '#FA6400'
                    },
                    {   
                        id: 4,
                        title: 'Sport',
                        background: '#DCECE7',
                        color: '#12B649'
                    },
                    {   
                        id: 5,
                        title: 'Jamiyat',
                        background: '#EAE3F2',
                        color: '#793E9D'
                    },
                ]}
                horizontal={true}
                keyExtractor={item => item.id.toString()}
                showsHorizontalScrollIndicator={false}
                style={styles.list}
                renderItem={({item}) => {
                  return <Pressable style={[styles.item, {backgroundColor: item.background}]}>
                        <Text style={[styles.text, {color: item.color}]}>{item.title}</Text>
                    </Pressable>}}
            />
            <FlatList 
                data={[
                    {   
                        id: 1,
                        title: 'Qirg‘izistonda yana siyosiy inqiroz: Atamboyev nega taslim bo‘ldi?',
                        image: require('../assets/news1.png'),
                        date: 'ВЧЕРА, 23:00',
                        category: 'Sport',
                    },
                    {
                        id: 2,
                        title: 'Qirg‘izistonda yana siyosiy inqiroz: Atamboyev nega taslim bo‘ldi?',
                        image: require('../assets/news2.png'),
                        date: 'ВЧЕРА, 23:00',
                        category: 'Sport',
                    }, 
                    {
                        id: 3,
                        title: 'Qirg‘izistonda yana siyosiy inqiroz: Atamboyev nega taslim bo‘ldi?',
                        image: require('../assets/news3.png'),
                        date: 'ВЧЕРА, 23:00',
                        category: 'Sport',
                    }, 
                    {
                        id: 4,
                        title: 'Qirg‘izistonda yana siyosiy inqiroz: Atamboyev nega taslim bo‘ldi?',
                        image: require('../assets/news4.png'),
                        date: 'ВЧЕРА, 23:00',
                        category: 'Sport',
                    },
                    {
                        id: 5,
                        title: 'Qirg‘izistonda yana siyosiy inqiroz: Atamboyev nega taslim bo‘ldi?',
                        image: require('../assets/news5.png'),
                        date: 'ВЧЕРА, 23:00',
                        category: 'Sport',
                    },
                    {
                        id: 6,
                        title: 'Qirg‘izistonda yana siyosiy inqiroz: Atamboyev nega taslim bo‘ldi?',
                        image: require('../assets/news5.png'),
                        date: 'ВЧЕРА, 23:00',
                        category: 'Sport',
                    },
                    {
                        id: 7,
                        title: 'Qirg‘izistonda yana siyosiy inqiroz: Atamboyev nega taslim bo‘ldi?',
                        image: require('../assets/news5.png'),
                        date: 'ВЧЕРА, 23:00',
                        category: 'Sport',
                    }
                ]}
                keyExtractor={item => item.id.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => {
                    if(item.id == 1) {
                        return <Pressable onPress={() => navigation.navigate("CurrentNew")} style={styles.itemBig}>
                            <Image source={item.image} style={styles.bigImage}/>
                            <View style={styles.itemText}>
                                <Text style={styles.title}>{item.title}</Text>
                                <View style={styles.dateCategory}>
                                    <Text style={styles.category}>{item.category}</Text>
                                    <Text style={styles.date}>{item.date}</Text>
                                </View>
                            </View>
                        </Pressable>
                    } else {
                        return <Pressable onPress={() => navigation.navigate("CurrentNew")} style={styles.news}>
                            <Image source={item.image} style={styles.newsImage}/>
                            <View style={styles.itemText}>
                                <Text style={styles.title}>{item.title}</Text>
                                <View style={styles.dateCategory}>
                                    <Text style={styles.category}>{item.category}</Text>
                                    <Text style={styles.date}>{item.date}</Text>
                                </View>
                            </View>
                        </Pressable>
                    }
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingBottom: 45,
    },
    list: {
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 5,
    },
    item: {
        paddingHorizontal: 20,
        paddingVertical: 5,
        marginRight: 10,
        borderRadius: 5,
    },
    text: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    itemBig: {
        marginTop: 12,
        paddingHorizontal: 20,
    },
    news: {
        flexDirection: 'row',
        width: '100%',
        marginVertical: 9,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    bigImage: {
        width: '100%',
        height: 214,
        borderRadius: 5,
        marginBottom: 8,
    },
    newsImage: {
        width: 93,
        height: 70,
        marginRight: 10,
        borderRadius: 5,
    },
    itemText: {
        flex: 1,
    },
    title: {
        fontSize: 13,
        fontWeight: '700',
        marginBottom: 8,
        color: '#253536',
    },
    dateCategory: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    category: {
        backgroundColor: '#E8F8F2',
        color: '#1FB884',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 3,
        marginRight: 10,
        fontWeight: 'bold',
    },
    date: {
        fontSize: 12,
        color: '#8E8E8E',
    }

});