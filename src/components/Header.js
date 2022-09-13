import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

// -----------------  React Styled Components
import { StyledHeader, Nav, Logo} from "./styles/Header.styled"
import { Container } from "./styles/Container.styled"
import { Button } from "./styles/Button.styled"


function Header() {
  // menu links...
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

  // main slider data 
  let sliderData = [
    {
      img: {
        desktop: 'desktop-image-hero-1.jpg',
        mobile: 'mobile-image-hero-1.jpg'
      },

      title: 'Discover innovative ways to decorate',

      description: `We provide unmatched quality, comfort, and style for property owners across the country. 
      Our experts combine form and function in bringing your vision to life. Create a room in your 
      own style with our collection and make your property a reflection of you and what you love.`,
    },
    {
      img: {
        desktop: 'desktop-image-hero-2.jpg',
        mobile: 'mobile-image-hero-2.jpg'
      },

      title: 'We are available all across the globe',

      description: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
      Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
      store locator. Any questions? Don't hesitate to contact us today.`,
    },
    {
      img: {
        desktop: 'desktop-image-hero-3.jpg',
        mobile: 'mobile-image-hero-3.jpg'
      },

      title: 'Manufactured with the best materials',

      description: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
      to ensure that every product is made as perfect and as consistent as possible. With three decades of 
      experience in this industry, we understand what customers want for their home and office.`,
    },
  ]


  // defining states
  let [toggle, setToggle] = useState(false);
  let [dimension, setDimension] = useState(window.innerWidth);
  let [index, setIndex] = useState(0);


  // Functions
  function toggleNav(){ setToggle(!toggle) }

  function renderData(arg){  
    if(arg === "next"){
      setIndex(++index)
      if(index > sliderData.length - 1)  {
        setIndex(0);
      }
    }
    else{
      setIndex(--index);
      if(index < 0){
        setIndex(sliderData.length - 1)
      }
    }
  }
  // resize event function in useEffect to call
  function handleResize() { 
    setToggle(false); setDimension(window.innerWidth) 
    console.log("here code executed");
  }


  //  USE EFFECTS
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return _ => { window.removeEventListener('resize', handleResize) }
  }, [dimension])


  
  return (
    // header
    <StyledHeader bgImg={dimension > 599 ? sliderData[index].img.desktop : sliderData[index].img.mobile}> 
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

          <button type="button" className="btn" onClick={ ()=> renderData('prev') } > 
            <img src="./images/icon-angle-left.svg" alt="Left arrow Icon" /> 
          </button>

          <button type="button" className="btn" onClick={ ()=> renderData('next') } > 
            <img src="./images/icon-angle-right.svg" alt="right arrow Icon" /> 
          </button>

        </div>
      </div>

      {/* content section */}
      <div className="content-section">
        {/* <Container> */}
          <h1 className="title"> {sliderData[index].title} </h1>

          <p>
            {sliderData[index].description}
          </p>

          <Button className="btn"> Shop now  <img src="./images/icon-arrow.svg" alt="button arrowIcon" /> </Button>
        {/* </Container> */}
      </div>


    </StyledHeader> 
  )
}

export default Header