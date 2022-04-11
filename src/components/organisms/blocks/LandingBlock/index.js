import Button from '@/components/atoms/Button';
import Title from '@/components/atoms/Title';
import { StructuredText } from 'react-datocms';
import styles from './LandingBlock.module.scss';

const LandingBlock = ({ title, body, callToAction }) => {
  return (
    <div className={styles['landing-block']}>
      <Title title={title} modUppercase />
      <StructuredText data={body} />
      {callToAction.map((cta, i) => {
        return <Button key={i} label={cta.label} href={cta.externalLink} modlink></Button>;
      })}
    </div>
  );
};

export default LandingBlock;
