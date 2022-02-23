import { createContext } from 'react';
import { ThemeEnum } from '../enums';

type IThemeContext = {
    theme: ThemeEnum;
    setTheme: (theme: ThemeEnum) => void;
};

const ThemeContext = createContext<IThemeContext>({
    theme: ThemeEnum.Light,
    setTheme: () => {
        console.log('Missing theme provider');
    },
});

export default ThemeContext;
