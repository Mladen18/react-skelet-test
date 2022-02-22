import { ComponentProps, FC } from 'react';

const combineContextProviders = (...components: FC[]): FC => {
    return components.reduce(
        (AccumulatedComponents, CurrentComponent) => {
            const TempComponent: FC<ComponentProps<FC>> = ({ children }) => {
                return (
                    <AccumulatedComponents>
                        <CurrentComponent>{children}</CurrentComponent>
                    </AccumulatedComponents>
                );
            };

            return TempComponent;
        },
        ({ children }) => <>{children}</>
    );
};

export default combineContextProviders;
