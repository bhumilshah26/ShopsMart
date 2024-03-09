
import { useRef } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import { FaBars, FaTimes } from "react-icons/fa";
import "./main.css";
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

	return (
		<header className="bg-gray-900 text-white pt-4 pb-4">
			{/* <img className="img" src={ logo } alt="Logo" width={100} /> */}
			<nav ref={navRef}>
            <input type="text" placeholder="Search" className="search-bar"/>
				<button href="/#">Home</button>
				<button href="/#">About</button>
				<button href="/#">Analysis</button>
                <button href="/#">Product Comparison</button>
                { isAuthenticated ? (
                <button onClick={(e) => logout()}>Logout</button>) : (<button onClick={(e) => loginWithRedirect()}>Login</button>)
                }
                <button href="/#">Contact Us</button>
                <button href="/#"><DarkMode /></button>

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