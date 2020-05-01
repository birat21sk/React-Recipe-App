import React from 'react';
import {Link} from 'react-router-dom';

const Footer=()=> {
	const today = new Date(); 
	return (
		<div className="footer mt-auto">
			<div className="container text-center">
				<span>&copy;{today.getFullYear()} : <Link to="https://birat21sk.github.io">Birat Siku</Link></span>
			</div>
		</div>
	)
}

export default Footer