import useTranslation from 'next-translate/useTranslation';
import ErrorBlock from '@/components/molecules/ErrorBlock';

const Index = ({}) => {
  const { t } = useTranslation('error');

  return (
    <ErrorBlock
      title={`404 ${t('Error')}`}
      subTitle={t('PageDoesNotExist')}
      ctaLabel={t('BackToHome')}
      ctaLink="/"
    />
  );
};

export default Index;
