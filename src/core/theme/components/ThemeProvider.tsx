import { FC, useState } from 'react';
import { ThemeContext } from '../context';
import { ThemeEnum } from '../enums';

const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState(ThemeEnum.Light);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
