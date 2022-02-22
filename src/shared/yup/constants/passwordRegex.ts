const passwordRegex =
    /^(?=.*[A-Z])(?!.*[\s])(?=.*[0-9])(?=.*[!#"$%&\\/()*\\+@?^:,."'|{}\\[\]\-~_`]).{8,}$/gm;

export default passwordRegex;
