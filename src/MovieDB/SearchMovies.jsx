import React from 'react';
const SearchMovies = (props) => {
    return (
        <div className='col col-md-6'>
        <form  className="ml-auto form-inline">
     <input style={{width:200,color:'whitesmoke',marginRight:'50px'}} placeholder='Type something for search' 
     value={props.value}
     className='search' onChange={()=>props.setSearchMovies(event.target.value)}/>
    
   </form>
   </div>
    );
}

export default SearchMovies;
