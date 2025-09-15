import {StyleSheet, Text, View} from "react-native";

export const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.footer_text}>
                Projeto desenvolvidor por{'\n'}
                <Text style={styles.footer_text_active}>Giordano Bruno Biasi Berwig</Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        position: "absolute",
        bottom: 8,
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
