import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { RegistroScreen } from '../screens/RegistroScreen';
import { useState } from 'react';
import { ProductosScreen } from '../screens/ProductosScreen';
import { styles } from '../themes/appThemes';



//VARIABLES QUE SE HEREDAN Y REVISAN EN LOGIN Y REGISTROS, SE DEBE EXPORTAR
export interface User {
    id: number,
    nombreStack: string;
    apellidoStack: string;
    usuarioStack: string;
    correoElectronicoStack: string;
    contrasenaStack: string;
    confirmarContrasenaStack: string;
}


//USUARIOS FIJOS Y QEU NO ELIMINAN AA RECARGAR LA PAGINA
const users: User[] = [
    {
        id: 1,
        nombreStack: "Daniel",
        apellidoStack: "Solis",
        usuarioStack: "1",
        correoElectronicoStack: "1",
        contrasenaStack: "1",
        confirmarContrasenaStack: "1",
    },
    {
        id: 2,
        nombreStack: "Sofia",
        apellidoStack: "García",
        usuarioStack: "sog",
        correoElectronicoStack: "sog11@gmail.com",
        contrasenaStack: "23456",
        confirmarContrasenaStack: "23456",
    },
    
]

//CREAR VARIABLE PARA NAVEGAR ENTRE SCREENS
const Stack = createStackNavigator();

export const StackNavigator = () => {

    //CONTROLA LOS USUARIOS REGISTRADOS
    const [userManager, setUserManager] = useState<User[]>(users)


    //FUNCION PARA AÑADIR USUARIOS
    const agregarUsuarioStack = (user: User): void => {
        setUserManager([...userManager, user])
    }

    return (
        <Stack.Navigator
            initialRouteName='loginScreen'
            screenOptions={{
                headerStyle: {
                    elevation: 10
                },
                headerShown: true,
                cardStyle: {
                    backgroundColor: 'white'
                }
            }}>
                
            <Stack.Screen name="loginScreen"
                options={{
                    title: 'Iniciar sesión',
                    headerTitleStyle: styles.titulosVentanas,
                    headerTitleAlign: "center",
                }}
                //PERMITE HEREDAR LOS DATOS CON LA SCREEN
                children={() => <LoginScreen users={userManager} />} />
            <Stack.Screen name="registroScreen"
                options={{
                    title: 'Registro',
                    headerTitleStyle: styles.titulosVentanas,
                    headerTitleAlign: "center",
                    
                }}
                //PERMITE HEREDAR LOS DATOS CON LA SCREEN Y LA FUCION DE AÑADIR
                children={() => <RegistroScreen users={userManager} addUsers={agregarUsuarioStack} />} />

            <Stack.Screen name="productosScreen"
                options={{
                    title: 'Productos',
                    headerTitleStyle: styles.titulosVentanas,
                    headerTitleAlign: "center",
                }}
                component={ProductosScreen} />
        </Stack.Navigator>
    );
}
