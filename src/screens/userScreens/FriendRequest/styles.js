import { StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";


const styles = StyleSheet.create({
    friendsView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textFriends: {
      fontSize: scale(14),
      color: 'black',
      fontWeight: '400'
    },
    friendReqDiv : {
        width : '100%',
        padding : scale(8),
        flexDirection : 'row',
        justifyContent : 'flex-start',
        gap : scale(10),
        alignItems : 'center'
    },
    friendReqName : {
        color : 'black',
        fontSize : scale(14),
        fontWeight : '600'
    },
    friendReqMutual : {
        color : 'grey',
        marginBottom : verticalScale(5),
        fontSize : scale(12)
    },
    friendReqDp : {
        height : verticalScale(90),
        width : scale(90),
        borderRadius : scale(100),
        borderWidth : scale(1),
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
        gap : scale(8)
    }
  })

export default styles