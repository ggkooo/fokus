import {FlatList, StyleSheet, Text, View} from "react-native";
import {router} from "expo-router";
import {TaskItem} from "../components/TaskItem";
import {FokusButton} from "../components/FokusButton";
import {IconPlus} from "../components/Icons";
import useTaskContext from "../components/context/useTaskContext";

export default function Tasks() {

    const {tasks, deleteTask, toggleTaskCompleted} = useTaskContext()

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>Lista de Tarefas:</Text>
                <View style={styles.container_inner}>
                    <FlatList
                        data={tasks}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) =>
                            <TaskItem
                                text={item.description}
                                completed={item.completed}
                                onPressDelete={() => deleteTask(item.id)}
                                onToggleComplete={() => toggleTaskCompleted(item.id)}
                                onPressEdit={() => router.navigate(`/edit-task/${item.id}`)}
                            />
                        }
                        ItemSeparatorComponent={() =>
                            <View
                                style={{height: 8}}
                            />
                        }
                        ListEmptyComponent={() =>
                            <Text style={{color: "#FFF", textAlign: "center"}}>
                                Nenhuma tarefa encontrada.
                            </Text>
                        }
                        ListFooterComponent={
                            <View style={{marginTop: 16}}>
                                <FokusButton
                                    title={"Adicionar nova tarefa"}
                                    icon={<IconPlus outline/>}
                                    outline
                                    onPress={() => router.navigate('/add-task')}
                                />
                            </View>
                        }
                    />
                </View>
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
        gap: 8,
        height: "85%"
    },
})
