import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


export default function SearchBar() {
    return (

        <div className='searchbar-container' style={{ margin: '5px' }}>
            <div class="input-group">
                <button type="button" class="btn btn-outline-secondary" style={{ height: '38px', width: '50px' }}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
                <div class="form-outline">
                    <input type="search" id="form1" class="form-control" placeholder='Search here' />
                    {/* <label class="form-label" for="form1">Search</label> */}
                </div>

            </div>
        </div>


    )
}
