import { StyleSheet,Dimensions } from "react-native";
const deviceSize = Dimensions.get("window")
export default StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"space-around",
        alignItems:"center",
        backgroundColor:"#FE9B4B",
    },
    text:{
        fontSize:50,
        textAlign:"center",
        color:"#fff",
        fontWeight:"bold"
    },
    //button
    button:{
        alignItems:"center",
        padding:10,
        borderRadius:25,
        margin:15,
        width:deviceSize.width/1.5,
        height:deviceSize.height /15 ,
        backgroundColor:"white",
    },
    button_text:{
        color:"#FE9B4B",
        fontWeight:"bold",
        fontSize:20,
    }
})