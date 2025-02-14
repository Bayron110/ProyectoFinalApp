import React from 'react';
import { CarProducts } from '../../ProductosScreen';
import { FlatList, Image, Text, TouchableOpacity, View, Modal, useWindowDimensions, ImageBackground } from 'react-native';
import { styles } from '../../../themes/appThemes';
import { SECONDARY_COLOR } from '../../../themes/commons/constants';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  isVisible: boolean;
  carroProductos: CarProducts[];
  setShowModalCar: () => void;
  vaciarCarro: () => void;
}

export const ModalCarroCompras = ({ isVisible, carroProductos, setShowModalCar, vaciarCarro }: Props) => {
  const { height, width } = useWindowDimensions();

  // Función para calcular el total de la compra
  const totalPay = (): number => {
    return carroProductos.reduce((total, product) => total + product.totalCarro, 0);
  };

  const botonVaciarCarro = () => {
    vaciarCarro();
    setShowModalCar();
  };

  return (
    <Modal visible={isVisible} animationType="fade" transparent={true}>
      <View style={styles.containerModal}>
        <View style={styles.modalProductCar }>
          {/* Imagen de fondo con ajuste */}
          <ImageBackground
            source={{ uri: "https://image.slidesdocs.com/responsive-images/background/simple-cartoon-style-3d-illustration-of-pink-musical-notes-on-black-sheet-backdrop-powerpoint-background_5149cd0c57__960_540.jpg" }}
            style={styles.fondoCarrito}
            imageStyle={{ borderRadius: 20 }}
          />
          <View style={styles.headerModal}>
            <Text style={styles.textoHeaderProducto}>Productos Agregados</Text>
            <View style={styles.containerIconCardModal}>
              <Icon name="cancel" size={25} color={SECONDARY_COLOR} onPress={setShowModalCar} />
            </View>
          </View>

          <View style={styles.headerTablerCar}>
            <Text style={styles.textHeaderTableCar}>Producto</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ ...styles.textHeaderTableCar, marginHorizontal: 10 }}>Precio</Text>
              <Text style={styles.textHeaderTableCar}>Cantidad</Text>
              <Text style={{ ...styles.textHeaderTableCar, marginHorizontal: 10 }}>Total</Text>
              <Text style={styles.textHeaderTableCar}>Imagen</Text>
            </View>
          </View>

          <FlatList
            data={carroProductos}
            renderItem={({ item }) => (
              <View style={styles.headerTablerCar}>
                <Text style={styles.cajaTituloProductCard}>{item.nameCarro}</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={styles.cajaProductCard}>${item.priceCarro.toFixed(2)}</Text>
                  <Text style={styles.cajaProductCard}>{item.cantidadCarro}</Text>
                  <Text style={styles.cajaProductCard}>${item.totalCarro}</Text>
                  <Image
                    source={{ uri: item.pathimageCardProduct }}
                    style={{ width: 40, height: 40, borderRadius: 10, resizeMode: "contain", overflow:"hidden" }}
                  />
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
          />

          <View style={styles.containerTotalCar}>
            <Text style={styles.containerTotalCar}>Total a pagar: ${totalPay()}</Text>
          </View>

          <View>
            <TouchableOpacity style={styles.buttonComprarModalCar} onPress={botonVaciarCarro}>
              <Text style={styles.buttonComprarModalTextoCar}>Comprar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
