import { darkTheme, lightTheme, ThemeType } from '@/styles/color';
import { createContext, ReactNode } from 'react';
import { useColorScheme } from 'react-native';

type TContext = {
    theme: ThemeType;
};

export const Context = createContext<TContext>({} as TContext);

const ContextProvider = ({ children }: { children: ReactNode }) => {
    const colorScheme = useColorScheme();
    const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

    return <Context.Provider value={{ theme }}>{children}</Context.Provider>;
};

export default ContextProvider;
