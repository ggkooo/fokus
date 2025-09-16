import {StyleSheet, Text, View} from "react-native";
import {TaskItem} from "../components/TaskItem";
import {FokusButton} from "../components/FokusButton";
import {IconPlus} from "../components/Icons";

export default function Tasks() {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>Lista de Tarefas:</Text>
                <View style={styles.container_inner}>
                    <TaskItem text={"Aprender React Native"}/>
                    <TaskItem completed text={"Aprender React"}/>
                </View>
                <FokusButton title={"Adicionar nova tarefa"} icon={<IconPlus outline/>} outline/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#021123",
        alignItems: "center",
    },

    wrapper: {
        gap: 40,
        width: "90%",
    },

    title: {
        fontSize: 26,
        color: "#FFF",
        textAlign: "center",
    },

    container_inner: {
        gap: 8
    },
})
