import React from 'react'
import Searchbar from './Searchbar'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between'>
      <div>Youtube</div>
      <div><Searchbar/></div>
      <div>person</div>
    </div>
  )
}

export default Navbar
