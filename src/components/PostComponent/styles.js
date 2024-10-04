import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    postView: {
        backgroundColor: 'white',
        marginTop: 5
    },
    accountInfo: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingLeft: 10
    },
    accountDp: {
        width: 60,
        height: 60,
        borderRadius: 100
    },
    accountText: {
        color: 'black',
        fontSize: 16,
        fontWeight: '600'
    },
    timeText: {
        color: 'gray',
        fontSize: 10
    },
    postText: {
        fontSize: 14,
        color: 'black',
        padding: 10
    },
    postImg: {
        width: '100%',
        height: 400
    },

    likeCommentShareView: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    reactionsBtn: {
        width: '25%',
        gap: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent : 'center'
    },

    reactionsText: {
        color: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 12
    },

    reactionsBtnLogo: {
        color: 'grey',
        fontSize: 25
    },
    likeCommentCountView : {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    postLikeShareText : {
        paddingLeft: 10,
        fontSize: 12,
        color: 'grey',
        paddingTop : 10
    },
    postCommentShare : {
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        paddingLeft: 10,
        paddingRight : 5
    }
})

export default styles