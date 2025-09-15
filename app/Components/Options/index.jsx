import {StyleSheet, Pressable, Text} from "react-native";

export const Options = ({active, onPress, display}) => {
    return (
            <Pressable style={active ? styles.button_active : styles.button} onPress={onPress}>
                <Text style={styles.button_text}>{display}</Text>
            </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 8,
    },

    button_active: {
        backgroundColor: "#144480",
        padding: 8,
        borderRadius: 8,
    },

    button_text: {
        color: "#fff",
        fontSize: 13,
    },
})
