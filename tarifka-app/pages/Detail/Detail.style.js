import { StyleSheet, Dimensions } from 'react-native'

const deviceSize = Dimensions.get("window")

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#FE9B4B",
    },
    body_container:{
        padding:10,
    },
    image_container:{},
    image:{
        width:deviceSize.width,
        height:deviceSize.height / 3 ,
        // resizeMode:"contain",
        backgroundColor:"#FE9B4B",
        borderBottomRightRadius:50,
    },
    title:{
        fontWeight:"bold",
        fontSize:25,
        color:"#fff"
    },
    area:{
        textAlign:"right",
        fontWeight:"bold",
        fontSize:20,
        color:"#fff"
    },
    instructions:{
        fontStyle:"italic",
        marginVertical:5,
        fontSize:18,
        color:"#eee"
    },
    youtube:{
        marginVertical:10,
        padding:13,
        backgroundColor:"#ff0000",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:5,
    },
    youtube_text:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:18,
    },
    
})