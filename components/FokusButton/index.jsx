import {StyleSheet, Pressable, Text} from "react-native";

export const StartStopButton = ({onPress, title, icon}) => {
    return (<Pressable style={styles.button} onPress={onPress}>
        {icon}
        <Text style={styles.button_text}>{title}</Text>
    </Pressable>)
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#B872FF",
        borderRadius: 32,
        padding: 8,
        flexDirection: "row",
        gap: 12,
        alignItems: "center",
        justifyContent: "center",
    },

    button_text: {
        fontSize: 18,
        color: "#021123",
        textAlign: "center",
    },
})
