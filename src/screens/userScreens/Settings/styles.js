import { StyleSheet } from "react-native"
import { scale, verticalScale } from "react-native-size-matters"

const styles = StyleSheet.create({
    settingView: {
        flex: 1,
        alignItems: 'center'
    },
    profileView: {
        padding: scale(8),
        width: '95%',
        marginTop: '15%',
        shadowColor: '#000',
        backgroundColor: '#F8F8FF',
        shadowOffset: {
            width: scale(0),
            height: scale(4),
        },
        shadowOpacity: scale(0.2),
        shadowRadius: scale(6),
        elevation: scale(5),
        borderRadius: scale(20),
    },
    myProfileView: {
        flexDirection: 'row',
        gap: scale(8),
        alignItems: 'center',
        width: '100%',
        padding: scale(8),

    },
    addNewProfile: {
        flexDirection: 'row',
        gap: scale(8),
        alignItems: 'center',
        width: '100%',
        padding: scale(8),
        borderTopWidth: scale(1),
        borderColor: 'lightgrey'
    },

    addNewProfileText: {
        fontWeight: '500',
        fontSize: scale(14),
        color: 'grey'
    },

    profileViewText: {
        color: 'black',
        fontWeight: '500',
        fontSize: scale(18)
    },
    profilePhoto: {
        height: verticalScale(50),
        width: scale(50),
        borderRadius: scale(100),
        borderWidth: scale(1),
        borderColor: 'white'
    },
    shortcutView: {
        marginTop: verticalScale(20),
        flexDirection: 'column',
        textAlign: 'left',
        width: '100%',
        padding: scale(10),
    },
    shortcutText: {
        color: 'black',
        fontWeight: 'bold',
    },
    shortcutImageView: {
        marginTop: scale(8),
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'flex-start',
        overflow: 'scroll',
        gap: scale(8)
    },
    shortcutOneView: {
        width: '15%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    shortcutImg: {
        width: '100%',
        height: verticalScale(50),
        borderRadius: scale(10)
    },

    shortcutFriendImg: {
        width: '100%',
        height:verticalScale(50),
        borderRadius: scale(100)
    },

    shortcutImgText: {
        // margin: '0 auto',
        width: '100%',
        textAlign: 'left',
        flexWrap: 'wrap',
        fontSize: scale(11),
        color: 'grey'
    },
    settingsMainDiv: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '95%',
        borderTopWidth: scale(0.5),
        borderColor: 'grey',
        padding : scale(12)
    },
    settingSubDiv: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(8)
    },
    settingText: {
        color: 'black',
        fontWeight: '600',
        fontSize: scale(14),
        textTransform : 'capitalize'
    },
    settingsMainDivLast: {
        borderBottomWidth: scale(0.5),
        borderColor: 'grey'
    }
})

export default styles