import './search.css'

function Search() {
  return(
    <div className="container">
      <div className='search-container'>
        <select className="dropdown-category" name="products" id="products">
            <option value="Sample1">All Categories</option>
            <option value="Sample1">Sample1</option>
            <option value="Sample2">Sample2</option>
            <option value="Sample3">Sample3</option>
            <option value="Sample4">Sample4</option>
          </select>

          <input className="search" type="text" placeholder="Search products..."></input>

          <button className='btn-search'>
            Search
          </button>
      </div>
    </div>
  );
}

export default Search;