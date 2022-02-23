import { createTheme } from '@mui/material';
import { useCssVariable } from '../hooks';
import breakpoints from './breakpoints';

const themeComponents = createTheme({
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: 'contained' },
                    style: {
                        boxShadow: useCssVariable('--btn-shadow'),
                        borderRadius: '4px',
                        ':disabled': {
                            color: useCssVariable('--gray-dark-300'),
                            backgroundColor: useCssVariable(
                                '--btn-secondary-disabled'
                            ),
                        },
                    },
                },
                {
                    props: { variant: 'contained', color: 'primary' },
                    style: {
                        ':hover': {
                            color: 'white',
                        },
                    },
                },
                {
                    props: { variant: 'contained', color: 'secondary' },
                    style: {
                        backgroundColor: useCssVariable('--btn-secondary-bg'),
                        color: useCssVariable('--btn-secondary-main-text'),
                        ':hover': {
                            color: useCssVariable('--btn-secondary-hover-text'),
                            backgroundColor: useCssVariable(
                                '--btn-secondary-hover'
                            ),
                        },
                    },
                },
                {
                    props: { variant: 'contained', color: 'tertiary' },
                    style: {
                        backgroundColor: useCssVariable('--btn-tertiary-bg'),
                        color: useCssVariable('--btn-tertiary-main-text'),
                        ':hover': {
                            backgroundColor: useCssVariable('--primary-light'),
                            color: useCssVariable('--btn-tertiary-hover-text'),
                        },
                    },
                },
                {
                    props: { variant: 'outlined' },
                    style: {
                        color: useCssVariable('--btn-outlined-main-text'),
                        border: `1px solid  ${useCssVariable(
                            '--gray-dark-600'
                        )}`,
                        backgroundColor: useCssVariable('--btn-outlined-bg'),
                        ':hover': {
                            border: `1px solid  ${useCssVariable(
                                '--gray-dark-600'
                            )}`,
                            backgroundColor: useCssVariable(
                                '--btn-outlined-hover'
                            ),
                        },
                        ':disabled': {
                            color: useCssVariable(
                                '--btn-outlined-disabled-text'
                            ),
                            border: `1px solid  ${useCssVariable('--gray')}`,
                            backgroundColor: useCssVariable(
                                '--btn-outlined-disabled'
                            ),
                        },
                    },
                },
                {
                    props: { variant: 'text' },
                    style: {
                        color: useCssVariable('--btn-text-main-text'),
                        backgroundColor: useCssVariable('--btn-text-bg'),
                        ':hover': {
                            color: useCssVariable('--btn-text-hover-text'),
                        },
                        ':disabled': {
                            color: useCssVariable('--btn-text-disabled-text'),
                        },
                    },
                },
                {
                    props: { size: 'medium' },
                    style: {
                        padding: '14px 24px',
                        [breakpoints.up('md')]: {
                            padding: '16px 24px',
                        },
                    },
                },
                {
                    props: { size: 'small' },
                    style: {
                        padding: '8px 24px',
                        [breakpoints.up('md')]: {
                            padding: '12px 24px',
                        },
                    },
                },
            ],
        },
        MuiDivider: {
            variants: [
                {
                    props: { variant: 'fullWidth' },
                    style: {
                        backgroundColor: useCssVariable('--white'),
                    },
                },
            ],
        },
    },
});

export default themeComponents.components;
