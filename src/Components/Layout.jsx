import React from 'react'
import Navbar from './Navbar.jsx'
import Aside from './Aside.jsx'

const Layout = ({children}) => {
  return (
<>
<div className="layout-container">
	<Navbar/>
	<Aside/>
	{children}
</div>
</>
)
}

export default Layout