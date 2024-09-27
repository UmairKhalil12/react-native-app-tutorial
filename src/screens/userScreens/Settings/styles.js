import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    settingView: {
        flex: 1,
        alignItems: 'center'
    },
    settingText: {
        fontSize: 20,
        fontWeight: '400',
        color: 'black'
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
        justifyContent: 'space-between',
        overflow: 'scroll'
    },
    shortcutImg: {
        width: 60,
        height: 60,
        borderRadius: 10
    },

    shortcutFriendImg: {
        width: 60,
        height: 60,
        borderRadius: 100
    },
    shortcutOneView: {
        width: '25%'
    },
    shortcutImgText: {
        margin: '0 auto',
        width: '50%',
        textAlign: 'center',
        flexWrap: 'wrap',
        fontSize: 12
    },
    settingsTab: {
        padding: 10,
        width: '95%',
        marginTop: '2%',
        height: 70,
        shadowColor: '#000',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        backgroundColor: '#F8F8FF',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 5,
        borderRadius: 10,
    },
    settingsTabText: {
        color: 'black',
        fontSize: 15,
        fontWeight: '500'
    }
})

export default styles