import {Image, Text, View} from "react-native";
import {StartStopButton} from "../components/StartStopButton";
import {Footer} from "../components/Footer";

export default function Index() {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/logo.png')}/>
            <View style={styles.container_inner}>
                <Text style={styles.title}>
                    Otimize sua{'\n'}produtividade,{'\n'}
                    <Text style={styles.title_bold}>
                        mergulhe no que{'\n'}importa
                    </Text>
                </Text>
                <Image source={require('../assets/images/home.png')}/>
                <StartStopButton title="Quero iniciar!"/>
            </View>
            <Footer/>
        </View>
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
        fontSize: 26,
        textAlign: 'center',
        marginBottom: 20,
    },

    title_bold: {
        fontWeight: 'bold',
    },
}
