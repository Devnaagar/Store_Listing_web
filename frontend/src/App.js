// Filename - App.js

import React from "react";
import Navbar from "./welcome/Navbar";

import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./Home";
import Aboutus from './Aboutus';
import Contactus from "./Contactus";

// import Blogs from "./pages/blogs";
// import SignUp from "./pages/signup";
// import Contact from "./pages/contact";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/about" element={<Aboutus />} />
				<Route
					path="/contact"
					element={<Contactus />}
				/>
				{/* <Route path="/blogs" element={<Blogs />} />
				<Route
					path="/sign-up"
					element={<SignUp />}
				/> */}
			</Routes>
		</Router>
	);
}

export default App;
