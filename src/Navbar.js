
import { useState, useEffect, useRef } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import { FaBars, FaTimes } from "react-icons/fa";
import "./main.css";
import ThemeToggle from './ThemeToggle';
import ToggleButton from './ToggleButton';
import DarkMode from "./DarkMode/DarkMode";
// import logo from "src/assets/food.jpg"

function Navbar() {
	const navRef = useRef();

	const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
	console.log("Hello ", user);

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	const [theme, setTheme] = useState('light-theme');

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'light-theme' ? 'dark-theme' : 'light-theme'));
	};

	useEffect(() => {
		document.body.className = theme;
	}, [theme]);

	document.body.className = theme;
	const [searchQuery, setSearchQuery] = useState('');
  	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		document.body.className = theme;
	
		const fetchDataFromAPI = async () => {
			try {
			  // Replace 'your-api-endpoint' with your actual API endpoint
			  const response = await fetch(`https://api.example.com/search?q=${searchQuery}`);
			  const data = await response.json();
			  setSearchResults(data); // Assuming the API response is an array of objects
			} catch (error) {
			  console.error('Error fetching data from API:', error);
			}
		  };
	
		fetchDataFromAPI();
	}, [theme, searchQuery]);
	  
	const handleSearch = (e) => {
		setSearchQuery(e.target.value);
	};

	const [isDropdownVisible, setDropdownVisible] = useState(false);

	const handleKeyPress = async (e) => {
		if (e.key === 'Enter') {
		  try {
			// Replace 'your-api-endpoint' with your actual API endpoint
			const response = await fetch(`https://api.example.com/search?q=${searchQuery}`);
			const data = await response.json();
			setSearchResults(data); // Assuming the API response is an array of objects
			setDropdownVisible(true);
		  } catch (error) {
			console.error('Error fetching data from API:', error);
			// Handle error, maybe display an error message to the user
		  }
		}
	  };

	return (
		<header className="bg-gray-900 text-white pt-4 pb-4">
			{/* <img className="img" src={ logo } alt="Logo" width={100} /> */}
			<nav ref={navRef}>
            {/* <input type="text" placeholder="Search" className="search-bar"/> */}
			<input
        type="text"
        placeholder="Search"
        className="search-bar"
        value={searchQuery}
        onChange={handleSearch}
        onKeyPress={handleKeyPress}
      />
      {/* Display search results dropdown */}
      {isDropdownVisible && (
        <div className="search-dropdown">
          {searchResults.map((result, index) => (
            <button key={index} href="/#">
              {result.title}
            </button>
          ))}
        </div>
      )}
				<button href="/#">Home</button>
				<button href="/#">About</button>
				<button href="/#">Analysis</button>
                <button href="/#">Product Comparison</button>
                { isAuthenticated ? (
                <button onClick={(e) => logout()}>Logout</button>) : (<button onClick={(e) => loginWithRedirect()}>Login</button>)
                }
                <button href="/#">Contact Us</button>
				{theme === 'light-theme' ? ( <span role="img" aria-label="light-mode"> ☀️</span>) : (<span role="img" aria-label="dark-mode"> 🌙</span>)}
				<ToggleButton theme={theme} onToggle={toggleTheme} />
                {/* <button href="/#"><DarkMode /></button> */}

				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;  