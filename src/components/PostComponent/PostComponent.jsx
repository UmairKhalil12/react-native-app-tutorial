import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import posts from './posts'
import styles from './styles'
import Icon from 'react-native-vector-icons/Ionicons';

const PostComponent = () => {
    return (
        <View style={{ width: '100%' }}>
            {posts.map((post) => {
                return (
                    <View style={styles.postView} key={post.id} >
                        <View style={styles.accountInfo} >
                            <Image source={post?.accountDp} style={styles.accountDp} />
                            <View>
                                <Text style={styles.accountText} > {post?.accountName} </Text>
                                <Text style={styles.timeText} > {post?.postTime} </Text>
                            </View>
                        </View>

                        <Text style={styles.postText}>{post?.postText}</Text>

                        <Image source={post?.postImg} style={styles?.postImg} />

                        <View style={styles.likeCommentCountView} >
                            <Text style={styles.postLikeShareText}>{post?.postLikes} likes </Text>
                            <View style={styles.postCommentShare} >
                                <Text style={styles.postLikeShareText} >{post?.postComment} comments </Text>
                                <Text style={styles.postLikeShareText} >{post?.postShares} shares </Text>
                            </View>
                        </View>

                        <View style={styles.likeCommentShareView} >
                            <TouchableOpacity style={styles.reactionsBtn} >
                                <Icon name='thumbs-up-outline' style={styles.reactionsBtnLogo} />
                                <Text style={styles.reactionsText} >Like</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.reactionsBtn}>
                                <Icon name='chatbubble-outline' style={styles.reactionsBtnLogo} />
                                <Text style={styles.reactionsText} >Comment</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.reactionsBtn}>
                                <Icon name='logo-whatsapp' style={styles.reactionsBtnLogo} />
                                <Text style={styles.reactionsText} >Send</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.reactionsBtn}>
                                <Icon name='arrow-redo-outline' style={styles.reactionsBtnLogo} />
                                <Text style={styles.reactionsText} >Share</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            })}
        </View>
    )
}

export default PostComponent

