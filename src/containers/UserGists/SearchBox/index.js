import React, {useState} from "react";
import PropTypes from 'prop-types';
import './SearchBox.css';

const ENTER_CHAR_CODE = 13;

const SearchBox = (props) => {

    const [searchString, setSearchString] = useState('')
    
    const onKeyPress = (e) => {
        //On clicking enter
        if (e.charCode === ENTER_CHAR_CODE) {
            props.onSearch(searchString)
        }
    }
    
    return (
        <div className="search-box">
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Search Github username"
                       aria-label="GitHub username" value={searchString}
                       onChange={(e) =>setSearchString(e.target.value)}
                        onKeyPress={onKeyPress}/>
                    <button className="btn btn-outline-secondary" type="button" onClick={() =>props.onSearch(searchString)}>
                        Search
                    </button>
            </div>
        </div>
    )
}

SearchBox.propTypes = {
    onSearch: PropTypes.func.isRequired
};

export default SearchBox;