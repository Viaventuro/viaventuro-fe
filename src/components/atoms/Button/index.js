import PropTypes from 'prop-types';
import Link from 'next/link';
import classNames from 'classnames';
import styles from './Button.module.scss';

const Button = ({
  label,
  variant,
  modLink,
  modWithArrow,
  modTargetBlank,
  href,
  className,
  ...props
}) => {
  const buttonClassNames = classNames([styles['button'], styles[`button--${variant}`], className]);

  if (modLink) {
    return (
      <Link href={href}>
        <a
          className={buttonClassNames}
          {...props}
          target={modTargetBlank ? '_blank' : '_self'}
          noopener={modTargetBlank.toString()}
          noreferrer={modTargetBlank.toString()}
        >
          <span className={styles['button__label']}>
            {label} {modWithArrow && <span className={styles['button__label__arrow']}> &gt;</span>}
          </span>
        </a>
      </Link>
    );
  }
  return (
    <button className={buttonClassNames} {...props}>
      <span className={styles['button__label']}>
        {label} {modWithArrow && <span className={styles['button__label__arrow']}> &gt;</span>}
      </span>
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary']),
  type: PropTypes.oneOf(['submit', 'button']),
  href: PropTypes.string,
  onClick: PropTypes.func,
  modLink: PropTypes.bool,
};

Button.defaultProps = {
  variant: 'primary',
  modLink: false,
};

export default Button;
