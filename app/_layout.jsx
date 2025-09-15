import {Drawer} from 'expo-router/drawer';

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
            }}
        />
    </Drawer>;
}
