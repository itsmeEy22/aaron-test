import './navigation.css'

function Navigation() {
  return(
    <div className='navigation-container'>
      <h2 className='nav-brand'>The Store</h2>
      <ul className='nav-list'>
        <li><a>Home</a></li>
        <li><a>Categories</a></li>
        <li><a>Products</a></li>
      </ul>
    </div>
  );
}

export default Navigation;