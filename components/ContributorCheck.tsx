import { useGlobalState } from '@/hooks/global-state';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import CheckBox from './CheckBox';
import CustomText from './CustomText';

type ContributorCardProps = {
    name: string;
    isChecked: boolean;
    onPress: VoidFunction;
};

const ContributorCheck = ({
    name,
    isChecked,
    onPress,
}: ContributorCardProps) => {
    const { theme } = useGlobalState();
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.card, { borderColor: theme.colors.border }]}>
                <CheckBox isChecked={isChecked} />
                <CustomText style={styles.name}>{name}</CustomText>
            </View>
        </TouchableOpacity>
    );
};

export default ContributorCheck;

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderWidth: 1,
        borderRadius: 8,
        marginVertical: 5,
    },
    name: {
        fontSize: 20,
    },
});
