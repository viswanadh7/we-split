import { useGlobalState } from '@/hooks/global-state';
import React, { ReactNode } from 'react';
import { Text, type TextProps } from 'react-native';

type CustomTextProps = TextProps & {
    children: string | ReactNode;
};

const CustomText = ({ style, children }: CustomTextProps) => {
    const { theme } = useGlobalState();
    return (
        <Text style={[style, { color: theme.colors.text }]}>{children}</Text>
    );
};

export default CustomText;
