import {StyleSheet, Pressable, Text} from "react-native";

export const StartStopButton = () => {
    return (<Pressable style={styles.button}>
        <Text style={styles.button_text}>Comecar</Text>
    </Pressable>)
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#B872FF",
        borderRadius: 32,
    },

    button_text: {
        color: "#000",
        fontSize: 18,
        textAlign: "center",
        padding: 8,
    },
})
