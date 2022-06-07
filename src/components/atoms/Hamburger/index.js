import classNames from 'classnames';
import styles from './Hamburger.module.scss';

const Hamburger = ({ active, onClick }) => {
  const classes = classNames([
    styles['hamburger__item'],
    active && styles['hamburger__item--active'],
  ]);

  return (
    <button onClick={onClick} className={styles['hamburger']}>
      <span className={classes}></span>
      <span className={classes}></span>
      <span className={classes}></span>
    </button>
  );
};

export default Hamburger;
