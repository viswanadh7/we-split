import { useGlobalState } from '@/hooks/global-state';
import { Tabs } from 'expo-router';
import React from 'react';

const TabLayout = () => {
    const { theme } = useGlobalState();
    return (
        <Tabs
            screenOptions={{
                tabBarStyle: { backgroundColor: theme.colors.background },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    headerShown: false,
                    title: 'Home',
                }}
            />
            <Tabs.Screen
                name="transaction"
                options={{
                    headerShown: false,
                    title: 'Add',
                }}
            />
            <Tabs.Screen
                name="history"
                options={{ headerShown: false, title: 'History' }}
            />
        </Tabs>
    );
};

export default TabLayout;
