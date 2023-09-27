import React from "react";
import Hero from "./Hero";
import DreamTeam from "./DreamTeam";
import FarGalaxy from "./FarGalaxy";

const HomeworkMain: React.FC<{ currentPage: string }> = ({currentPage}): JSX.Element => {
    return (
        <main>
            {currentPage === 'Home' ? (
                <>
                    <Hero />
                    <DreamTeam />
                    <FarGalaxy />
                </>
            ) : currentPage === 'About me' ? (
                <h1>My name is Nabil</h1>
            ) : currentPage === 'Star wars' ? (
                <h1>Cohort 28</h1>
            ) : currentPage === 'Contact' ? (
                <h1>+340202317022</h1>
            ) : null}
        </main>
    );
};

export default HomeworkMain;
