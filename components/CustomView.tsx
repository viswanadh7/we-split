import { useGlobalState } from '@/hooks/global-state';
import React, { ReactNode } from 'react';
import { StyleSheet, View, type ViewProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type CustomViewProps = ViewProps & {
    children: ReactNode;
};

const CustomView = ({ style, children }: CustomViewProps) => {
    const insets = useSafeAreaInsets();
    const { theme } = useGlobalState();
    return (
        <View
            style={[
                styleSheet.container,
                {
                    backgroundColor: theme.colors.background,
                    paddingTop: insets.top + 10,
                },
                style,
            ]}
        >
            {children}
        </View>
    );
};

export default CustomView;

const styleSheet = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
    },
});
