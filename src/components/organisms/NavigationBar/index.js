import { useState } from 'react';
import classNames from 'classnames';
import Navigation from '@/components/molecules/Navigation';
import styles from './NavigationBar.module.scss';
import Icon from '@/components/atoms/Icon';
import { IconLogo } from '@/assets/icons';
import Link from 'next/link';
import Hamburger from '@/components/atoms/Hamburger';

const NavigationBar = ({ navigation }) => {
  const [navOpen, setNavOpen] = useState(false);

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
      <span className={styles['navigation-bar__toggle']}>
        <Hamburger active={navOpen} onClick={toggleNav} />
      </span>
    </header>
  );
};

export default NavigationBar;
