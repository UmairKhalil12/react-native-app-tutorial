import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import ads from './ads';

const AdsComponent = () => {
    
    const truncateTitle = (word, length) => {
        if (word.length > length) {
            return word.substring(0, length) + '...';
        }
        return word;
    };

    return (
        <ScrollView contentContainerStyle={styles.adView}>
            {ads?.map((ad, index) => {
                return (
                    <View key={index} style={styles.singleAdView}>
                        <Image source={ad?.img} style={styles.adImg} />
                        <Text style={styles.adText}>Rs{ad?.price} . {truncateTitle(ad?.name, 7)}</Text>
                    </View>
                );
            })}
        </ScrollView>
    );
};

export default AdsComponent;

const styles = StyleSheet.create({
    adView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        flexWrap: 'wrap',
        width: '100%',
    },
    singleAdView: {
        width: '50%',
        marginBottom: 10,
    },
    adImg: {
        width: '95%',
        height: 150,
    },
    adText: {
        fontSize: 14,
        color: 'black',
        textAlign: 'center',
    },
});
