import Link from 'next/link';
import classNames from 'classnames';
import styles from './NavButton.module.scss';

const NavButton = ({ label, slug, modCta, modActive }) => {
  const navButtonClasses = classNames([
    styles['navbutton'],
    modCta && styles['navbutton--cta'],
    modActive ? styles['navbutton--active'] : styles['navbutton--inactive'],
  ]);

  return (
    <Link href={`/${slug}`}>
      <a className={navButtonClasses}>{label}</a>
    </Link>
  );
};

export default NavButton;
