import React from 'react';

const header = () => (
  <nav>
    <div className="nav-wrapper purple darken-2">
      <div className="container">
        <a href="#" className="brand-logo hide-on-med-and-down">
          Logo
        </a>
        <ul id="nav-mobile" className="right ">
          <li>
            <a href="/auth/google"> SIGN IN WITH GOOGLE </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default header;
