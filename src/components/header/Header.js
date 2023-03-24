import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='flex1'>
        <img className='pokeimg' height={'150px'} src='https://www.pngall.com/wp-content/uploads/13/Pokemon-Logo-PNG-Pic.png'></img>
        <div className='flex2'>
        <img  height={'50px'} src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/132px-Instagram_logo_2016.svg.png?20210403190622' className='social'></img>
        <img  height={'50px'} src='https://www.citypng.com/public/uploads/preview/-11595349592mdhzsfgakx.png' className='social'></img>
        <img  height={'50px'} src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/512px-Twitter-logo.svg.png' className='social'></img>

        </div>



    </div>
  )
}

export default Header






