import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import { StyledHeader, Nav, Logo} from "./styles/Header.styled"
import { Container } from "./styles/Container.styled"
import { Button } from "./styles/Button.styled"


function Header() {
  // defining states
  let [toggle, setToggle] = useState(false);
  let [li, setLinks] = useState( [
    {
      title: 'home'
    },
    {
      title: 'shop'
    },
    {
      title: 'about'
    },
    {
      title: 'contact'
    },
  ])
  let [dimension, setDimension] = useState(window.innerWidth)

  // definind useEffect for adding resize event and removing.
  useEffect(() => {
    function handleResize() { setToggle(false); setDimension(window.innerWidth) }

    window.addEventListener('resize', handleResize)

    return _ => { window.removeEventListener('resize', handleResize) }
  })

  function toggleNav(){ setToggle(!toggle) }

  return (
    // header
    <StyledHeader bgWidth={dimension}> 
    {/* img section */}
      <div className="img-section">
        {/* Navbar */}
        <Container>
          <Nav>
 
          <button className="toggle-btn" onClick={toggleNav}>   
            <img src="./images/icon-hamburger.svg" alt="humberger menu icon" />
          </button>

          <Logo src="./images/logo.svg" />

          <ul className="DesktopNavigation">
            { li.map( li =>  <li key={li.title}>  {  <Link to="#"> {li.title} </Link> }  </li> ) }
          </ul> 

          {/* fixed navigation bar in header on mobile devices */}
          <div className={`mobile-nav fixed hide ${toggle ? 'show': ''}`}>
            
            <Container>
              <button className="toggle-btn" onClick={toggleNav}>   
                <img src="./images/icon-close.svg" alt="closeIcon" />
              </button>

              <ul>
                { li.map( li =>  <li key={li.title}>  {  <Link to="#"> {li.title} </Link> }  </li> ) }
              </ul> 
            </Container>
          </div>

          </Nav>
        </Container>

        {/* slider buttons  */}
        <div className="button-box" bg="#ebfbff">
          <button type="button" className="btn"> <img src="./images/icon-angle-left.svg" alt="Left arrow Icon" /> </button>
          <button type="button" className="btn"> <img src="./images/icon-angle-right.svg" alt="right arrow Icon" /> </button>
        </div>
      </div>

      {/* content section */}
      <div className="content-section">
        <Container>
          <h1> Discover innovative <br /> ways to decorate </h1>

          <p>
            We provide unmatched quality, comfort, and style for property owners across the country. 
            Our experts combine form and function in bringing your vision to life. Create a room in your 
            own style with our collection and make your property a reflection of you and what you love.
          </p>

          <Button className="btn"> Shop now  <img src="./images/icon-arrow.svg" alt="button arrowIcon" /> </Button>
        </Container>
      </div>


    </StyledHeader> 
  )
}

export default Header