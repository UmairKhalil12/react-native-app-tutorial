import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    friendsView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textFriends: {
      fontSize: 20,
      color: 'black',
      fontWeight: '400'
    },
    friendReqDiv : {
        width : '100%',
        padding : 10,
        flexDirection : 'row',
        justifyContent : 'flex-start',
        gap : 15,
        alignItems : 'center'

    },
    friendReqName : {
        color : 'black',
        fontSize : 18,
        fontWeight : '600'
    },
    friendReqMutual : {
        color : 'grey',
        marginBottom : 5,
        fontSize : 13
    },
    friendReqDp : {
        height : 100,
        width : 100,
        borderRadius : 100,
        borderWidth : 1,
        borderColor : 'white'
    },

    friendReqInfoDiv : {
        width : '65%'
    },

    friendRequestBtnDiv : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        width : '100%',
        gap : 10
    }
  })

export default styles