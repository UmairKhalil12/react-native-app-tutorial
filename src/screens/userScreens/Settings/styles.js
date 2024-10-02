import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    settingView: {
        flex: 1,
        alignItems: 'center'
    },
    profileView: {
        padding: 10,
        width: '95%',
        marginTop: '15%',
        shadowColor: '#000',
        backgroundColor: '#F8F8FF',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 5,
        borderRadius: 20,
    },
    myProfileView: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        width: '100%',
        padding: 10,

    },
    addNewProfile: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        width: '100%',
        padding: 10,
        borderTopWidth: 1,
        borderColor: 'lightgrey'
    },

    addNewProfileText: {
        fontWeight: '500',
        fontSize: 15,
        color: 'grey'
    },

    profileViewText: {
        color: 'black',
        fontWeight: '500',
        fontSize: 20
    },
    profilePhoto: {
        height: 50,
        width: 50,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'white'
    },
    shortcutView: {
        marginTop: 20,
        flexDirection: 'column',
        textAlign: 'left',
        width: '100%',
        padding: 10,
    },
    shortcutText: {
        color: 'black',
        fontWeight: 'bold',
    },
    shortcutImageView: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'flex-start',
        overflow: 'scroll',
        gap: 10
    },
    shortcutOneView: {
        width: '15%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    shortcutImg: {
        width: '100%',
        height: 60,
        borderRadius: 10
    },

    shortcutFriendImg: {
        width: '100%',
        height: 60,
        borderRadius: 100
    },

    shortcutImgText: {
        // margin: '0 auto',
        width: '100%',
        textAlign: 'left',
        flexWrap: 'wrap',
        fontSize: 12,
        color: 'grey'
    },
    settingsMainDiv: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '95%',
        borderTopWidth: 0.5,
        borderColor: 'grey',
        padding : 15
    },
    settingSubDiv: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    settingText: {
        color: 'black',
        fontWeight: '600',
        fontSize: 14,
        textTransform : 'capitalize'
    },
    settingsMainDivLast: {
        borderBottomWidth: 0.5,
        borderColor: 'grey'
    }
})

export default styles