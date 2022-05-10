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
  const [navOpen, setNavOpen] = useState(false);

  const navigation = general?.navigation
    ? general.navigation.map((nav) => {
        return {
          label: nav.pageName,
          slug: nav.slug,
        };
      })
    : [];

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header
      className={classNames([
        styles['navigation-bar'],
        navOpen && styles['navigation-bar--visible'],
      ])}
    >
      <span
        className={classNames([
          styles['navigation-bar__inner'],
          !navOpen && styles['navigation-bar__inner--navClosed'],
          'vv-layout',
        ])}
      >
        <Link href="/">
          <a>
            <Icon
              modBlock
              icon={IconLogo}
              className={classNames([
                styles['navigation-bar__logo'],
                navOpen && styles['navigation-bar__logo--navOpen'],
              ])}
            />
          </a>
        </Link>

        <Navigation
          navigation={navigation}
          className={classNames([
            styles['navigation-nav'],
            !navOpen && styles['navigation-bar__nav--invisible'],
          ])}
        />
      </span>
      <button onClick={toggleNav} className={styles['navigation-bar__toggle']}>
        nav
      </button>
    </header>
  );
};

export default NavigationBar;
