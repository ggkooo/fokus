import {Image, Pressable, StyleSheet, Text, View} from "react-native";

export default function Index() {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/images/pomodoro.png')}/>
            <View style={styles.container_actions}>
                <View style={styles.container_actions_buttons}>
                    <Pressable style={styles.container_actions_buttons_button_active}>
                        <Text style={styles.container_actions_buttons_button_text}>Foco</Text>
                    </Pressable>
                    <Pressable style={styles.container_actions_buttons_button}>
                        <Text style={styles.container_actions_buttons_button_text}>Pausa Curta</Text>
                    </Pressable>
                    <Pressable style={styles.container_actions_buttons_button}>
                        <Text style={styles.container_actions_buttons_button_text}>Pausa Longa</Text>
                    </Pressable>
                </View>
                <Text style={styles.container_actions_text}>25:00</Text>
                <Pressable style={styles.container_actions_button}>
                    <Text style={styles.container_actions_button_text}>Comecar</Text>
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

    container_actions_buttons: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },

    container_actions_buttons_button: {
        padding: 8,
    },

    container_actions_buttons_button_active: {
        backgroundColor: "#144480",
        padding: 8,
        borderRadius: 8,
    },

    container_actions_buttons_button_text: {
        color: "#fff",
        fontSize: 13,
    },

    container_actions: {
        backgroundColor: "#14448080",
        width: "80%",
        borderRadius: 32,
        padding: 24,
        borderWidth: 1,
        borderColor: "#144480",
        gap: 32,
    },

    container_actions_text: {
        color: "#fff",
        textAlign: "center",
        fontSize: 54,
        fontWeight: "bold",
    },

    container_actions_button: {
        backgroundColor: "#B872FF",
        borderRadius: 32,
    },

    container_actions_button_text: {
        color: "#000",
        fontSize: 18,
        textAlign: "center",
        padding: 8,
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
