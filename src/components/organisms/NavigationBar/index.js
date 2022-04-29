import { useContext } from 'react';
import { GeneralContext } from '@/context/GeneralContext';
import styles from './NavigationBar.module.scss';
import Link from 'next/link';
import Navigation from '@/components/molecules/Navigation';

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
      [Logo]
      <Navigation navigation={navigation} />
    </header>
  );
};

export default NavigationBar;
