const SearchBox = ({ onSearchFieldChange }) => {
    return(
        <div className="mb3">
            <input 
              type="search"
              placeholder="search robots" 
              className="b--dark-blue bg-light-yellow pa2 input-reset ba  hover-bg-light-green hover-black"
              onChange={onSearchFieldChange} />
        </div>
    )
};

export default SearchBox;