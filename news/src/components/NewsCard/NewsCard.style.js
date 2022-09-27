import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:'white',
        margin:10,
        borderRadius:10
    },
    image:{
        height:Dimensions.get('window').height / 4,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        margin:10
    },
    content:{
        margin:10
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        color:'black'
    },
    description:{
        fontSize:16,
        marginTop:4
    },
    author:{
        fontStyle:'italic',
        textAlign:'right'
    }
});