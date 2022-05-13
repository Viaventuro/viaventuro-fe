import classNames from 'classnames';
import styles from './Hamburger.module.scss';

const Hamburger = ({ active, onClick, className }) => {
  const hamburgerClasses = classNames([styles['hamburger'], className]);
  const itemClasses = classNames([
    styles['hamburger__item'],
    active && styles['hamburger__item--active'],
  ]);

  return (
    <button onClick={onClick} className={hamburgerClasses}>
      <span className={itemClasses}></span>
      <span className={itemClasses}></span>
      <span className={itemClasses}></span>
    </button>
  );
};

export default Hamburger;
