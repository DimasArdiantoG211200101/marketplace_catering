import React, { useState } from "react";

import Header from "../Components/Layouts/Header";
import Footer from "../Components/Layouts/Footer";

const MainLayouts = ({ children }) => {
    const [menuType, setMenuType] = useState("merchant"); // "merchant" or "office"
    return (
        <>
            <Header menuType={menuType} />
            {children}
            <Footer />
        </>
    );
};

export default MainLayouts;
