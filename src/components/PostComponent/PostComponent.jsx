import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const PostComponent = () => {
    const posts = [
        {
            id: 1,
            postText: 'Hurrrrrraaaahhhhhh. The GOAT wins Inter Miami their first ever MLS SUPPORTERS’ SHIELD TROPHY in its existence 🏆🐐🙌For Messi impossible is "I m possible"',
            postImg: require("../../assets/images/facebookPost1.jpg"),
            postLikes: '1.2k',
            postComment: 117,
            postShares: 24,
            accountName: 'Messi Fans',
            accountDp: require('../../assets/images/messiDp.jpg'),
            postTime: '12 min ago'
        }
    ]
    return (
        <View style={{ width: '100%' }}>
            {posts.map((post) => {
                return (
                    <View style={styles.postView}>
                        <View style={styles.accountInfo} >
                            <Image source={post?.accountDp} style={styles.accountDp} />
                            <View>
                                <Text style={styles.accountText} > {post?.accountName} </Text>
                                <Text style={styles.timeText} > {post?.postTime} </Text>
                            </View>
                        </View>

                        <Text style={styles.postText}>{post?.postText}</Text>

                        <Image source={post?.postImg} style={styles?.postImg} />

                        <View style={styles.likeCommentShareView} >
                            <TouchableOpacity style={styles.reactionsBtn} ><Text style={styles.reactionsText} >Like</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.reactionsBtn}><Text style={styles.reactionsText} >Comment</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.reactionsBtn}><Text style={styles.reactionsText} >Share</Text></TouchableOpacity>
                        </View>

                    </View>
                )
            })}
        </View>
    )
}

export default PostComponent

const styles = StyleSheet.create({
    postView: {
        backgroundColor: 'white',
    },
    accountInfo: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 1,
        paddingTop: 10,
        paddingRight : 10,
        paddingLeft  :10
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
        flexDirection : 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    reactionsText : {
        color : 'blue'
    }, 
    reactionsBtn : {
        borderRightWidth : 1,
        borderRightColor : 'lightgrey',
        width : '33%',
        justifyContent : 'center',
        alignItems :'center',
        padding : 10
    }
})