import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../../themes/appThemes';
import { Product } from '../../ProductosScreen';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { PRIMARY_COLOR, SECONDARY_COLOR, TERTIARY_COLOR } from '../../../themes/commons/constants';
import { ModalProduct } from './ModalProduct';
import { ImageBackground } from 'react-native';

interface Props {
    productCardCompra: Product;
    handleChangeStockCard :(id:number, cantidadCard:number)=>void;
}


export const CardProducts = ({ productCardCompra, handleChangeStockCard }: Props) => {

    //Hook UseState para la visibildaida del moproductdal
    const [showModalProduct, setShowModalProduct] = useState<boolean>(false)



    return (
        <View>

                <View style={styles.containerCard}>

                    <Image source={{ uri: productCardCompra.pathImage }} style={styles.imagenCard} />

                    <View style={styles.contenedorTextoCard}>
                        
                        <Text style={styles.tituloCard}>{productCardCompra.name}</Text>
                        
                        <Text style={styles.precioCard}>${productCardCompra.price}</Text>
                        
                        <TouchableOpacity style={styles.buttonAgregarProductoCard}>
                            <Icon style={styles.iconoCompraCardModal} size={30}
                                color={SECONDARY_COLOR} name="add-shopping-cart"
                                onPress={() => setShowModalProduct(!showModalProduct)} >
                            </Icon>
                        </TouchableOpacity>

                    </View>
                </View>

                <ModalProduct
                    productModalProduct={productCardCompra}
                    isVisible={showModalProduct}
                    setShowModalProduct={() => setShowModalProduct(!showModalProduct)}
                    handleChangeStockModalProductos={handleChangeStockCard} />


        </View>
    )
}
