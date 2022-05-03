import NavButton from '@/components/atoms/NavButton';
import styles from './Navigation.module.scss';

const Navigation = ({ navigation }) => {
  return (
    <nav>
      <ul className={styles['navigation__list']}>
        {navigation.map((item, i) => {
          return (
            <li key={i} className={styles['navigation__list__item']}>
              <NavButton label={item.label} slug={item.slug} />
            </li>
          );
        })}
        <li className={styles['navigation__list__item']}>
          <NavButton label="Contact" href="#contact" modCta />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
