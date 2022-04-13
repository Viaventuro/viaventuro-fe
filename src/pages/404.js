import ErrorBlock from '@/components/molecules/ErrorBlock';

const Index = ({}) => {
  return (
    <ErrorBlock
      title="404 Error"
      subTitle="Het lijkt erop dat deze pagina niet bestaat."
      ctaLabel="Terug naar home"
      ctaLink="/"
    />
  );
};

export default Index;
