import React from "react"
const NavLink = (props) => {
    const { url, title, className } = props;
    return <React.Fragment>
        <a href={url} className={`nav-link-btn-container ${className}`}>
            <span className="nav-link-btn-content">
                {title}
            </span>
        </a>
    </React.Fragment>
};

export default NavLink;