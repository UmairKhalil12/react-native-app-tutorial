import { StyleSheet } from 'react-native'
import { scale } from 'react-native-size-matters'

const styles = StyleSheet.create({
    postView: {
        backgroundColor: 'white',
        marginTop: scale(5)
    },
    accountInfo: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: scale(1),
        paddingTop: scale(10),
        paddingRight: scale(10),
        paddingLeft: scale(10)
    },
    accountDp: {
        width: scale(60),
        height: scale(60),
        borderRadius: scale(100)
    },
    accountText: {
        color: 'black',
        fontSize:scale(16),
        fontWeight: '600'
    },
    timeText: {
        color: 'gray',
        fontSize: scale(10)
    },
    postText: {
        fontSize: scale(14),
        color: 'black',
        padding: scale(10)
    },
    postImg: {
        width: '100%',
        height: scale(400)
    },

    likeCommentShareView: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: scale(10),
    },
    reactionsBtn: {
        width: '25%',
        gap: scale(2),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent : 'center'
    },

    reactionsText: {
        color: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: scale(12)
    },

    reactionsBtnLogo: {
        color: 'grey',
        fontSize: scale(25)
    },
    likeCommentCountView : {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    postLikeShareText : {
        paddingLeft: scale(10),
        fontSize: scale(12),
        color: 'grey',
        paddingTop : scale(10)
    },
    postCommentShare : {
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        paddingLeft: scale(10),
        paddingRight : scale(5)
    }
})

export default styles