import React from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import { SECONDARY_COLOR, TERTIARY_COLOR, COLOR_AZUL_PRINCIPAL, COLOR_ROJO_PRINCIPAL, COLOR_CELESTE_PRINCIPAL, COLOR_PLOMO_PRINCIPAL, PRIMARY_COLOR, COLOR_FORNYTY_ESP, COLOR_TRANSPARENT_ESP } from './commons/constants';


const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: TERTIARY_COLOR,
    },
    body: {
        backgroundColor: "rgba(0,0,0,0.6)",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 10,
        paddingTop: 30,
        paddingBottom: 50,

    },
    imagenFondo: {
        width: width * 0.99,
        height: height * 0.99,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    logoContainer: {
        alignItems: "center",
        justifyContent: 'center',
        marginBottom: 20,
       

    },
    imagenLogo: {
        width: 320,
        height: 220,
        maxWidth: "100%",
        maxHeight: "200%",
        resizeMode: "contain",
    },
    formContainer: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 15,
    },
    label: {
        color: SECONDARY_COLOR,
        fontSize: 18,
        marginBottom: 10,
    },
    input: {
        backgroundColor: SECONDARY_COLOR,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginBottom: 15,
    },
    btnIniciarSesion: {
        backgroundColor: COLOR_ROJO_PRINCIPAL,
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        alignItems: 'center',
    },

    btnRegistro: {
        backgroundColor: COLOR_AZUL_PRINCIPAL,
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        alignItems: 'center',
    },
    btnTexto: {
        color: '#f9ebea',
        fontSize: 20,
        fontWeight: '500',
    },
    iconoPassword: {
        right: 10,
        position: "absolute",
        bottom: 28,
    },





    //REGISTRO

    textoSuperior: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center",
        color: SECONDARY_COLOR,
        paddingVertical: 10,
    },

    labelFormulario: {
        color: SECONDARY_COLOR,
        fontSize: 15,
        marginBottom: 4,
        fontWeight: "700",
    },
    opcionMedia: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: TERTIARY_COLOR
    },

    ubicacionMedia: {
        alignItems: "center",
        justifyContent: "center",
    },

    textoInferior: {
        fontSize: 17,
        fontWeight: '600',
        marginVertical: 10,
        textAlign: "center",
    },

    contenedorFormulario: {
        width: '100%',
        padding: 10,
    },

    inputRegistro: {
        width: '100%',
        padding: 9,
        marginVertical: 3,
        borderWidth: 1,
        borderColor: COLOR_ROJO_PRINCIPAL,
        borderRadius: 10,
        backgroundColor: SECONDARY_COLOR,
        fontSize: 12,
    },
    btnRegistrar: {
        backgroundColor: COLOR_AZUL_PRINCIPAL,
        padding: 15,
        borderRadius: 8,
        width: '100%',
        alignItems: "center",
        justifyContent: "center",
        marginTop: 2,
    },
    textoBtnRegistrar: {
        fontSize: 18,
        fontWeight: 'bold',
        color: SECONDARY_COLOR,
    },
    textoLogin: {

        fontSize: 18,
        color: SECONDARY_COLOR,
    },
    enlaceLogin: {
        color: COLOR_CELESTE_PRINCIPAL,
        fontWeight: "bold",
    },

    iconoPasswordRegistro: {
        right: 10,
        position: "absolute",
        bottom: 10,
    },

    //PRRODUCTO SCREEN

    //CARDS

    containerCard: {
        flex: 1,
        width: width * 0.40,
        justifyContent: "center",
        padding: 8,
        borderWidth: 1,
        backgroundColor: "#293133",
        shadowColor: TERTIARY_COLOR,
        shadowOpacity: 0.25,
        shadowRadius: 2.65,
        borderColor: TERTIARY_COLOR,
        borderStyle: "solid",
        marginBottom: 2,
        marginTop: 2,
        marginHorizontal: 1,
        borderRadius: 20,


    },

    titleCard: {
        fontSize: 20,
        color: PRIMARY_COLOR,
    },

    imagenCard: {
        width: width* 0.25,
        height: height * 0.15,
        backgroundColor: TERTIARY_COLOR,
        shadowColor: TERTIARY_COLOR,
        shadowOpacity: 0.5,
        shadowRadius: 2.65,
        marginBottom: 5,
        alignItems:"center",
        alignSelf:"center"
    },

    iconoCompraCardModal: {
        flex: 1,
        alignItems: "flex-end",
    },


    containerIconCardModal: {
        padding: 10,
        margin:5,
        alignItems: 'flex-start',
        justifyContent: "space-between",
    },

    headerProductosCard: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 13,
        marginHorizontal: 10,
        backgroundColor: COLOR_FORNYTY_ESP,
        borderRadius: 20,
        color:SECONDARY_COLOR
        
    },


    contenedorTextoCard: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    tituloCard: {
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: "center",
        textAlignVertical: "center",
        height: 70,
        padding: 2,
        backgroundColor: COLOR_PLOMO_PRINCIPAL,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },

    precioCard: {
        fontSize: 15,
        color: SECONDARY_COLOR,
        marginVertical: 5,
        textAlign: "center",
    },


    buttonAgregarProductoCard: {
        backgroundColor: "#708090",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        alignSelf: 'stretch',
        alignItems: 'center',
    },
    buttonTextoAgregarProductoCard: {
        color: SECONDARY_COLOR,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: "center"
    },


    //STACKNAVIGATOR 
    titulosVentanas: {
        fontSize: 30,
        textAlign: "center",
        fontWeight: '700',
    },


    //MODAL
    containerModal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignSelf:"center",
        backgroundColor: "rgba(0,0,0,0.5)",
        
    },

    modalProduct: {
        padding: 10,
        margin: 25,
        borderRadius: 10,
        shadowColor: TERTIARY_COLOR,
        shadowOpacity: 0.25,
        shadowRadius: 2.65,
        elevation: 10,
        
    },

    headerModal: {
        flexDirection: "row",
        borderBottomColor: TERTIARY_COLOR,
        borderBottomWidth: 1,
        borderStyle: "solid",
        padding: 1,
        backgroundColor:COLOR_TRANSPARENT_ESP,
        alignItems:"center",
        borderRadius:10,
        width:width*0.8
        
        
        
    },

    titleHeaderModal: {
        fontSize: 25,
        fontWeight: "bold",
        height: 40,
    },

    imageModal: {
        width: 120,
        height: 120,
        margin: 5,
    },

    containerQuantityModal: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

    buttonQuantityLeftModal: {
        backgroundColor: "#1A0028",
        height: 50,
        width: 50,
        borderTopLeftRadius: 100,
        borderBottomLeftRadius: 100,
        justifyContent: "center",
        alignItems: "center",
    },

    buttonQuantityTextModal: {
        color: SECONDARY_COLOR,
        fontSize: 15,
        fontWeight: "bold",
    },

    textQuantityModal: {
        fontSize: 15,
        color: SECONDARY_COLOR,
        marginHorizontal: 12,
        fontWeight:"bold"
    },

    quantityMiddleModal: {
        backgroundColor: "#05171F",
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
        
    },

    buttonQuantityRightModal: {
        backgroundColor: "#2C003E",
        height: 50,
        width: 50,
        borderTopRightRadius: 100,
        borderBottomRightRadius: 100,
        justifyContent: "center",
        alignItems: "center",
    },


    buttonAddCartModal: {
        backgroundColor: "#2C003E",
        marginTop: 15,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        padding: 10
    },



    buttonAddCartTextModal: {
        color: SECONDARY_COLOR,
        fontWeight: "bold",
    },

    textSinStock: {
        fontSize: 40,
        textAlignVertical: "center",
        textAlign: "center",
        marginTop: 20,
        color: SECONDARY_COLOR,
        fontWeight:"bold"
    },

    textoHeaderProducto: {
        flex:1,
        fontSize: 20,
        color: "white",
        textAlign:"center",
        fontWeight: "bold"
    
    },


    //MODAL CARRO COMPRAS

    headerProducts: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },

    textIconCar: {
        backgroundColor: SECONDARY_COLOR,
        paddingHorizontal: 5,
        borderRadius: 10,
        fontSize: 13,
        fontWeight: "800",
    },

    //MODAL DE CARRO DE COMPRAS 
    headerTablerCar: {
        flexDirection: "row",
        justifyContent: "space-between",
        width:width*0.90
        
    },

    textHeaderTableCar: {
        fontWeight: "bold",
        color: SECONDARY_COLOR,
        fontSize: 14
    },

    imagenModalCar: {
        height: 40,
        width: 40,
        marginTop:2,
    },

    containerTotalCar: {
        flex:1,
        alignItems: "center",
        textAlignVertical: "center",
        fontSize:17,
        marginTop: 15,
        backgroundColor:COLOR_TRANSPARENT_ESP,
        color:SECONDARY_COLOR,
        fontWeight:"bold",
    },

    buttonComprarModalCar: {
        backgroundColor: "#16071E",
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        width: width * 0.90,
        height:height *0.05
    },
    

    buttonComprarModalTextoCar: {
        fontSize: 15,
        color: "white",
    },

    contenedorCardCar: {
        textAlign: "center",
        textAlignVertical: "center",
        marginHorizontal: 15,
        fontSize: 12,
        paddingTop: 15,
    },

    modalProductCar: {
        padding: 10,
        margin: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 2.65,
        elevation: 10,
        width: width * 0.99, 
        height: height * 0.4
    },

    cajaProductCard: {
        alignItems:"center",
        justifyContent:"center",
        textAlignVertical:"center",
        textAlign:"center",
        paddingTop:15,
        fontSize:13,
        marginRight:11,
        width:43,
        color:SECONDARY_COLOR
        
    },

    cajaTituloProductCard: {
        alignItems:"center",
        justifyContent:"center",
        textAlignVertical:"center",
        textAlign:"justify",
        paddingTop:3,
        fontSize:12,
        fontWeight:"500",
        marginRight:5,
        width:width*0.30,
        color:SECONDARY_COLOR
    },
    cardIP:{
        position:"relative",
        top:-8
    },
    modalBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center', 
        alignItems: 'center',
    },
    fondoCarrito:{
        flex: 1,
        width: "100%",
        height: height *0.4,
        position: "absolute",
    }








})