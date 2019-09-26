import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

function Main({ children, className }) {
  return <main className={cn(className, 'layout-main')}>{children}</main>;
}

Main.defaultProps = {
  children: null,
  className: '',
};

Main.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Main;
