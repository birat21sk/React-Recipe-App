import React from 'react'
import {Link} from 'react-router-dom';

const Navbar =() => {
	return (
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		  <div className="container">
		  <a class="navbar-brand" href="#">Recipe</a>
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
		    <span class="navbar-toggler-icon"></span>
		  </button>
		  <div class="collapse navbar-collapse ml-auto" id="navbarNav">
		    <ul class="navbar-nav ml-auto">
		      <Link to="/">
			      <li class="nav-link active">Home</li>
		      </Link>
		      <Link to="/about">
			      <li class="nav-link active">About</li>
		      </Link>
		       
		    </ul>
		  </div>
		  </div>
		</nav>
	);
}

export default Navbar;