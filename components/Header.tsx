import { useGlobalState } from '@/hooks/global-state';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import CustomText from './CustomText';

const Header = () => {
    const { theme } = useGlobalState();
    return (
        <View style={styles.header}>
            <View>
                <CustomText style={styles.heading}>WeSplit</CustomText>
                <CustomText style={styles.tagline}>
                    For friends who share everything — even bills.
                </CustomText>
            </View>
            <TouchableOpacity>
                <MaterialIcons
                    name="settings"
                    size={24}
                    color={theme.colors.text}
                />
            </TouchableOpacity>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    heading: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    tagline: {
        fontWeight: 'light',
        width: '80%',
        marginTop: 5,
        fontStyle: 'italic',
    },
});
