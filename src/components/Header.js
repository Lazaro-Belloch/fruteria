import React from 'react'
import './Header.css'
import MenuEnlaces from './MenuEnlaces'



const Header = () => {
   return (
    <div>
      <MenuEnlaces></MenuEnlaces>
      <h1 className="ui center aligned icon header">
        <i className="circular lemon outline icon"></i>
        <h1 className="texto"> Fruteria Cáspitas </h1>
        <h3 className="texto2">Fruta fesca del campo valenciano</h3>
      </h1>
    <div className="ui divider"></div>

    </div>
   )
}

export default Header