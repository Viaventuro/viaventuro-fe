import { IconLogo } from '@/assets/icons';
import Button from '@/components/atoms/Button';
import Icon from '@/components/atoms/Icon';
import Title from '@/components/atoms/Title';
import { StructuredText } from 'react-datocms';
import styles from './ErrorBlock.module.scss';

const ErrorBlock = ({ title, subTitle, ctaLabel, ctaLink }) => {
  return (
    <section className="vv-layout">
      <div className={styles['error-block']}>
        <div className={styles['error-block__logo__wrapper']}>
          <Icon icon={IconLogo} className={styles['error-block__logo']} />
        </div>

        <Title title={title} modUppercase modCenter />

        <span className={styles['error-block__body']}>{subTitle}</span>

        <Button label={ctaLabel} href={ctaLink} modLink modWithArrow />
      </div>
    </section>
  );
};

export default ErrorBlock;
