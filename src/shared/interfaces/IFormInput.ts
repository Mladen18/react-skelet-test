import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

interface IFormInput
    extends DetailedHTMLProps<
        InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    /**
     * Input name
     */
    name: string;

    /**
     * Label text of the `input` element.
     */
    label?: string;

    /**
     * Error text attribute of the `input` element.
     */
    errorMessage?: string;

    /**
     * Error attribute of the `input` element.
     */
    error?: boolean;

    /**
     * Error attribute of the `input` element.
     */
    helpMessage?: string;

    /**
     * Input name
     */
    type?: string;

    /**
     * Console log name
     */
    compName: string;

    /**
     * Placeholder
     */
    placeholder?: string;

    /**
     * Search handler
     */
    searchHandler: (event: string) => string;

    /**
     * Console message
     */
    message: string;
}

export default IFormInput;
