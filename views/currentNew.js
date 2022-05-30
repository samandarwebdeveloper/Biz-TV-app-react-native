import React from 'react';
import { Text, View, SafeAreaView, Pressable, Image, StyleSheet, ScrollView } from "react-native";


export default function CurrentNew({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Pressable style={styles.backbtn} onPress={() => navigation.goBack()}>
                <Image source={require('../assets/left-arrow.png')} />
            </Pressable>
            <ScrollView style={styles.newsContainer}>
            <Image source={require('../assets/news1.png')} style={styles.newsImage} />
                <View style={styles.newsTextContainer}>
                    <Text style={styles.newsTitle}>
                    Qirg‘izistonda yana siyosiy inqiroz: Atamboyev nega taslim bo‘ldi?
                    </Text>
                    <Text style={styles.text}>— O‘zbekistonga qaytishni xohlagan xorijdagi fuqarolarning katta qismi Rossiya Federatsiyasi hissasiga to‘g‘ri keladi. E'lon qilingan parvozlar ro‘yxatida Rossiyaning 8 ta shaharlaridan 11-24 may oralig‘ida charter reyslar amalga oshiriladi. Albatta, bu 8 ta aviareyslar orqali barcha fuqarolarni olib kelishning imkoniyati yo‘q. Buni fuqarolar to‘g‘ri tushunishlari lozim. Konsulliklar va elchixonalarimiz orqali qaytish istagida bo‘lgan fuqarolarning ro‘yxati shakllantirib borilyapti. Ro‘yxatdan o‘tgan barcha fuqarolarni charter reyslar orqali olib kelishga harakat qilinadi. Ulardan bizni to‘g‘ri tushungan holda sabrli bo‘lishni so‘raymiz.</Text>
                    <Text style={styles.text}>— Qozog‘iston chegarasida yuzlab o‘zbekistonliklar o‘z avtomashinalarida O‘zbekistonga o‘tish uchun ruxsat berilishini kutmoqda. Transport vazirligi bu masalada qo‘shnilar bilan aloqa o‘rnatdimi?</Text>
                    <Text style={styles.text}>— Qozog‘iston va Rossiya chegarasida taksi xizmatini ko‘rsatuvchi bir necha yuzlab fuqarolarimiz to‘planib qolgan va buni ijtimoiy tarmoqlarda videomurojaatlar orqali chiqishlarda bevosita guvohi bo‘ldik. Bu bo‘yicha  Transport vazirligi tegishli idoralar bilan hamkorlikda ushbu masalaga yechim topish ustida ishlayapti.  Bir jihatni alohida ta'kidlash kerak: ushbu fuqarolar Rossiya va Qozog‘istonda belgilangan karantin talablarini qo‘pol ravishda buzib harakatlanishmoqda. Qaytaraman, bu borada muzokaralar boshlandi.</Text>
                    <Text style={styles.text}>— Rossiyada moddiy jihatdan qiyin ahvolga tushib qolgan va aviachipta uchun puli qolmagan vatandoshlarningO‘zbekistonga qaytib olishlari uchun vazirlik tomonidan ko‘mak beriladimi?</Text>
                    <Text style={styles.text}>— O‘zbekistonga qaytish istagida bo‘lgan, ammo aviachipta xarid qilishga imkoniyati bo‘lmagan fuqarolar masalasi individual tarzda o‘rganiladi va imkon qadar ijobiy hal qilishga harakat qilinadi.</Text>
                    <Text style={styles.text}>—O‘zbekistonga qaytarilgan fuqarolar maxsus dala shifoxonalariga joylashtirilishi aytilgan. Ayni paytda ular barcha qaytarilganlarni qabul qila oladimi?</Text>
                    <Text style={styles.text}>— Xorijdan charter reyslarda kelgan fuqarolarimiz 14 kun mobaynida karantin hududiga joylashtiriladi. Bunda joy yetishmovchiligi muammosi bo‘lmaydi.
                            Ilyos Safarov suhbatlashdi.</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    backbtn: {
        position: 'absolute',
        width: 40,
        height: 40,
        top: 50,
        left: 20,
        backgroundColor: '#FFE7EE',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        zIndex: 999
    },
    newsImage: {
        width: '100%',
        height: 234,
        borderRadius: 10,
    },
    newsContainer: {
        flex: 1,
    },
    newsTextContainer: {
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    newsTitle: {
        fontSize: 18,
        color: '#253536',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        fontSize: 14,
        lineHeight: 24,
        marginBottom: 20,
    }
});