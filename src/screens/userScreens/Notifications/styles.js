import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    notificationView: {
        // flex : 1,
        // marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textNotifications: {
        color: 'black',
        fontSize: 20,
        fontWeight: '400'
    },
    notificationHeadingText: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'left',
        marginLeft : 15,
        marginTop : 20
    },
    notificationDiv: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 15,
        paddingBottom: 15,
        paddingTop: 10,
        width: '100%',
        backgroundColor: 'transparent'
    },
    notificationDivRead: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 20,
        paddingBottom: 20,
        paddingTop: 10,
        width: '100%',
        backgroundColor: '#E7F3FF'
    },
    notificationDp: {
        width: 70,
        height: 70,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: 'white'
    },

    notificationSubDiv: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },

    notificationTextDiv: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '72.5%'
    },
    notificationText: {
        color: 'black',
        fontSize: 14,
        fontWeight : '500'
    },
    notificationTimeText: {
        color: 'grey',
        fontSize: 12
    }
})

export default styles