import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

function Header({ children, className, height }) {
  return (
    <header
      className={cn(className, 'layout-header')}
      style={height && { height }}
    >
      {children}
    </header>
  );
}

Header.defaultProps = {
  children: null,
  className: '',
  height: undefined,
};

Header.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  height: PropTypes.number,
};

export default Header;
