import React, { createContext, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import HomeworkMain from "./components/main/HomeworkMain";
import HomeworkFooter from "./components/footer/HomeworkFooter";
import { navItems } from "./utils";

export const PageContext = createContext((currentPage: string) => {});
export const CurrentPageContext = createContext("");

function App() {
    const [currentPage, setCurrentPage] = useState<string>(navItems[0]);

    // console.log(currentPage);

    const changePage = (currentPage: string) => {
        setCurrentPage(currentPage);
    };

    return (
        <>
            <PageContext.Provider value={changePage}>
                <CurrentPageContext.Provider value={currentPage}>
                    <Header changePage={changePage} />
                    <HomeworkMain currentPage={currentPage} />
                    <HomeworkFooter />
                </CurrentPageContext.Provider>
            </PageContext.Provider>
        </>
    );
}

export default App;
