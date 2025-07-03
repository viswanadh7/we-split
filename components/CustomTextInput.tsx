import { useGlobalState } from '@/hooks/global-state';
import React from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TextInputProps,
    View,
} from 'react-native';
import CustomText from './CustomText';

type TCustomTextInput = {
    label: string;
    placeholder: string;
    errorMessage?: string;
} & TextInputProps;

const CustomTextInput = ({
    label,
    placeholder,
    errorMessage,
    ...rest
}: TCustomTextInput) => {
    const { theme } = useGlobalState();
    return (
        <View style={{ marginVertical: 16 }}>
            <CustomText style={{ fontSize: 18 }}>{label}</CustomText>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={theme.colors.border}
                style={[
                    styles.textInput,
                    {
                        color: theme.colors.text,
                        borderColor: theme.colors.border,
                    },
                ]}
                {...rest}
            />
            {errorMessage && (
                <Text style={{ color: theme.colors.notification }}>
                    {errorMessage}
                </Text>
            )}
        </View>
    );
};

export default CustomTextInput;

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 18,
        marginVertical: 5,
    },
});
