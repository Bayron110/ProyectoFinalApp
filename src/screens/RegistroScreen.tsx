import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { User } from '../navigator/StackNavigator';
import { styles } from '../themes/appThemes';
import { Alert } from 'react-native';
import { InputRegistro } from '../components/InputRegistro';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { CommonActions, useNavigation } from '@react-navigation/native';


//CREAR INTERFAZ E IMPORTAR USER[] DESDE STACK NAVIGATOR Y LA FUNCION ADDUSERS
interface Props {
    users: User[]
    addUsers: (users: User) => void;
}

//INTERFAZ PARA LAS VARIABLES DEL REGISTRO
interface RegisterForm {
    nombreRegistro: string;
    apellidoRegistro: string;
    usuarioRegistro: string;
    correoElectronicoRegistro: string;
    contrasenaRegistro: string;
    confirmarContrasenaRegistro: string;
}


export const RegistroScreen = ({ users, addUsers }: Props) => {

    const [registroForm, setRegistroForm] = useState<RegisterForm>({

        nombreRegistro: "",
        apellidoRegistro: "",
        usuarioRegistro: "",
        correoElectronicoRegistro: "",
        contrasenaRegistro: "",
        confirmarContrasenaRegistro: "",
    })

    //FUNCION PARA CONTORLAS LAS CARACTERES INGRESADOS
    const handleChange = (name: string, value: string) => {
        console.log(name, value)
        setRegistroForm({ ...registroForm, [name]: value })
    }

    //FUNCION PARA VERIFICAR SI EL USUARIO REGISTRADO EXISTE 
    const verificarUsuarioRegistro = (): User | undefined => {
        const existeUsuario = users.find(user =>
            user.correoElectronicoStack === registroForm.correoElectronicoRegistro
            || user.usuarioStack === registroForm.usuarioRegistro)
        return existeUsuario;
    }


    //FUNCION PARA GENERAR LA ID DE LOS USUARIOS NUEVOS
    const getIdNewUser = (): number => {
        const getIdUser = users.map(user => user.id);
        return Math.max(...getIdUser) + 1;
    }


    const navigation = useNavigation();

    const [ocultarContrasena, setOcultarContrasena] = useState<boolean>(true)

    const [ocultarConfirmarContrasena, setOcultarConfirmarContrasena] = useState<boolean>(true)


    //FUNCION PARA REGISTAR USUARIOS
    const handleRegistro = () => {
        console.log(registroForm);

        //VERIFICA SI LOS CAMPOS ESTAN COMPLETOS
        if (
            registroForm.nombreRegistro === "" ||
            registroForm.apellidoRegistro === "" ||
            registroForm.usuarioRegistro === "" ||
            registroForm.correoElectronicoRegistro === "" ||
            registroForm.contrasenaRegistro === "" ||
            registroForm.confirmarContrasenaRegistro === ""
        ) {
            Alert.alert("Error", "Existen campos vacíos");
            console.log("Existen campos vacíos")
            return;
        }



        //TRAE LA FUNCION Y VERIFICA SI EL USURIO EXISTE
        if (verificarUsuarioRegistro()) {
            Alert.alert('Error', 'El usuario ya existe');
            console.log("El usuario ya existe")
            return;
        }

        //VERIFICA SI LOS CONTRASEÑAS COINCIDEN
        if (registroForm.contrasenaRegistro !== registroForm.confirmarContrasenaRegistro) {
            Alert.alert("Error", "Las contraseñas no coinciden");
            console.log("Las contraseñas no coinciden")
            return;
        }

        //CREA NUEVO USUARIO E ID AUTOMATICAMENTE AL LLAMARA A LA FUNCION

        const newUser: User = {
            id: getIdNewUser(),
            nombreStack: registroForm.nombreRegistro,
            apellidoStack: registroForm.apellidoRegistro,
            usuarioStack: registroForm.usuarioRegistro,
            correoElectronicoStack: registroForm.correoElectronicoRegistro,
            contrasenaStack: registroForm.contrasenaRegistro,
            confirmarContrasenaStack: registroForm.confirmarContrasenaRegistro,
        }

        //SE AGREGA NUEVO USUARIO AL ARREGLO users - CONEXION CON STACK
        addUsers(newUser)
        console.log("Usuario registrado:", newUser);
        Alert.alert('Registro', 'Usuario registrado con éxito')


        //SI TODO SE SE CUMPLE REDIRRECCIONA AL LOGIN
        navigation.dispatch(CommonActions.navigate({ name: "loginScreen" }))
    };


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <ImageBackground
                source={require('../img/0004-fondoRegistro.jpg')}
                style={styles.imagenFondo}
                imageStyle={{ opacity: 0.3 }}
            >

                <View style={styles.contenedorFormulario}>

                    <Text style={styles.textoSuperior}>Llene todos los campos a continuación</Text>

                    <InputRegistro
                        textoLabel="Ingrese su nombre"
                        placeholder="Nombre"
                        KeyBoardType="default"
                        handledChangeRegistro={handleChange}
                        name='nombreRegistro'
                    />
                    <InputRegistro
                        textoLabel="Ingrese su apellido"
                        placeholder="Apellido"
                        KeyBoardType="default"
                        handledChangeRegistro={handleChange}
                        name='apellidoRegistro'
                    />
                    <InputRegistro
                        textoLabel="Ingrese su usuario"
                        placeholder="Usuario"
                        KeyBoardType="default"
                        handledChangeRegistro={handleChange}
                        name='usuarioRegistro'
                    />
                    <InputRegistro
                        textoLabel="Ingrese su correo electrónico"
                        placeholder="Correo electrónico"
                        KeyBoardType="email-address"
                        handledChangeRegistro={handleChange}
                        name='correoElectronicoRegistro'
                    />
                    <View>
                        <InputRegistro
                            textoLabel="Ingrese su contraseña"
                            placeholder="Contraseña"
                            KeyBoardType="default"
                            handledChangeRegistro={handleChange}
                            name='contrasenaRegistro'
                            isPassword={ocultarContrasena}
                        />
                        <Icon
                            name={ocultarContrasena ? "visibility-off" : "visibility"}
                            size={20}
                            onPress={() => setOcultarContrasena(!ocultarContrasena)}
                            style={styles.iconoPasswordRegistro}
                        />
                    </View>

                    <View>
                        <InputRegistro
                            textoLabel="Reingrese la contraseña"
                            placeholder="Confirmar contraseña"
                            KeyBoardType="default"
                            handledChangeRegistro={handleChange}
                            name='confirmarContrasenaRegistro'
                            isPassword={ocultarConfirmarContrasena}
                        />
                        <Icon
                            name={ocultarConfirmarContrasena ? "visibility-off" : "visibility"}
                            size={20}
                            onPress={() => setOcultarConfirmarContrasena(!ocultarConfirmarContrasena)}
                            style={styles.iconoPasswordRegistro}
                        />
                    </View>


                </View>

                <View style={styles.contenedorFormulario}>
                    <TouchableOpacity
                        style={styles.btnRegistrar}
                        onPress={handleRegistro}>
                        <Text style={styles.textoBtnRegistrar}
                        >Registrarse</Text>
                    </TouchableOpacity>
                </View>




                <TouchableOpacity style={{ alignItems: "center" }} onPress={() => navigation.dispatch(CommonActions.navigate({ name: "loginScreen" }))}>

                    <Text style={styles.textoLogin}>¿Ya tienes una cuenta? <Text style={styles.enlaceLogin}>Iniciar Sesión</Text></Text>
                </TouchableOpacity>

            </ImageBackground>

        </SafeAreaView>

    );
};
