import Navigation from "../components/Navigation/Navigation";
import Products from "../components/Products/Products";
import Search from "../components/Search/Search";


function Home() {
  return(
    <>
      <Navigation />
      <Search />
      <Products />
    </>
  );
}

export default Home;