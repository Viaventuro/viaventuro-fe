import NavButton from '@/components/atoms/NavButton';
import { useRouter } from 'next/router';
import styles from './Navigation.module.scss';

const Navigation = ({ navigation }) => {
  const router = useRouter();

  return (
    <nav>
      <ul className={styles['navigation__list']}>
        {navigation.map((item, i) => {
          return (
            <li key={i} className={styles['navigation__list__item']}>
              <NavButton
                label={item.label}
                slug={item.slug}
                modActive={`/${item.slug}` === router.asPath}
              />
            </li>
          );
        })}
        <li className={styles['navigation__list__item']}>
          <NavButton label="Contact" slug="#contact" modCta />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
