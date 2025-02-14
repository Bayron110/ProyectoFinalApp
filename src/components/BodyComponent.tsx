import React, { ReactNode } from 'react';
import { Text, useWindowDimensions, View } from 'react-native';
import { styles } from '../themes/appThemes';


interface Props {
    children: ReactNode; //Permite que el contenedor reciba cualquier elemento
}

export const BodyComponents = ({ children }: Props) => {
    //hook useWindowDimensions: permite obtener las dimensiones de la pantalla
    const { height } = useWindowDimensions();
    return (
        <View style={{
            ...styles.body,
            height: height * 0.88
        }}>
            {children}
        </View>
    )
}