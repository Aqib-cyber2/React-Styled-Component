import { Container } from "./styles/Container.styled"
import {AboutSection} from "./styles/AboutSection.styled"
function About() {
  return (
    <AboutSection>

      <div className="img-box">  <img src="./images/image-about-dark.jpg" alt="img-about-dark" /> </div>

      <div className="content-section">  
          <Container>
              <h3>About our furniture</h3>
              <p>

                  Our multifunctional collection blends design and function to suit your individual taste.
                  Make each room unique, or pick a cohesive theme that best express your interests and what
                  inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                  or anything in between. Product specialists are available to help you create your dream space.

              </p>
          </Container>
      </div>
      <div className="img-box">  <img src="./images/image-about-light.jpg" alt="img-about-light" /> </div>
    </AboutSection>
  )
}

export default About;