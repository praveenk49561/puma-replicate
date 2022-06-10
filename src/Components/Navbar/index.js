import React from 'react';
import NavLink from '../NavLink';
import NavBarLinks from '../../Constants/NavbarLinks';
import SearchBar from '../SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping, faSearch, faUserGear, faBars} from '@fortawesome/free-solid-svg-icons';
import logo from '../../Assets/images/PngItem_1506532.png';

const NavBar = (props) => {
    const NavMenu = () => <div className="nav-bar-menu-conatiner">
        {NavBarLinks?.map((eNL) => <NavLink key={eNL.title} url={eNL.url} title={eNL.title} />)}
    </div>;
    
    return <React.Fragment>
        <div className="nav-bar-main-container">
            <div className='nav-bar-main-right'>
                <img className="nav-bar-logo" src={logo} alt=""></img>
                <NavMenu />
            </div>
            <div className='nav-bar-main-left'>
                <SearchBar />
                <div className='nav-bar-quick-links-container'>
                    <FontAwesomeIcon className='nav-bar-quick-link only-mobile' icon={faSearch} />
                    <FontAwesomeIcon className='nav-bar-quick-link' icon={faHeart} />
                    <FontAwesomeIcon className='nav-bar-quick-link' icon={faCartShopping} />
                    <FontAwesomeIcon className='nav-bar-quick-link no-mobile' icon={faUserGear} />
                    <FontAwesomeIcon className='nav-bar-quick-link only-mobile' icon={faBars} />
                </div>
            </div>
        </div>
    </React.Fragment>
};

export default NavBar;