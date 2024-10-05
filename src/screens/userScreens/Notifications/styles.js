import { StyleSheet } from 'react-native'
import { scale, verticalScale } from 'react-native-size-matters'

const styles = StyleSheet.create({
    notificationView: {
        // flex : 1,
        // marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textNotifications: {
        color: 'black',
        fontSize: scale(18),
        fontWeight: '400'
    },
    notificationHeadingText: {
        fontSize: scale(14),
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'left',
        marginLeft : scale(12),
        marginTop : verticalScale(8)
    },
    notificationDiv: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: scale(8),
        paddingLeft: scale(8),
        paddingTop: verticalScale(8),
        paddingBottom: verticalScale(8),
        paddingTop: verticalScale(8),
        width: '100%',
        backgroundColor: 'transparent'
    },
    notificationDivRead: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: scale(8),
        paddingLeft: scale(8),
        paddingTop: verticalScale(8),
        paddingBottom: verticalScale(8),
        paddingTop: verticalScale(8),
        width: '100%',
        backgroundColor: '#E7F3FF'
    },
    notificationDp: {
        width: scale(70),
        height: verticalScale(70),
        borderRadius: scale(100),
        borderWidth: scale(1),
        borderColor: 'white'
    },

    notificationSubDiv: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(6)
    },

    notificationTextDiv: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '72.5%'
    },
    notificationText: {
        color: 'black',
        fontSize: scale(13),
        fontWeight : '500'
    },
    notificationTimeText: {
        color: 'grey',
        fontSize: scale(11)
    }
})

export default styles