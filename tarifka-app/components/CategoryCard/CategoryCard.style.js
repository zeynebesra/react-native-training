import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        borderColor:"#FFE264",
        margin:12,
        
        flexDirection:"row",
        borderRadius:10,
        alignItems:"center"
    },
    image:{
        width:90,
        minHeight:75,
        resizeMode:"contain",
        backgroundColor:"white",
        borderRadius:75
    },
    body_container:{
        flex:1,
        padding:5,
        justifyContent:"space-between"
    },
    title:{
        fontWeight:"normal",
        fontSize:22,
        color:"#000"
    },
    description:{
        textAlign:"right",
        color:"#000",
        fontSize:12,
        fontStyle:"italic",
        fontWeight:"500"
    },
    
})