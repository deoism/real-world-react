import React from 'react';
/*
const Banner = props => {
		const appName = props.appName;
		
}
same as const Banner line below
also obscure props

*/
const Banner =({appName}) =>{
		return(
			<div className="banner">
			<div className="container">
				<h1 className="logo-font">
				{appName.toLowerCase()}</h1>
				<p>Deoisms</p>			
			  
			</div>
			
		</div>
	);
};

export default Banner;