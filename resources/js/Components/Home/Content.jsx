import React from "react";

import Section from "./Components/Section";
import NewFood from "./Components/NewFood";
import Banner from "./Components/Banner";
import Trend from "./Components/Trend";
import Discount from "./Components/Discount";
import Services from "./Components/Services";

function HomeContent() {
    return (
        <>
            <Section />
            <NewFood />
            <Banner />
            <Trend />
            <Discount />
            <Services />
        </>
    );
}

export default HomeContent;
