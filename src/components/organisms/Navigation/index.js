import { useContext } from 'react';
import { GeneralContext } from '@/context/GeneralContext';
import styles from './Navigation.module.scss';
import Link from 'next/link';

const Navigation = ({}) => {
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
    <nav>
      <ul>
        {navigation.map((nav, i) => {
          return (
            <li key={i}>
              <Link href={`/${nav.slug}`}>
                <a>{nav.label}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
