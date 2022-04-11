import Title from '@/components/atoms/Title';
import Link from 'next/link';
import { StructuredText } from 'react-datocms';
import styles from './LandingBlock.module.scss';

const LandingBlock = ({ title, body, callToAction }) => {
  return (
    <div className={styles['landing-block']}>
      <Title title={title} modUppercase />
      <StructuredText data={body} />
      {callToAction.map((cta, i) => {
        return (
          <Link key={i} href={cta.externalLink}>
            <a>{cta.label}</a>
          </Link>
        );
      })}
    </div>
  );
};

export default LandingBlock;
