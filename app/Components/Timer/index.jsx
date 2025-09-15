import {StyleSheet, Text} from "react-native";

export const Timer = ({currentTime}) => {
    const date = new Date(currentTime * 1000)
    const options = {minute: '2-digit', second: '2-digit'};

    return (
        <Text style={styles.timer}>{date.toLocaleTimeString('pt-BR', options)}</Text>
    );
}

const styles = StyleSheet.create({
    timer: {
        color: "#fff",
        textAlign: "center",
        fontSize: 54,
        fontWeight: "bold",
    },
})
