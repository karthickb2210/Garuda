import React from "react";
import Card1 from "./card1";
import Card2 from "./card2";
import Card3 from "./card3";
import Card4 from "./card4";
import './css/nav.css'
function Navbar(){
  return (
    <>
<div className="bg-img">
<nav class="nav">
        <div class="container">
            <div class="logo">
                <a href="#" className="name">Sharp Garuda Farm Equipment</a>
            </div>
            <div id="mainListDiv" class="main_list">
                <ul class="navlinks">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <span class="navTrigger">
                <i></i>
                <i></i>
                <i></i>
            </span>
        </div>
    </nav>
    <table>
  <tr>
  <td><Card1 /></td>
  <td><Card2 /></td>
  </tr>
  <tr>
   <td><Card3 /></td> 
    <td><Card4 /></td>
  </tr>
  
</table>
    
</div>


</>
  );
}
export default Navbar;