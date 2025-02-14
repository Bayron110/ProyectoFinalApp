
import React from 'react'
import { styles } from '../themes/appThemes';
import { KeyboardType, Text, TextInput, View } from 'react-native';

interface Props {
    textoLabel: string;
    placeholder: string;
    handleChangeLogin: (name: string, value: string) => void;
    KeyBoardType?: KeyboardType;
    isPassword?: (boolean);
    name: string;
}


export const InputLogin = ({ textoLabel, placeholder, handleChangeLogin, KeyBoardType = "default", isPassword, name}: Props) => {
    return (
        <View>
            <Text style={styles.label}>{textoLabel}</Text>

            <TextInput
                style={styles.input}
                
                placeholderTextColor={"gray"}

                placeholder={placeholder}

                onChangeText={(value)=>handleChangeLogin(name,value)}

                keyboardType={KeyBoardType}

                secureTextEntry={isPassword}
            />
        </View>
    );
};
