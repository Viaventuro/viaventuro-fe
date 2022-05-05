import { useContext } from 'react';
import classNames from 'classnames';
import { GeneralContext } from '@/context/GeneralContext';
import Navigation from '@/components/molecules/Navigation';
import styles from './NavigationBar.module.scss';
import Icon from '@/components/atoms/Icon';
import { IconLogo } from '@/assets/icons';
import Link from 'next/link';

const NavigationBar = ({}) => {
  const { general } = useContext(GeneralContext);

  const navigation = general?.navigation
    ? general.navigation.map((nav) => {
        return {
          label: nav.pageName,
          slug: nav.slug,
        };
      })
    : [];

  return (
    <header className={styles['navigation-bar']}>
      <span className={classNames([styles['navigation-bar__inner'], 'vv-layout'])}>
        <Link href="/">
          <a>
            <Icon modBlock icon={IconLogo} className={styles['navigation-bar__logo']} />
          </a>
        </Link>

        <Navigation navigation={navigation} />
      </span>
    </header>
  );
};

export default NavigationBar;
