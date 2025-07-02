import { useGlobalState } from '@/hooks/global-state';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
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
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="home" size={28} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="transaction"
                options={{
                    headerShown: false,
                    title: 'New Split',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons
                            name="add-circle-outline"
                            size={28}
                            color={color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="history"
                options={{
                    headerShown: false,
                    title: 'History',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="history" size={28} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
};

export default TabLayout;
