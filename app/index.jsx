import {Image, SafeAreaView, Text, View} from "react-native";
import {StartStopButton} from "../components/StartStopButton";
import {Footer} from "../components/Footer";
import {router} from "expo-router";

export default function Index() {
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../assets/images/logo.png')}/>
            <View style={styles.container_inner}>
                <Text style={styles.title}>
                    Otimize sua{'\n'}produtividade,{'\n'}
                    <Text style={styles.title_bold}>
                        mergulhe no que{'\n'}importa
                    </Text>
                </Text>
                <Image source={require('../assets/images/home.png')}/>
                <StartStopButton title="Quero iniciar!" onPress={() => router.replace('/pomodoro')}/>
            </View>
            <Footer/>
        </SafeAreaView>
    )
}

const styles = {
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#021123",
        gap: 40,
    },

    container_inner: {
        gap: 16,
    },

    title: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,
    },

    title_bold: {
        fontWeight: 'bold',
    },
}
