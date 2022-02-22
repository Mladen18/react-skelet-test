import { FC, useContext } from 'react';
import { MultiLanguageSupportContext } from '../../../../core/translations/contexts';

const PageNotFound: FC = () => {
    const { t } = useContext(MultiLanguageSupportContext);

    return <div>404 - {t('page-not-found')}</div>;
};

export default PageNotFound;
