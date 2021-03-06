import React from 'react';
import classNames from 'classnames';

/*
|--------------------------------------------------------------------------
| NavDropdown
|--------------------------------------------------------------------------
|
| Stateless component
|
*/

const NavDropdown = ({ className = '', children }) => (
    <li
        className={classNames(
            'nav-item',
            'dropdown',
            className,
        )}
    >
        {children}
    </li>
);

NavDropdown.propTypes = {
    className: React.PropTypes.string,
    children: React.PropTypes.node.isRequired,
};

export default NavDropdown;
