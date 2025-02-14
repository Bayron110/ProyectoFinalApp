import React, { useState } from 'react';
import { SafeAreaView, View, Text, FlatList, Image, TouchableOpacity, StyleSheet, StatusBar, Alert } from 'react-native';
import { styles } from '../themes/appThemes';
import { ImageBackground } from 'react-native';

import { BodyComponents } from '../components/BodyComponent';
import { CardProducts } from './Productos/components/CardProducts';
import { ModalCarroCompras } from './Productos/components/ModalCarroCompras';

import Icon from 'react-native-vector-icons/MaterialIcons'
import { SECONDARY_COLOR, TERTIARY_COLOR } from '../themes/commons/constants';



//Interface para los productos
export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    pathImage: string;
}

//Interface para el ModalCarroCompras

export interface CarProducts {
    id: number;
    nameCarro: string;
    priceCarro: number;
    totalCarro: number;
    cantidadCarro: number;
    pathimageCardProduct: string;
}



export const ProductosScreen = () => {

    const products: Product[] = [
        { id: 1, name: 'LED ZEPPELIN – 4TH ALBUM', price: 40, stock: 0, pathImage: 'https://cdcmusicec.com/wp-content/uploads/2021/12/1-1.jpg' },
        { id: 2, name: 'METALLICA – KILL ‘EM ALL (VINILO ROJO)', price: 70, stock: 10, pathImage: 'https://cdcmusicec.com/wp-content/uploads/2024/04/5-670x670.png' },
        { id: 3, name: 'GUNS N’ ROSES – LIVE IN SOUTH AMERICA (PICTURE DISC)', price: 20, stock: 12, pathImage: 'https://cdcmusicec.com/wp-content/uploads/2024/01/FET-7-756x756.png' },
        { id: 4, name: 'KISS – Kiss ’88 (WNEW FM Broadcast: The Ritz, New York 1988)', price: 65, stock: 8, pathImage: 'https://cdcmusicec.com/wp-content/uploads/2024/01/FET-5.png' },
        { id: 5, name: 'THE VERVE – URBAN HYMNS', price: 38, stock: 25, pathImage: 'https://cdcmusicec.com/wp-content/uploads/2024/04/the-verve-756x756.png' },
        { id: 6, name: 'CREEDENCE CLEARWATER REVIVAL – THE CHRONICLE (VINILOS AZULES)', price: 32, stock: 8, pathImage: 'https://cdcmusicec.com/wp-content/uploads/2024/04/4.png' },
        { id: 7, name: 'BLACK SABBATH – BLACK SABBATH', price: 45, stock: 4, pathImage: 'https://cdcmusicec.com/wp-content/uploads/2023/04/D_NQ_NP_697279-MLA26645835275_012018-O.jpg' },
        { id: 8, name: 'LINKIN PARK – HYBRID THEORY', price: 40, stock: 8, pathImage: 'https://cdcmusicec.com/wp-content/uploads/2023/05/LINKIN-720x720.png' },
    ];


    //Manejo del estado de los productos
    const [productosState, setProductosState] = useState<Product[]>(products)

    //Manejo de los productos del carro de compras
    const [carroProductosCompra, setCarroProductosCompras] = useState<CarProducts[]>([])

    //Funcion para controlar el stock

    const handleCambioStock = (id: number, cantidadCambioStock: number): void => {
        const updateStock = productosState.map(product => product.id === id
            ? { ...product, stock: product.stock - cantidadCambioStock }
            : product);

        //Mofica el arreglo de productosState

        setProductosState(updateStock);


        agregarProductoCarro(id, cantidadCambioStock)
    }

    //Funcion para agregar productos al carro

    const agregarProductoCarro = (id: number, cantidadAgregarProducto: number): void => {

        const product = productosState.find(productoAgregarCarro => productoAgregarCarro.id === id);

        // Si el producto no existe, termina la función
        if (!product) {
            return;
        }
        //1----Verficiar si existe el id en el carro y agregar en el mismo producto si se aumenta
        // Buscar si el producto ya está en el carrito
        const productoEnCarro = carroProductosCompra.find(existeProducto => existeProducto.id === id);

        if (productoEnCarro) {

            const carroActualizado = carroProductosCompra.map(actualizaProduct =>
                actualizaProduct.id === id

                    ? {
                        ...actualizaProduct,
                        cantidadCarro: actualizaProduct.cantidadCarro + cantidadAgregarProducto,

                        totalCarro: (actualizaProduct.cantidadCarro + cantidadAgregarProducto) *

                            actualizaProduct.priceCarro,
                    }

                    : actualizaProduct
            );

            setCarroProductosCompras(carroActualizado);

        } else {

            // Si no está en el carrito, lo agregamos como nuevo
            const nuevoProductoCarro: CarProducts = {
                id: product.id,
                nameCarro: product.name,
                priceCarro: product.price,
                totalCarro: product.price * cantidadAgregarProducto,
                cantidadCarro: cantidadAgregarProducto,
                pathimageCardProduct: product.pathImage,
            };

            setCarroProductosCompras([...carroProductosCompra, nuevoProductoCarro]);
        }

        console.log(carroProductosCompra);
    };


    //2.----Funcion para borrar carro de compras
    const vaciarCarroTotal = (): void => {
        setCarroProductosCompras([]);
    };



    //MOSTRAT EL MODAL DEL CARRO DE COMPRAS

    const [showModalCar, setshowModalCar] = useState<boolean>(false)


    //3.-Funcion para activar o desacrivar el carro de compras

    const revisar =():void =>{
        if(carroProductosCompra.length===0){
            setshowModalCar(showModalCar===true)
        }else{
            setshowModalCar(showModalCar===false)
        }

    } 

    return (
        <SafeAreaView style={styles.container}>

            <StatusBar />

            <ImageBackground
                source={require('../img/0008-fondoRegistroV4.jpg')}
                style={styles.imagenFondo}
                imageStyle={{ opacity: 0.2 }}
            >

                <View style={styles.headerProducts} >

                    <View style={styles.headerProducts}>

                        <Text style={styles.headerProductosCard}>Nuestros Productos</Text>
                        <View style={{ ...styles.containerIconCardModal, alignSelf: "flex-end" }}>
                            <Text style={styles.textIconCar}>{carroProductosCompra.length}</Text>

                            <TouchableOpacity
                                onPress={revisar}
                            >
                                <Icon
                                    name='shopping-bag'
                                    size={30}
                                    color={carroProductosCompra.length === 0 ? "gray" : SECONDARY_COLOR}
                                    disabled={carroProductosCompra.length === 0}
                                    
                                />
                            </TouchableOpacity>
                        </View>

                    </View>



                </View>

                <BodyComponents>

                    <FlatList
                        data={productosState}

                        renderItem={({ item }) => <CardProducts productCardCompra={item} handleChangeStockCard={handleCambioStock} />}

                        keyExtractor={(item) => item.id.toString()}

                        numColumns={2}

                        columnWrapperStyle={{ justifyContent: "space-evenly" }}
                    />

                </BodyComponents>


            </ImageBackground>

            <ModalCarroCompras
                isVisible={showModalCar}
                carroProductos={carroProductosCompra}
                setShowModalCar={() => setshowModalCar(!showModalCar)}
                vaciarCarro={vaciarCarroTotal}>
            </ModalCarroCompras>

        </SafeAreaView>
    );
};