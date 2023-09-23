import Navbar from "./components/layout/Navbar";
import TopBanner from "./components/layout/TopBanner";
import Herosection from "./components/section/Herosection";
import { GlobalStyles } from "./components/styles/Global.styles";
import { ThemeProvider } from "styled-components";
import { Container } from "./components/styles/commen/Container.styles";
import AboutSection from "./components/section/AboutSection";
import ProjectSection from "./components/section/ProjectSection";
import ServiceSection from "./components/section/ServiceSection";
import ContactSection from "./components/section/ContactSection";
import Footer from "./components/layout/Footer";
 
 
const App = () =>{

  const theme={
    colors:{
        white:"rgba(240,247,255,1)",
        navyBlue:"rgba(2,12,27,1)",
        lightNavyBlue:"rgba(4,22,48,1)",
        green:"rgba(0,206,158,1)",
        orange:"rgba(249,105,14,1)",
        purple:"rgba(102,51,153,1)"
     },
    transition:"all 658ms ease-in-out",
  }

  return (
    <>
   
      
      <ThemeProvider theme={theme}>
      <GlobalStyles />
        
        <TopBanner />
        <Navbar />
        <Herosection /> 

        <Container>
          <AboutSection />
          <ProjectSection />
          <ServiceSection />
          <ContactSection />
        </Container>
        <Footer />
      </ThemeProvider>
      
    </>
  );
}

export default App;
