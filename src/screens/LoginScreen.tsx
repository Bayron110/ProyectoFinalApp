import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ImageBackground, Alert, StatusBar } from 'react-native';

import { styles } from '../themes/appThemes';
import Icon from 'react-native-vector-icons/MaterialIcons'

import { CommonActions, useNavigation } from '@react-navigation/native';
import { InputLogin } from '../components/InputLogin';
import { User } from '../navigator/StackNavigator';


//CREAR INTERFAZ E IMPORTAR USER[] DESDE STACK NAVIGATOR
interface Props {
    users: User[];
}


//INTERFAZ PARA LAS VARIABLES DEL LOGIN
interface LoginForm {
    correoElectronicoLogin: string,
    contrasenaLogin: string,
}

export const LoginScreen = ({ users }: Props) => {


    const [loginForm, setLoginForm] = useState<LoginForm>({
        correoElectronicoLogin: "",
        contrasenaLogin: "",
    })


    const [ocultarContrasenaLogin, setOcultarContrasenaLogin] = useState<boolean>(true);

    const navigation = useNavigation()

    //FUNCION PARA CONTORLAS LAS CARACTERES INGRESADOS
    const handledChange = (name: string, value: string) => {
        console.log(name, value);
        setLoginForm({ ...loginForm, [name]: value });
    }

    //FUNCION PARA VERIFICAR COMPROBAR DATOS DEL USUARIO
    const verificarUsuarioLogin = (): User | undefined => {
        const existeUsuario = users.find(user => user.correoElectronicoStack === loginForm.correoElectronicoLogin && user.contrasenaStack === loginForm.contrasenaLogin);
        return existeUsuario;
    }

    //FUNCION PARA VERIFICAR EL LOGIN
    const handleLogin = () => {

        //VERIFICAR SI EL LOGIN TIENE LOS CAMPOS COMPLETOS
        if (loginForm.correoElectronicoLogin === '' || loginForm.contrasenaLogin === '') {
            Alert.alert("Error", "Todos los campos son obligatorios");
            console.log("Todos los campos son obligatorios")
            return;
        }

        //TRAE LA FUNCION Y VERIFICA SI EL USUARIO O CONTRASEÑA ES INCORRECTA
        if (!verificarUsuarioLogin()) {
            Alert.alert("Error", "Usuario y/o contraseña incorrectos")
            console.log("Usuario o contraseña incorrectos")
            return;
        }


        //SI TODO SE SE CUMPLE REDIRRECCIONA AL PRODUCTOSSCREEN
        console.log(loginForm);
        navigation.dispatch(CommonActions.navigate({ name: "productosScreen" }))
    };


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <ImageBackground
                source={require('../img/0002-fondoTiendaV2.jpg')}
                style={styles.imagenFondo}
                imageStyle={{ opacity: 0.6 }}
            >


                {/*AQUI SE TRAE LOS InpuLogin PARA PROCESAR LOS CAMPOS*/}

                <View style={styles.formContainer}>

                    <View style={styles.logoContainer}>
                        <Image source={require('../img/0001-logoTienda.png')} style={styles.imagenLogo} />
                    </View>

                    <InputLogin
                        textoLabel='Ingrese su correo electrónico'
                        placeholder='Correo electrónico'
                        handleChangeLogin={handledChange}
                        KeyBoardType='email-address'
                        name='correoElectronicoLogin' />

                    <View>

                        <View>

                            <InputLogin
                                textoLabel='Ingrese su contraseña'
                                placeholder='Contraseña'
                                handleChangeLogin={handledChange}
                                KeyBoardType='default'
                                name='contrasenaLogin'
                                isPassword={ocultarContrasenaLogin}
                            />

                            <Icon
                                name={ocultarContrasenaLogin ? "visibility-off" : "visibility"}
                                size={20}
                                onPress={() => setOcultarContrasenaLogin(!ocultarContrasenaLogin)}
                                style={styles.iconoPassword}
                            />

                        </View>



                        <TouchableOpacity
                            style={styles.btnIniciarSesion}
                            onPress={handleLogin}>
                            <Text style={styles.btnTexto}>Iniciar sesión</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.btnRegistro}
                            onPress={() => navigation.dispatch(CommonActions.navigate({ name: "registroScreen" }))}>
                            <Text style={styles.btnTexto}>Registrarse</Text>
                        </TouchableOpacity>


                    </View>

                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

