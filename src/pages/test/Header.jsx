import React from 'react'
import "./Header.css"
import Icon from "@mui/material/Icon";
const Header = () => {
     return (
          <>
               <div className="h_main">
                    <h1>Contacs</h1>
                    <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                  />
                    <button><a href="test1/#/add"><Icon>add</Icon></a></button>
               </div>
          </>
     )
}

export default Header
