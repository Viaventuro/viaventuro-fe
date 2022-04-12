import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Title.module.scss';

const Title = ({
  title,
  variant,
  style,
  tagName,
  modLight,
  modCenter,
  modUppercase,
  className,
}) => {
  const titleStyle = style ? style : variant;
  const TagName = tagName ?? variant;

  const titleClassNames = classNames([
    styles['title'],
    styles[`title--${titleStyle}`],
    modLight && styles['title--light'],
    modUppercase && styles[`title--uppercase`],
    modCenter && styles['title--center'],
    className,
  ]);

  return <TagName className={titleClassNames}>{title}</TagName>;
};

Title.propTypes = {
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  style: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']),
};

Title.defaultProps = {
  variant: 'h1',
};

export default Title;
