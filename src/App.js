import './App.css';
import Footer from './Footer';
import Navbar from './Navbar';
import ContactUs from './Contact';
import AboutUs from './About';
import Chart from './chartall';
import ProductComparisonPage from './ProductComparison';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import Chart123 from './chartall';
import CardsPage from './CardsPage';
import FilterSidebar from './FilterSideBar';
import MyComponent from './integration1';

function App() {
  return (
    <BrowserRouter>
      <Navbar /> 
      {/* <MyComponent />  */}
      {/* <FilterSidebar /> */}
      <Routes>
        <Route path='/about' element={ <AboutUs /> }/>
        <Route path='/' element={ <Home /> }/>
        <Route path='/search' element={ <CardsPage /> }/>
        <Route path='/product' element={ <ProductComparisonPage /> }/>
        <Route path='/analysis' element={ <Chart123 /> }/> 
        <Route path='/contact' element={ <ContactUs /> }/>
      </Routes> 
      <Footer />
    </BrowserRouter>
  );
}

export default App;
