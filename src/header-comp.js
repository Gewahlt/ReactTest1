import React from 'react';

class HeaderComp extends React.Component {  
  render() {
      return (
        <div className="header">
          <nav className="logo">
            <ul>
              <li><a href="" className="header-nav-link">Usability<span className="aqua-color">Lab</span></a></li>
              <li><input id="algolia-doc-search" type="text" placeholder="Search" className="header-nav-link" /></li>
            </ul>
            <ul className="nav-items">
              <li><a href="" className="header-nav-link">POLLS</a></li>
              <li><a href="" className="header-nav-link">MEMBERS</a></li>
              <li><button id="notifications" className="header-nav-link"></button></li>
              <li><button id="profile" className="header-nav-link"></button></li>
              <li><button id="new-poll" className="header-nav-link">NEW POLL</button></li>
            </ul>
          </nav>
        </div>
    )
  }
}

export default HeaderComp;