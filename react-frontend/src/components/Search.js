import React, {useState} from 'react';

import styled from 'styled-components';

import { ReactSearchAutocomplete } from 'react-search-autocomplete'



function Search(props) {   


                const handleOnSearch = (string, cached) => {
                    // onSearch returns the string searched and if
                    // the values are cached. If the values are cached
                    // "cached" contains the cached values, if not, returns false
                    console.log(string, cached)
                  }
                
                  const handleOnSelect = (item) => {
                    // the item selected
                    console.log(item)

                    props.found(item.name);

                  }
                
                  const handleOnFocus = () => {
                    console.log('Focused');
                  }
                

        return (
         <div>
            <ReactSearchAutocomplete
            items={props.items}
            onSearch={handleOnSearch}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
          />
        </div>
        )

    }

    


export default Search;