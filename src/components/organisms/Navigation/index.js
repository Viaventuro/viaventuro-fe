import { useContext } from 'react';
import { GeneralContext } from '@/context/GeneralContext';
import styles from './Navigation.module.scss';

const Navigation = ({}) => {
  const { general } = useContext(GeneralContext);
  console.log(general.navigation);

  return <nav>Navigation</nav>;
};

export default Navigation;
