import { darkTheme, lightTheme, ThemeType } from '@/styles/color';
import { UserDetailsType } from '@/types/commonTypes';
import { useRouter } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';

type TContext = {
    theme: ThemeType;
    userDetails?: UserDetailsType;
    setUserDetails: (userDetails: UserDetailsType) => void;

    saveUserDetails: (userDetails: UserDetailsType) => Promise<void>;
};

export const Context = createContext<TContext>({} as TContext);

const ContextProvider = ({ children }: { children: ReactNode }) => {
    const router = useRouter();
    const colorScheme = useColorScheme();
    const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

    const [userDetails, setUserDetails] = useState<UserDetailsType>();

    useEffect(() => {
        fetchUserDetails();
    }, []);

    // Fetch user details from secure storage
    // This will be called when the app starts to check if user is already logged in
    const fetchUserDetails = async () => {
        try {
            const userDetailsString = await SecureStore.getItemAsync(
                'userDetails'
            );
            if (userDetailsString) {
                setUserDetails(JSON.parse(userDetailsString));
            } else clearUserDetails();
        } catch (error) {
            console.error('Error fetching user details:', error);
        }
    };

    // Save user details to secure storage
    const saveUserDetails = async (userDetails: UserDetailsType) => {
        setUserDetails(userDetails);
        await SecureStore.setItemAsync(
            'userDetails',
            JSON.stringify(userDetails)
        );
    };

    // Clear user details from secure storage
    const clearUserDetails = async () => {
        await SecureStore.deleteItemAsync('userDetails');
        router.replace('/signin'); // Redirect to sign-in page
    };

    return (
        <Context.Provider
            value={{ theme, userDetails, setUserDetails, saveUserDetails }}
        >
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;
