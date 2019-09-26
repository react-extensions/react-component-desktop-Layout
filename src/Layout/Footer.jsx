import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

function Footer({ children, className, height }) {
  return (
    <footer
      className={cn(className, 'layout-footer')}
      style={height && { height }}
    >
      {children}
    </footer>
  );
}

Footer.defaultProps = {
  children: null,
  className: '',
  height: undefined,
};

Footer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  height: PropTypes.number,
};

export default Footer;
