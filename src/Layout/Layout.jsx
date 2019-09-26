import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

function Layout({ children, className, vertical, tile }) {
  return (
    <section
      className={cn(className, 'layout-container', {
        'layout-container-vertical': vertical,
        'layout-container-tile': tile,
      })}
    >
      {children}
    </section>
  );
}

Layout.defaultProps = {
  children: null,
  className: '',
  vertical: false,
  tile: false,
};

Layout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  vertical: PropTypes.bool,
  tile: PropTypes.bool,
};

export default Layout;
