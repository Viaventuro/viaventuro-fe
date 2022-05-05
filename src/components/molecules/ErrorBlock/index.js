import { IconLogo } from '@/assets/icons';
import Button from '@/components/atoms/Button';
import Icon from '@/components/atoms/Icon';
import PageHead from '@/components/atoms/PageHead';
import Title from '@/components/atoms/Title';
import styles from './ErrorBlock.module.scss';

const ErrorBlock = ({ title, subTitle, ctaLabel, ctaLink }) => {
  return (
    <>
      <PageHead />
      <section className="vv-layout">
        <div className={styles['error-block']}>
          <Icon icon={IconLogo} className={styles['error-block__logo']} />

          <Title title={title} modUppercase modCenter />

          <span className={styles['error-block__body']}>{subTitle}</span>
          {ctaLabel && ctaLink && <Button label={ctaLabel} href={ctaLink} modLink modWithArrow />}
        </div>
      </section>
    </>
  );
};

export default ErrorBlock;
