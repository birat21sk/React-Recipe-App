import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';

const Result = ({title,image,obj}) => {
 

	useEffect(() => {
		console.log(obj)
	}, [])

	const logg =()=> Swal.fire({
			  title: title,
			  type: 'info',
			  imageUrl: image, 
			  imageAlt: title,
			  showCloseButton: true,
			  html:` 
		       		<ul class="list-group list-group-flush align-self-start">
			    		<li class="list-group-item">
			    			<h3>Ingredients</h3> 
							${obj.ingredientLines} 
			    		</li>
			    		<li class="list-group-item"><strong>Calories</strong> : ${obj.calories}</li>
			    		<li class="list-group-item"><strong>Total time</strong> : ${obj.totalTime}</li>
			    		<li class="list-group-item"><strong>Total weight</strong> : ${obj.totalWeight}</li>
			  		</ul>
			  `
			});



	return (
		<div class="card col-md-3 result-search m-3">
		  <img class="card-img-top" src={image} alt={title}/>
		  <div class="card-body">
		    <h4 class="card-title text-center">{title}</h4>
		    
			<button className="btn btn-info form-control" onClick={logg}>View</button>
		  </div>
		</div>

	);
}

export default Result;