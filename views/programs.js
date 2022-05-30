import { ScrollView, View, Text, StyleSheet, Pressable, ImageBackground } from "react-native"

const data = [
    {
        id: 1,
        title: 'Markaziy studiya',
        image: require('../assets/program1.png')
    },
    {
        id: 2,
        title: 'Ramazon oyi tuhfasi',
        image: require('../assets/program2.png')
    },
    {
        id: 3,
        title: 'Markaziy studiya',
        image: require('../assets/program3.png')
    },
    {
        id: 4,
        title: 'Markaziy studiya',
        image: require('../assets/program4.png')
    },
    {
        id: 5,
        title: 'Ramazon oyi tuhfasi',
        image: require('../assets/program5.png')
    },
    {
        id: 6,
        title: 'Markaziy studiya',
        image: require('../assets/program6.png')
    }
]

export default function Programs({ navigation }) {
    return (
        <View style={styles.container}>
                {
                    data.map((item, i) => {
                        return (
                            <Pressable onPress={() => navigation.navigate("Program")} style={styles.item} key={i} >
                                <ImageBackground source={item.image} style={styles.image}>
                                    <Text style={styles.title}>{item.title}</Text>
                                </ImageBackground>
                            </Pressable>
                        )
                    }
                )}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingBottom: 10,
        paddingHorizontal: 10,
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    item: {
        width: '49%',
        height: 210,
        borderRadius: 10,
        marginVertical: 10,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%',
    },
    title: {
        position: 'absolute',
        left: 5,
        bottom: 5,
        color: '#fff',
        textTransform: 'uppercase',
        fontSize: 24,
        fontWeight: 'bold',
    }

})