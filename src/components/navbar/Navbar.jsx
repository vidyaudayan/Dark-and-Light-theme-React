import React from 'react'
import './Navbar.css'
import logolight from '../../assets/logo-black.png'
import logodark from '../../assets/logo-white.png'
import searchiconlight from '../../assets/search-w.png'
import searchicondark from '../../assets/search-b.png'
import togglelight from '../../assets/night.png'
import togggledark from '../../assets/day.png'


const Navbar = ({mode,setMode}) => {
  const toggleMode= ()=>{
    mode== 'light'? setMode('dark'): setMode('light')
  
  }
  return (
    <div className='navbar'>
<img src={mode=='light'? logolight: logodark} alt="" className='logo' />
<ul>
    <li>Home</li>
    <li>Shop</li>
    <li>User</li>
    <li>Contact</li>
</ul>
<div className='searchBox'>
<input type="text" placeholder='Search' />

<img src={mode=='light' ? searchiconlight: searchicondark} alt="" />
</div>

<img onClick={toggleMode} src={mode=='light'? togglelight:togggledark} alt="" className='toggleIcon' />
    </div>
  )
}

export default Navbar