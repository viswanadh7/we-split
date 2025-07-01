import {
    DarkTheme as NavigationDark,
    DefaultTheme as NavigationLight,
} from '@react-navigation/native';

export const lightTheme = NavigationLight;

// export const darkTheme = {
//     ...NavigationDark,
//     colors: {
//         ...NavigationDark.colors,
//         background: '#121212',
//         text: '#ffffff',
//         primary: '#BB86FC',
//         // Optional: override more if needed
//     },
// };

export const darkTheme = NavigationDark

export type ThemeType = typeof darkTheme;
