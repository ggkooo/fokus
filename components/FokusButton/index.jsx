import {StyleSheet, Pressable, Text} from "react-native";

export const FokusButton = ({onPress, title, icon, outline}) => {
    return (
        <Pressable style={[styles.button, outline && styles.button_outline]} onPress={onPress}>
            {icon}
            <Text style={[styles.button_text, outline && styles.button_text_outline]}>{title}</Text>
        </Pressable>
    )
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

    button_outline: {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: "#B872FF",
    },

    button_text: {
        fontSize: 18,
        color: "#021123",
        textAlign: "center",
    },

    button_text_outline: {
        color: "#B872FF",
    },
})
