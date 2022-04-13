import useTranslation from 'next-translate/useTranslation';
import ErrorBlock from '@/components/molecules/ErrorBlock';

const Index = ({}) => {
  const { t } = useTranslation('error');

  return (
    <ErrorBlock
      title={`500 ${t('Error')}`}
      subTitle={t('SomethingWentWrong')}
      ctaLabel={t('BackToHome')}
      ctaLink="/"
    />
  );
};

export default Index;
