import React from 'react';
import { StyleSheet, View } from 'react-native';
import CustomText from './CustomText';

const TotalCard = ({ total }: { total: number }) => {
    return (
        <View style={styles.card}>
            <CustomText style={styles.amount}>
                {total.toLocaleString()}
            </CustomText>
        </View>
    );
};

export default TotalCard;

const styles = StyleSheet.create({
    card: {
        borderWidth: 5,
        borderStyle: 'solid',
        borderColor: 'red',
        height: 250,
        width: 250,
        borderRadius: 125,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    amount: {
        fontSize: 50,
        fontWeight: 'bold',
    },
});
