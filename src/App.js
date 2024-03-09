import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from './Footer';
import Navbar from './Navbar';
import Card from './Card';
import Carousel from './Carousel';
import ContactUs from './Contact';
import { LampContainer, LampDemo } from './lamp';
import AboutUs from './About';
import Chart from './chartall';
import BarChart from './chartbar';
import LineChart from './chartline';
import PieChart from './chartpie';
import StackedLineChart from './chartlinestacked';
import MixedChart from './chartmixed';
import GroupedBarChart from './chartbargrouped';
import ThemeToggle from './ThemeToggle';
import ToggleButton from './ToggleButton';
// import './themes.css';
import ProductComparisonPage from './ProductComparison';
import SwiperAutoplay from './swiperautoplay';

function App() {

  // const [isDarkTheme, setIsDarkTheme] = useState(false);

  // useEffect(() => {
  //   // Apply the selected theme to the body element
  //   document.body.classList.toggle('dark-theme', isDarkTheme);
  // }, [isDarkTheme]);

  // const handleThemeToggle = (isChecked) => {
  //   setIsDarkTheme(isChecked);
  // };

  return (
    <div>
      <Navbar />  
      {/* <div className={`app-container ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <ThemeToggle onToggle={handleThemeToggle} /> */}
      <AboutUs />
      <ProductComparisonPage />
      <Chart />
      {/* <BarChart />
      <StackedLineChart />
      <MixedChart />
      <GroupedBarChart /> */}
      {/* <LineChart />
      <PieChart /> */}
      {/* <LampDemo />
      <LampContainer /> */}
      {/* <Carousel /> */}
      <SwiperAutoplay />
      <Card />
      <ContactUs />
      <Footer />
    </div>
    // </div>
  );
}

export default App;
