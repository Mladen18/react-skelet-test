import { FC, useEffect, useState } from 'react';
import { ThemeContext } from './context';
import { ThemeEnum } from './enums';

const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState(ThemeEnum.Light);

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
