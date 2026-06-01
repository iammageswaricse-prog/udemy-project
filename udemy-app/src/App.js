import Navbar from './component/Navbar';
import Categories from './component/categories';
import SaleImage from './component/SaleImage';
import Recommended from './component/Recommended';
import Topics from './component/Topics';
import Popular from './component/Popular';
import Footer from './component/footer';
import Offer from './component/Offer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Categories />
      <Offer />
      <SaleImage />
      <Recommended />
      <Topics />
      <Popular />
      <Footer />
    </div>
  );
}
export default App;

