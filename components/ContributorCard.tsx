import { useGlobalState } from '@/hooks/global-state';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CustomText from './CustomText';

type ContributorCardProps = {
    name: string;
    amount: number;
};

const ContributorCard = ({ name, amount }: ContributorCardProps) => {
    const { theme } = useGlobalState();
    return (
        <View style={[styles.card, { borderColor: theme.colors.border }]}>
            <CustomText style={styles.name}>{name}</CustomText>
            <CustomText style={styles.amount}>
                {amount.toLocaleString()}
            </CustomText>
        </View>
    );
};

export default ContributorCard;

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderWidth: 1,
        borderRadius: 8,
        marginVertical: 5,
    },
    name: {
        fontSize: 20,
    },
    amount: {
        fontSize: 20,
    },
});
