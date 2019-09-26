import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

function Aside({ children, className, width }) {
  return (
    <aside className={cn(className, 'layout-aside')} style={width && { width }}>
      {children}
    </aside>
  );
}

Aside.defaultProps = {
  children: null,
  className: undefined,
  width: undefined,
};

Aside.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  width: PropTypes.number,
};

export default Aside;
