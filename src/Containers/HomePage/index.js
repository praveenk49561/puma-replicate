import React from "react";
import Banner from "../../Components/Banner";
import NavBar from "../../Components/Navbar";
import NotificationBar from "../../Components/NotificationBar";
import Banners from "../../Constants/Banners";
import { generateBold } from "../../Utils/HeadingGenerator";

const HomePage = () => {
    const notificationContent = generateBold(`-b-EXTRA -b-5% -b-INSTANT -b-DISCOUNT FOR ALL ONLINE PAYMENTS. FREE DELIVERY. FREE RETURNS.`);
    
    return <React.Fragment>
        <div className="home-page-main-container">
            <NotificationBar content={notificationContent} />
            <NavBar />
            {Banners?.map((eB) => <Banner 
                key={eB?.id}
                heading={eB.heading}
                description={eB.description}
                subHeading={eB.subHeading}
                background={eB.background}
                buttons={eB.buttons}
                contrast={eB.contrast}
                align={eB.align}
                elementAlign={eB.elementAlign}
            />)}
        </div>
    </React.Fragment>;
};

export default HomePage;