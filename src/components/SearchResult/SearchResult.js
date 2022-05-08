import React from 'react'
import './SearchResult.css'
import { useStateValue } from '../../StateProvider'
import { useGoogleSearch } from '../../useGoogleSearch'

function SearchResult() {
    const [{term}, dispatch ] = useStateValue()
    const {data} = useGoogleSearch(term)
    console.log(data)
  
  return (
    <div className='searchResult'>
       <div className="header">
           <h1>
                Search Results for {term}
           </h1>
           </div> 
           <div className="results">

           </div>
    </div>
  )
}

export default SearchResult