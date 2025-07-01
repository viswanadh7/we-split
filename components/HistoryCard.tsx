import { useGlobalState } from '@/hooks/global-state';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomText from './CustomText';

type HistoryCardProps = {
    date: string;
    name: string;
    amount: number;
    description: string;
};

const HistoryCard = ({ date, name, amount, description }: HistoryCardProps) => {
    const { theme } = useGlobalState();
    return (
        <View style={[styles.card, { borderColor: theme.colors.border }]}>
            <CustomText style={styles.date}>{date}</CustomText>
            <View style={styles.details}>
                <CustomText style={{ fontSize: 20, maxWidth: '50%' }}>
                    {name}
                </CustomText>
                <Text
                    style={{
                        fontSize: 25,
                        fontWeight: 900,
                        color: theme.colors.primary,
                    }}
                >
                    {amount.toLocaleString()}
                </Text>
            </View>
            <CustomText style={styles.description}>{description}</CustomText>
        </View>
    );
};

export default HistoryCard;

const styles = StyleSheet.create({
    card: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 8,
        marginVertical: 5,
    },
    date: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'light',
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    description: {
        fontSize: 12,
        fontWeight: 'light',
        fontStyle: 'italic',
    },
});
