import { StyledHeader, Nav} from "./styles/Header.styled"
function Header() {

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
    <StyledHeader color=""> 
      <Nav className="mobile-nav">
        <button>   
          <img src="./images/icon-close.svg" alt="closeIcon" />
        </button>
        <ul>
          { li.map( li =>  <li key={li.title}> <a href="#"> {li.title} </a> </li> ) }
        </ul> 
      </Nav>

      {/* slider buttons  */}
    </StyledHeader> 
  )
}

export default Header