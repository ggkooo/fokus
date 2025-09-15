import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import {Footer} from "./Components/Footer";
import {Timer} from "./Components/Timer";
import {Options} from "./Components/Options";
import {useState} from "react";
import {StartStopButton} from "./Components/StartStopButton";

const pomodoro = [
    {
        id: "focus",
        name: "Foco",
        time: 25,
        img: require('../assets/images/pomodoro.png'),
    },
    {
        id: "short",
        name: "Pausa Curta",
        time: 5,
        img: require('../assets/images/short.png'),
    },
    {
        id: "long",
        name: "Pausa Longa",
        time: 15,
        img: require('../assets/images/long.png'),
    }
]

export default function Index() {

    const [selectedTime, setSelectedTime] = useState(pomodoro[0]);

    return (
        <View style={styles.container}>
            <Image source={selectedTime.img}/>
            <View style={styles.container_actions}>
                <View style={styles.container_actions_buttons}>
                    {pomodoro.map(p => (
                        <Options
                            key={ p.id }
                            active={ selectedTime.id === p.id }
                            onPress={ () => setSelectedTime(p) }
                            display={ p.name }
                        />
                    ))}
                </View>
                <Timer
                    currentTime={selectedTime.time}
                />
                <StartStopButton/>
            </View>
            <Footer/>
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
        gap: 32,
    },

    container_actions_buttons: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
})
