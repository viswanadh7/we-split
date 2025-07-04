import { useGlobalState } from '@/hooks/global-state';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import CustomText from './CustomText';

type ContributorCardProps = {
    name: string;
    onPress: VoidFunction;
};

const ContributorChip = ({ name, onPress }: ContributorCardProps) => {
    const { theme } = useGlobalState();
    return (
        <TouchableOpacity onPress={onPress}>
            <View
                style={[
                    styles.card,
                    {
                        borderColor: theme.colors.border,
                        backgroundColor: theme.colors.background,
                    },
                ]}
            >
                <CustomText style={styles.name}>{name}</CustomText>
                <MaterialIcons
                    // name="remove-circle-outline"//highlight-remove
                    name="highlight-remove"
                    size={20}
                    color={theme.colors.text}
                />
            </View>
        </TouchableOpacity>
    );
};

export default ContributorChip;

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 15,
        padding: 8,
        borderWidth: 1,
        borderRadius: 28,
        marginVertical: 5,
    },
    name: {
        fontSize: 20,
    },
});
