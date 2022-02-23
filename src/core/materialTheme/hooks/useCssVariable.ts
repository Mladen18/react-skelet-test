const useCssVariable = (variable: string): string => {
    return getComputedStyle(document.documentElement)
        .getPropertyValue(variable)
        .trim(); // removes space between : and # when declaring css variable
};

export default useCssVariable;
