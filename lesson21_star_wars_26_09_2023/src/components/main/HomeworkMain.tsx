import React, { useContext } from "react";
import Hero from "./pageHome/Hero";
import DreamTeam from "./pageHome/DreamTeam";
import FarGalaxy from "./pageHome/FarGalaxy";
import { navItems } from "../../utils";
import AboutMe from "./pageAboutMe/AboutMe";
import StarWars from "./pageStarWars/StarWars";
import Contact from "./pageContact/Contact";
import Home from "./pageHome/Home";
import { CurrentPageContext } from "../../App";

const HomeworkMain: React.FC<{ currentPage: string }> = ({currentPage}): JSX.Element => {

    const myStr = useContext(CurrentPageContext);
    console.log(myStr);
    

    switch (currentPage) {
        case navItems[1]:
            return <AboutMe/>;
        case navItems[2]:
            return <StarWars/>;
        case navItems[3]:
            return <Contact/>;
        default:
            return <Home/>;
    }

    // return (
    //     <main>
    //         {currentPage === 'Home' ? (
    //             <>
    //                 <Hero />
    //                 <DreamTeam />
    //                 <FarGalaxy />
    //             </>
    //         ) : currentPage === 'About me' ? (
    //             <h1>My name is Nabil</h1>
    //         ) : currentPage === 'Star wars' ? (
    //             <h1>Cohort 28</h1>
    //         ) : currentPage === 'Contact' ? (
    //             <h1>+340202317022</h1>
    //         ) : null}
    //     </main>
    // );
};

export default HomeworkMain;
