import { FC } from 'react';
import { useTranslate } from 'core/translations/hooks';
import { Button } from '@mui/material';
import { P } from 'shared/components';
import SvgIcon from 'shared/components/SvgIcon/SvgIcon';
import ResetPasswordFailLogo from '../../../../assets/icons/reset-password-fail.svg';
import ResetPasswordSuccessLogo from '../../../../assets/icons/reset-password-success.svg';
import styles from './ResetPasswordSummary.module.scss';

type IStatus = 'success' | 'fail';

interface IResetPasswordSummaryProps {
    status: IStatus;
    email: string;
}

const ResetPasswordSummary: FC<IResetPasswordSummaryProps> = ({
    status,
    email,
}) => {
    const t = useTranslate();

    const icon =
        status === 'success' ? ResetPasswordSuccessLogo : ResetPasswordFailLogo;

    const message_1 = t(`reset-password-summary-message-${status}-1`);
    const message_2 = t(`reset-password-summary-message-${status}-2`);

    return (
        <div className={styles.container}>
            <SvgIcon spriteUrl={icon} className={styles.logo} />

            <P className={styles.message} textAlign="center">
                {message_1}
                <strong>&nbsp;{email}&nbsp;</strong>
                {message_2}
            </P>

            <div className={styles.actions}>
                <Button
                    className={styles.button1}
                    color="primary"
                    variant="contained">
                    {t('reset-password-summary-button-1')}
                </Button>
                <Button
                    className={styles.button2}
                    variant="outlined">
                    {t('reset-password-summary-button-2')}
                </Button>
            </div>
        </div>
    );
};

export default ResetPasswordSummary;
