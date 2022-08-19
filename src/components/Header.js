// import { useState } from "react"
import { StyledHeader, Nav, Logo} from "./styles/Header.styled"
import { Container } from "./styles/Container.styled"
import { Button } from "./styles/Button.styled"


function Header() {

  // let [toggle, setToggle] = useState(false)

  let li = [
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
  ]

  return (
    // header
    <StyledHeader color=""> 
    {/* img section */}
      <div className="img-section">
        {/* Navbar */}
        <Nav>

          <button className="toggle-btn">   
            <img src="./images/icon-hamburger.svg" alt="humberger menu icon" />
          </button>

          <Logo src="./images/logo.svg" />

          {/* fixed navigation bar in header on mobile devices */}
          <div className="mobile-nav fixed hide">
            <button className="toggle-btn">   
              <img src="./images/icon-close.svg" alt="closeIcon" />
            </button>

            <ul>
              { li.map( li =>  <li key={li.title}> <a href="#"> {li.title} </a> </li> ) }
            </ul> 

          </div>

        </Nav>

        {/* slider buttons  */}
        <div className="button-box" bg="#ebfbff">
          <button type="button" className="btn"> <img src="./images/icon-angle-left.svg" alt="Left arrow Icon" /> </button>
          <button type="button" className="btn"> <img src="./images/icon-angle-right.svg" alt="right arrow Icon" /> </button>
        </div>
      </div>

      {/* content section */}
      <Container className="content-section">
        <h1> Discover innovative <br /> ways to decorate </h1>

        <p>
          We provide unmatched quality, comfort, and style for property owners across the country. 
          Our experts combine form and function in bringing your vision to life. Create a room in your 
          own style with our collection and make your property a reflection of you and what you love.
        </p>

        <Button className="btn"> Shop now  <img src="./images/icon-arrow.svg" alt="button arrowIcon" /> </Button>
      </Container>


    </StyledHeader> 
  )
}

export default Header