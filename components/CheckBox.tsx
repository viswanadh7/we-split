import { useGlobalState } from '@/hooks/global-state';
import React from 'react';
import { StyleSheet, View } from 'react-native';

type CheckBoxProps = {
    isChecked: boolean;
};

const CheckBox = ({ isChecked }: CheckBoxProps) => {
    const { theme } = useGlobalState();
    return (
        <View
            style={[
                styles.checkBox,
                {
                    borderColor: theme.colors.border,
                    backgroundColor: isChecked
                        ? theme.colors.primary
                        : theme.colors.background,
                },
            ]}
        />
    );
};

export default CheckBox;

const styles = StyleSheet.create({
    checkBox: {
        height: 22,
        width: 22,
        borderRadius: 11,
        borderWidth: 1,
        borderStyle: 'solid',
    },
});
