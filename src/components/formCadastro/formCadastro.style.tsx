import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        width: 500,
        alignItems: 'center'
    },
    input: {

        width: '80%',               // Largura percentual em relação ao pai
        maxWidth: 300,             // Limitar a largura máxima (opcional)
        marginVertical: 10, 
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor:'green',
        borderWidth:3,
        borderRadius:5,
        backgroundColor:'white'
    },
    keyAvoid:{
        width: '100%',               // Largura percentual em relação ao pai
        maxWidth: 300,             // Limitar a largura máxima (opcional)
        backgroundColor:'black'
    },
    logo:{
        width: '35%', // largura da imagem
        height: 150, // altura da imagem
        marginHorizontal: 5, // Adiciona espaçamento horizontal entre os itens
        
        alignSelf:'center',
        marginTop:35,
        position: 'absolute' // Para deixar a logo a cima de tudo
    },
    title:{
        
        alignSelf:'center',
        fontSize:40,
        fontWeight: 'normal',
        color:'white'
        
    },
    button:{
        backgroundColor: 'green',
        borderRadius:20,
        width: 280,
        height: 40
    },
    buttonText:{
        color:'white',
        fontSize: 25,
        textAlign:'center',
    },
    image:{
        width: '40%', // largura da imagem
        height: '40%', // altura da imagem
        alignSelf: 'center',
        marginTop:60,
        resizeMode: 'cover',
    }
});

export default styles;