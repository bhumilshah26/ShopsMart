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
// import FilterSidebar from './FilterSideBar';

function App() {
  return (
    <BrowserRouter>
      <Navbar /> 
      {/* <FilterSidebar /> */}
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/about' element={ <AboutUs /> }/>
        <Route path='/product' element={ <ProductComparisonPage /> }/>
        <Route path='/analysis' element={ <Chart123 /> }/> 
        <Route path='/contact' element={ <ContactUs /> }/>
      </Routes> 
      <Footer />
    </BrowserRouter>
  );
}

export default App;
