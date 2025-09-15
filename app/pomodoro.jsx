import {Image, StyleSheet, View} from "react-native";
import {Footer} from "../components/Footer";
import {Timer} from "../components/Timer";
import {Options} from "../components/Options";
import {IconPlay, IconPause} from "../components/Icons";
import {useRef, useState} from "react";
import {StartStopButton} from "../components/StartStopButton";

const pomodoro = [
    {
        id: "focus",
        name: "Foco",
        time: 25 * 60,
        img: require('../assets/images/pomodoro.png'),
    },
    {
        id: "short",
        name: "Pausa Curta",
        time: 5 * 60,
        img: require('../assets/images/short.png'),
    },
    {
        id: "long",
        name: "Pausa Longa",
        time: 15 * 60,
        img: require('../assets/images/long.png'),
    }
]

export default function Pomodoro() {

    const [selectedTime, setSelectedTime] = useState(pomodoro[0]);
    const [timerRunnig, setTimerRunnig] = useState(false);
    const [second, setSecond] = useState(pomodoro[0].time);

    const timerRef = useRef(null);

    const clear = () => {
        if (timerRef.current != null) {
            clearInterval(timerRef.current)
            timerRef.current = null
            setTimerRunnig(false)
        }
    }

    const toggleTimerType = (newTimerType) => {
        setSelectedTime(newTimerType);
        setSecond(newTimerType.time);
        clear()
    }

    const toggleTimer = () => {
        if (timerRef.current) {
            clear()
            return
        }

        setTimerRunnig(true)

        const id = setInterval(() => {
            setSecond(oldState => {
                if (oldState === 0) {
                    clear()
                    return selectedTime.time
                }
                return oldState - 1
            })
        }, 1000)
        timerRef.current = id
    }

    return (
        <View style={styles.container}>
            <Image source={selectedTime.img}/>
            <View style={styles.container_actions}>
                <View style={styles.container_actions_buttons}>
                    {pomodoro.map(p => (
                        <Options
                            key={p.id}
                            active={selectedTime.id === p.id}
                            onPress={() => toggleTimerType(p)}
                            display={p.name}
                        />
                    ))}
                </View>
                <Timer
                    currentTime={second}
                />
                <StartStopButton onPress={toggleTimer} title={timerRunnig ? 'Pausar' : 'Começar'}
                                 icon={timerRunnig ? <IconPause/> : <IconPlay/>}/>
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
