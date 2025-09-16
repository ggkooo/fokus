import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View
} from "react-native";
import {IconSave} from "../components/Icons";
import useTaskContext from "../components/context/useTaskContext";
import {useState} from "react";
import {router} from "expo-router";

export default function AddTaks() {

    const [description, setDescription] = useState();

    const {addTask} = useTaskContext();

    const submitTask = () => {
        if (!description) {
            return
        }
        addTask(description);
        setDescription('');
        // @ts-ignore
        Keyboard.dismiss();
        router.navigate('/tasks')
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            // @ts-ignore
            Keyboard.dismiss();
        }}>
            <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <Text style={styles.text}>
                    Adicionar uma tarefa:
                </Text>
                <View style={styles.container_inner}>
                    <Text style={styles.label}>
                        Em que você está pensando?
                    </Text>
                    <TextInput
                        style={styles.input}
                        numberOfLines={10}
                        multiline={true}
                        value={description}
                        onChangeText={setDescription}
                    />
                    <Pressable style={styles.save_button} onPress={submitTask}>
                        <IconSave/>
                        <Text>
                            Salvar
                        </Text>
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#021123',
        gap: 24,
        alignItems: "center",
    },

    text: {
        color: '#FFF',
        fontSize: 24,
        textAlign: "center",
    },

    container_inner: {
        backgroundColor: '#98A0A8',
        width: "90%",
        padding: 16,
        borderRadius: 8,
        gap: 32,
    },

    label: {
        color: '#021123',
        fontSize: 18,
        fontWeight: "600",
    },

    input: {
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 8,
        height: 150,
    },

    save_button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 8,
    },
})
