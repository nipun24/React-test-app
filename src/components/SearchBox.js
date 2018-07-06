import React from 'react';

const SearchBox = ({searchField, searchChange}) => {
    return(
        <div className='pa3'>
            <input 
                className='pa3 bg-lightest-blue'  
                type="search" 
                placeholder="search for robots"
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;