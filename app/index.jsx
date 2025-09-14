import {Image, Pressable, StyleSheet, Text, View} from "react-native";

export default function Index() {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/pomodoro.png')}/>
            <View style={styles.container_actions}>
                <Text style={styles.container_actions_text}>25:00</Text>
                <Pressable>
                    <Text>Comecar</Text>
                </Pressable>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footer_text}>Projeto desenvolvidor por </Text>
                <Text style={styles.footer_text_active}>Giordano Bruno Biasi Berwig</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#021123",
        gap: 40,
    },

    container_actions: {
        backgroundColor: "#14448080",
        width: "80%",
        borderRadius: 32,
        padding: 24,
        borderWidth: 1,
        borderColor: "#144480",
    },

    container_actions_text: {
        color: "#fff",
        textAlign: "center",
        fontSize: 54,
        fontWeight: "bold",
    },

    footer: {
        position: "absolute",
        bottom: 32,
    },

    footer_text: {
        color: "#686868",
        textAlign: "center",
    },

    footer_text_active: {
        color: "#686868",
        textAlign: "center",
        fontWeight: "bold",
    },
})
