import { Context } from '@/context';
import { useContext } from 'react';

export const useGlobalState = () => {
    const context = useContext(Context);
    return context;
};
