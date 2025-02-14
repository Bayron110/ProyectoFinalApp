import React, { useState } from 'react';
import { View, Text, Modal, useWindowDimensions, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from '../../../themes/appThemes';
import { SECONDARY_COLOR } from '../../../themes/commons/constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Product } from '../../ProductosScreen';

interface Props {
    productModalProduct: Product;
    isVisible: boolean;
    setShowModalProduct: () => void;
    handleChangeStockModalProductos: (id: number, cantidadCambio: number) => void;
}

export const ModalProduct = ({ productModalProduct, isVisible, setShowModalProduct, handleChangeStockModalProductos }: Props) => {
    const { height, width } = useWindowDimensions();
    const [cantidadProductosModal, setCantidadProductosModal] = useState<number>(1);

    const closeModal = (): void => {
        setShowModalProduct();
        setCantidadProductosModal(1);
    };

    const handleAddProduct = (): void => {
        handleChangeStockModalProductos(productModalProduct.id, cantidadProductosModal);
        console.log(cantidadProductosModal);
        closeModal();
    };

    return (
        <Modal visible={isVisible} animationType="fade" transparent={true}>
            <View style={styles.containerModal}>
                <ImageBackground
                    source={{uri:"https://image.slidesdocs.com/responsive-images/background/simple-cartoon-style-3d-illustration-of-pink-musical-notes-on-black-sheet-backdrop-powerpoint-background_5149cd0c57__960_540.jpg"}}
                    style={{ ...styles.modalProduct, width: width * 0.8, height: height * 0.6 }}
                    imageStyle={{ borderRadius: 20 }}// REDONDEAR LOS BORDES
                >
                    <View style={styles.headerModal}>

                        <Text style={styles.textoHeaderProducto}>

                            {productModalProduct.name} - ${productModalProduct.price.toFixed(2)}

                        </Text>
                        <View style={styles.containerIconCardModal}>
                            <Icon name="cancel" size={35} onPress={closeModal} color={SECONDARY_COLOR} />
                        </View>
                    </View>

                    <View style={{ alignItems: "center" }}>
                        <Image source={{ uri: productModalProduct.pathImage }} style={styles.imageModal} />
                    </View>

                    <View>
                        {productModalProduct.stock === 0 ? (
                            <Text style={styles.textSinStock}>Producto Agotado</Text>
                        ) : (
                            <View>
                                <View style={styles.containerQuantityModal}>
                                    <TouchableOpacity
                                        style={styles.buttonQuantityLeftModal}
                                        onPress={() => setCantidadProductosModal(cantidadProductosModal - 1)}
                                        disabled={cantidadProductosModal === 1}
                                    >
                                        <Text style={styles.buttonQuantityTextModal}>-1</Text>
                                    </TouchableOpacity>

                                    <View style={styles.quantityMiddleModal}>
                                        <Text style={styles.textQuantityModal}>{cantidadProductosModal}</Text>
                                    </View>

                                    <TouchableOpacity
                                        style={styles.buttonQuantityRightModal}
                                        onPress={() => setCantidadProductosModal(cantidadProductosModal + 1)}
                                        disabled={cantidadProductosModal === productModalProduct.stock}
                                    >
                                        <Text style={styles.buttonQuantityTextModal}>+1</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ alignItems: "center" }}>
                                    <Text style={styles.textQuantityModal}>
                                        Total: ${" "}
                                        {(productModalProduct.price * cantidadProductosModal).toFixed(2)}
                                    </Text>
                                </View>

                                <View>
                                    <TouchableOpacity style={styles.buttonAddCartModal} onPress={handleAddProduct}>
                                        <Text style={styles.buttonAddCartTextModal}>Agregar al Carrito</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                    </View>
                </ImageBackground>
            </View>
        </Modal>
    );
};
