import Link from 'next/link';
import classNames from 'classnames';
import styles from './NavButton.module.scss';

const NavButton = ({ label, slug, modCta }) => {
  const navButtonClasses = classNames([styles['navbutton'], modCta && styles['navbutton--cta']]);

  return (
    <Link href={`/${slug}`}>
      <a className={navButtonClasses}>{label}</a>
    </Link>
  );
};

export default NavButton;
