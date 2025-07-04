import ContextProvider from '@/context';
import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
        <ContextProvider>
            <Stack initialRouteName="(tabs)">
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen
                    name="signin/index"
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="signup/index"
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="newroom/index"
                    options={{ headerShown: false }}
                />
            </Stack>
        </ContextProvider>
    );
}
