import React from 'react';
import { KeyboardType, Text, TextInput, View } from 'react-native';
import { styles } from '../themes/appThemes';

interface Props {
    textoLabel: string;
    placeholder: string;
    handledChangeRegistro: (name: string, value: string) => void;
    KeyBoardType?: KeyboardType;
    isPassword?: (boolean);
    name: string;
}

export const InputRegistro = ({ textoLabel, placeholder, handledChangeRegistro , KeyBoardType = "default", isPassword, name}: Props) => {
    return (
        <View>
            <Text style={styles.labelFormulario}>{textoLabel}</Text>

            <TextInput
                style={styles.inputRegistro}
                
                placeholderTextColor={"gray"}

                placeholder={placeholder}

                onChangeText={(value)=>handledChangeRegistro(name,value)}

                keyboardType={KeyBoardType}

                secureTextEntry={isPassword}
            />
        </View>
    );
};
