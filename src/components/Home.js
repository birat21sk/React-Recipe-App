import React,{useState, useEffect} from 'react';
import Result from './Result'

const Home =()=> {

	const APP_ID = "b2fd53b7";
	const APP_KEY = "9ba70ec3dc531ab03097b960be69da66";

	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState("");
	const [query, setQuery] = useState("chicken");

	useEffect(() => {
		getRecipe();
	}, [query])

	const getRecipe = async () =>{
		// const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=552`);
		const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
		const data = await response.json();
		setRecipes(data.hits);
		console.log(data);
	};

	const updateSearch = e =>{
		setSearch(e.target.value);
	}

	const getSearch = e =>{
		e.preventDefault();
		setQuery(search);
		setSearch("");
	}
	const searchtext = query.charAt(0).toUpperCase() + query.slice(1)

	return (
		<div className="container mt-4">
			<div className="search">
				<h2>Search Recipe</h2>
				<form class="form-inline m-auto" onSubmit={getSearch} >
					<input class="form-control mr-sm-2" type="text" placeholder="Search" value={search} onChange={updateSearch}/>
					<button class="btn btn-outline-success btn-rounded btn-sm my-0" type="submit">Search</button>
				</form>
			</div>
			<hr/>
			<h2 className="text-center display-4">{searchtext}</h2>
			<div className="flex">
				{recipes.map(recipe => (
					<Result
						key={recipe.recipe.label}
						title={recipe.recipe.label}
						image={recipe.recipe.image}
						obj={recipe.recipe}
					 />
				))}

			</div>
		</div>
	)
}

export default Home;