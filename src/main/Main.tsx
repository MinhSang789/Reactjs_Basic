import Page from "../components/ComponentPage/Page";
import HeroWrap from "./Components/HeroWrap";
import About from "./Components/About";
import Partner from "./Components/Partner";
import Resume from "./Components/Resume";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Footer from "../components/ComponentPage/Footer/Footer";
import Header from "../components/ComponentPage/Header/Header";
import React from "react";
import Counter_section from "./Components/Counter_section";
import Blog from "./Components/Blog";
import Ftco from "./Components/Ftco";
import Contact from "./Components/Contact";

const Main=()=>{
    return(
        <Page>
            <Header/>
                <HeroWrap/>
                <About/>
                <Partner/>
                <Resume/>
                <Services/>
                <Projects/>
                <Counter_section/>
                <Blog/>
                <Ftco/>
                <Contact/>
            <Footer/>
        </Page>
    )
}
export default Main