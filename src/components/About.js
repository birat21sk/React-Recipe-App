import React from 'react';
import {Link} from 'react-router-dom';

const About =()=> {
	return (
		<div class="jumbotron jumbotron-fluid">
		  <div class="container">
		    <h1 class="display-3">About us</h1>
		    <p class="lead">We help you find the recipe you want.</p>
		    <Link to="/"><button className="btn btn-success">Search</button></Link>
		  </div>
		</div>
	)
}

export default About;