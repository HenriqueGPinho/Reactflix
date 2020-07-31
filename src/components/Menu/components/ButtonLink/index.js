import React from 'react';
import PropTypes from 'prop-types';

function ButtonLink(props) {
  const { href } = props;
  const { className } = props;
  const { children } = props;

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

ButtonLink.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.array.isRequired,
};

export default ButtonLink;
