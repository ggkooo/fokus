import {Drawer} from 'expo-router/drawer';
import { router } from "expo-router";
import {Ionicons} from "@expo/vector-icons";

export default function Layout() {
    return <Drawer
        screenOptions={{
            headerStyle: {
                backgroundColor: '#021123',
            },
            headerTintColor: '#FFFFFF',
            drawerStyle: {
                backgroundColor: '#021123',
            },
            drawerLabelStyle: {
                color: '#FFFFFF',
            }
        }}>
        <Drawer.Screen
            name={'index'}
            options={{
                headerShown: false,
                drawerItemStyle: {display: 'none'},
            }}
        />

        <Drawer.Screen
            name={'pomodoro'}
            options={{
                headerShown: true,
                drawerLabel: 'Timer',
                title: 'Pomodoro Timer',
            }}
        />

        <Drawer.Screen
            name={'tasks'}
            options={{
                headerShown: true,
                drawerLabel: 'Lista de Tarefas',
                title: 'Minhas Tarefas',
            }}
        />

        <Drawer.Screen
            name={'add-task'}
            options={{
                drawerItemStyle: {display: 'none'},
                title: '',
                headerLeft: () => {
                    return <Ionicons
                        name="arrow-back"
                        size={24}
                        color="#FFFFFF"
                        style={{marginLeft: 16}}
                        onPress={() => router.navigate('/tasks')}
                    />
                }
            }}
        />
    </Drawer>;
}
