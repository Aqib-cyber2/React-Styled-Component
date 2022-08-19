import Header from "./components/Header"
import AboutSection from "./components/About";
import { GlobalStyle } from './components/styles/GlobalStyle.styled';

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <>

      <GlobalStyle />
      <Header />
      <AboutSection />
    </>
  )
}

export default App