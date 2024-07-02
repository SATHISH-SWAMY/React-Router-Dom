import React from 'react';
import { Link , NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <header>
      <div className='container'>
        <div className='d-flex justify-content-between align-items-center'>
          <div className="logo">
            <Link to='/' className='brand'>Guvi</Link>
          </div>
          <nav className='nav nav-pills'>
            <NavLink to='/'
             className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}>All</NavLink>
            <NavLink to='/fullStackDevelopment'
            className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}>Full Stack Development</NavLink>
            <NavLink to='/dataScience' 
             className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}>Data Science</NavLink>
            <NavLink to='/cyberSecurity' 
             className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}>Cyber Security</NavLink>
            <NavLink to='/career' 
             className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}>Career</NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
