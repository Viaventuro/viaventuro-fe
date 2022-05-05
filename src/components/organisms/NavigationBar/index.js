import { useContext } from 'react';
import { useState } from 'react';
import classNames from 'classnames';
import { GeneralContext } from '@/context/GeneralContext';
import Navigation from '@/components/molecules/Navigation';
import styles from './NavigationBar.module.scss';
import Icon from '@/components/atoms/Icon';
import { IconLogo } from '@/assets/icons';
import Link from 'next/link';

const NavigationBar = ({}) => {
  const { general } = useContext(GeneralContext);
  const [visible, setVisible] = useState(false);

  const navigation = general?.navigation
    ? general.navigation.map((nav) => {
        return {
          label: nav.pageName,
          slug: nav.slug,
        };
      })
    : [];

  const toggleNav = () => {
    setVisible(!visible);
  };

  return (
    <header
      className={classNames([
        styles['navigation-bar'],
        visible && styles['navigation-bar--visible'],
      ])}
    >
      <span
        className={classNames([
          styles['navigation-bar__inner'],
          !visible && styles['navigation-bar__inner--invisible'],
          'vv-layout',
        ])}
      >
        <Link href="/">
          <a>
            <Icon modBlock icon={IconLogo} className={styles['navigation-bar__logo']} />
          </a>
        </Link>

        <Navigation navigation={navigation} />
      </span>
      <button onClick={toggleNav} className={styles['navigation-bar__toggle']}>
        nav
      </button>
    </header>
  );
};

export default NavigationBar;
