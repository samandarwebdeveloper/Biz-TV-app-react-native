import React, { useState } from "react";
import { ImageBackground, View, Linking, StyleSheet, Text, Pressable, Image, Switch } from "react-native";


export default function Another({ navigation }) {

    const [isEnabled, setIsEnabled] = useState(true);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <ImageBackground style={styles.container} source={require("../assets/background.png")}>
            <View style={styles.socialBox}>
                <Pressable style={styles.socialLinks}
                 onPress={() => Linking.openURL('http://facebook.com')}>
                    <Image source={require('../assets/facebook.png')} />
                 </Pressable>
                 <Pressable style={styles.socialLinks}
                 onPress={() => Linking.openURL('https://myaccount.google.com/profile')}>
                    <Image source={require('../assets/google-plus.png')} />
                 </Pressable>
                 <Pressable style={styles.socialLinks}
                 onPress={() => Linking.openURL('http://twitter.com')}>
                    <Image source={require('../assets/twitter.png')} />
                 </Pressable>
                 <Pressable style={styles.socialLinks}
                 onPress={() => Linking.openURL('http://instagram.com')}>
                    <Image source={require('../assets/instagram.png')} />
                 </Pressable>
                 <Pressable style={styles.socialLinks}
                 onPress={() => Linking.openURL('http://rss.com')}>
                    <Image source={require('../assets/rss.png')} />
                 </Pressable>
            </View>
            <View style={styles.actionsContainer}>
                <Pressable onPress={() => navigation.navigate("Teleprograms")} style={styles.actions}>
                    <Image style={{width: 24, height: 10.49, marginRight: 18}} source={require('../assets/biz-tv.pink.png')} />
                    <Text style={styles.actionsText}>Teledasturlar</Text>
                </Pressable>
                <View style={styles.actions}>
                    <Image style={{width: 27, height: 19.83, marginRight: 16}} source={require('../assets/loud.png')} />
                    <Text style={styles.actionsText}>Reklama</Text>
                </View>
                <View style={styles.actions}>
                    <Image style={{width: 20, height: 20, marginRight: 24}} source={require('../assets/placeholder.png')} />
                    <Text style={styles.actionsText}>Biz bilan aloqa</Text>
                </View>
            </View>
            <View style={styles.otherActionsContainer}>
                <Pressable onPress={() => navigation.navigate("About")} style={[styles.otherActions, { borderBottomWidth: 1, borderBottomColor: '#EFF4FB'}]}>
                    <Text style={styles.otherActionsText}>Loyiha haqida</Text>
                </Pressable>
                <View style={[styles.otherActions, { borderBottomWidth: 1, borderBottomColor: '#EFF4FB'}]}>
                    <Text style={styles.otherActionsText}>Foydalanish shartlari</Text>
                </View>
                <View style={styles.otherActions}>
                    <Text style={styles.otherActionsText}>Bildirishnomalar</Text>
                    <Switch 
                        style={styles.otherActionsSwitch} 
                        trackColor={{ false: "#767577", true: "#FFA4C1" }}
                        thumbColor={isEnabled ? "#fff" : "#fff"}
                        ios_backgroundColor="#FFA4C1"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
            </View>
        </ImageBackground>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 23,
        paddingTop: 180,
        alignItems: "center",
    },
    socialBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: '#E4E6EB',
        padding: 2.5,
        borderRadius: 22
    },
    socialLinks: {
        width: 45,
        height: 38,
        backgroundColor: '#FBFBFB',
        borderRadius: 19,
        margin: 2.5,
        justifyContent: "center",
        alignItems: "center"
    },
    actionsContainer: {
        width: "100%",
        marginTop: 20,
    },
    actions: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        padding: 20,
        marginVertical: 5,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    actionsText: {
        fontSize: 16,
    },
    otherActionsContainer: {
        flexDirection: "column",
        width: "100%",
        backgroundColor: '#fff',
        marginTop: 30,
        paddingLeft: 25,
        paddingVertical: 7,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    otherActions: {
        paddingVertical: 20,
        paddingRight: 22,
    },
    otherActionsText: {
        fontSize: 16,
    },
    otherActionsSwitch: {
        position: 'absolute',
        right: 20,
        top: 0,
        bottom: 0,
        margin: 0,
        transform: [{ scaleX: 1.5 }, { scaleY: 1.4 }]
    }

});