import React from "react";
import { generateHeading } from "../../Utils/HeadingGenerator";
import Button from "../Button";
import { alignBasedFlex, alignBasedPositions } from "../../Utils/AlignBasedStyles";

const Banner = (props) => {
    const { heading, description, subHeading, buttons, background, contrast, align } = props;

    const headingRenderer = generateHeading(heading)?.map((eH) => <div key={eH} className={`${alignBasedFlex(align?.element)} mobile-force`}><div className={contrast?.header ? `banner-heading heading-contrast` : `banner-heading`}>{eH}</div></div>);
    const descriptionRenderer = generateHeading(description)?.map((ed) => <div key={ed} className={`${alignBasedFlex(align?.element)} mobile-force`}><div className={contrast?.header ? `banner-description heading-contrast` : `banner-description`}>{ed}</div></div>);
    const subHeadingRenderer = generateHeading(subHeading)?.map((eSh) => <div key={eSh} className={`${alignBasedFlex(align?.element)} mobile-force`}><div className={contrast?.header ? `banner-sub-heading heading-contrast` : `banner-sub-heading`}>{eSh}</div></div>);
    const buttonRenderer = buttons?.map((eB) => <Button key={eB} className={contrast?.button ? "banner-btns btn-contrast": "banner-btns"}>{eB}</Button>);

    return <React.Fragment>
        <div className="banner-main-container">
        {background?.type === 'image' && <img className="banner-background" alt="" src={background?.alt ?? background?.src}></img>}
        {background?.type === 'video' && <video className="banner-background" loop autoPlay muted>
            <source src={background?.src} type="video/mp4" />
        </video>}
            <div className={`banner-sub-container ${alignBasedPositions(align?.container)}`}>
                {headingRenderer?.length > 0 && <div className="banner-heading-container">
                    {headingRenderer}
                </div>}
                {descriptionRenderer?.length > 0 && <div className="banner-description-container">
                    {descriptionRenderer}
                </div>}
                {subHeadingRenderer?.length > 0 && <div className="banner-sub-heading-container">
                    {subHeadingRenderer}
                </div>}
                {buttonRenderer?.length > 0 && <div className={`banner-buttons-container ${alignBasedFlex(align?.element)} mobile-force`}>
                    {buttonRenderer}
                </div>}
            </div>
        </div>
    </React.Fragment>;
};

export default Banner;