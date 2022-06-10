import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";


const SearchBar = () => {

    return <React.Fragment>
        <div className="search-bar-container">
            <div className="search-bar-field"><input placeholder="SEARCH PUMA.COM"></input></div>
            <div className="search-bar-icon"><FontAwesomeIcon icon={faSearch} /></div>
        </div>
    </React.Fragment>
};

export default SearchBar;