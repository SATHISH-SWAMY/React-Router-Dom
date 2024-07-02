import React from 'react'

import {Link,NavLink} from 'react-router-dom'

function Footer() {
  return (
    <footer className='footer'>
        <div className="container">
            <nav className='d-flex justify-content-center'>
            <NavLink to='/'
             className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}>All</NavLink>
            <NavLink to='/fullStackDevelopment'
             className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}>Full Stack Development</NavLink>
            <NavLink to='/dataScience'
             className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}>Data Science</NavLink>
            <NavLink to='/cyberSecurity' 
            className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}>Cyber Security</NavLink>
            <NavLink to='/career' className={(navData) => navData.isActive ? 'nav-link active' : 'nav-link'}>Career</NavLink>
            </nav>
            <div className="copyrights">
          &copy; 2022 <Link to="/"> WebStylePress</Link> - All Rights Reserved.
        </div>
            
          </div>
    </footer>
  )
}

export default Footer