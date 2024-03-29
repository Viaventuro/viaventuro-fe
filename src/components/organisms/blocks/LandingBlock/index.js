import { IconLogo } from '@/assets/icons';
import Button from '@/components/atoms/Button';
import Icon from '@/components/atoms/Icon';
import Title from '@/components/atoms/Title';
import { StructuredText } from 'react-datocms';
import styles from './LandingBlock.module.scss';

const LandingBlock = ({ title, body, callToAction }) => {
  return (
    <section className="vv-layout">
      <div className={styles['landing-block']}>
        <Icon modBlock icon={IconLogo} className={styles['landing-block__logo']} />

        <Title title={title} modUppercase modCenter />

        <span className={styles['landing-block__body']}>
          <StructuredText data={body} />
        </span>

        {callToAction.map((cta, i) => {
          return (
            <Button
              key={i}
              label={cta.label}
              href={cta.externalLink}
              modTargetBlank={cta.targetBlank}
              modLink
              modWithArrow
            />
          );
        })}
      </div>
    </section>
  );
};

export default LandingBlock;
