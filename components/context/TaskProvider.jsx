import {createContext, useEffect, useState} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const TaskContext = createContext()

export function TasksProvider({children}) {

    const [tasks, setTasks] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    const TASKS_STORAGE_KEY = 'fokus-tasks'

    useEffect(() => {
        const getData = async () => {
            try {
                const jsonValue = await AsyncStorage.getItem(TASKS_STORAGE_KEY);
                const loadedData = jsonValue != null ? JSON.parse(jsonValue) : [];
                setTasks(loadedData)
                setIsLoaded(true)
            } catch (e) {
                // error reading value
            }
        };
        getData()
    }, []);

    useEffect(() => {
        const storeData = async (value) => {
            try {
                const jsonValue = JSON.stringify(value);
                await AsyncStorage.setItem(TASKS_STORAGE_KEY, jsonValue);
            } catch (e) {
                // saving error
            }
        };

        if (isLoaded) {
            storeData(tasks)
        }
    }, [tasks]);

    const addTask = (description) => {
        setTasks(oldState => {
            return [
                ...oldState,
                {
                    description,
                    id: oldState.length + 1,
                    completed: false,
                }
            ]
        })
    }

    const toggleTaskCompleted = (id) => {
        setTasks(oldState => {
            return oldState.map(task => {
                if (task.id === id) {
                    return {...task, completed: !task.completed}
                }
                return task
            })
        })
    }

    const deleteTask = (id) => {
        setTasks(oldState => {
            return oldState.filter(task => task.id !== id)
        })
    }

    return (
        <TaskContext.Provider value={{tasks, addTask, toggleTaskCompleted, deleteTask}}>
            {children}
        </TaskContext.Provider>
    )
}
