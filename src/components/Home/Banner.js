<<<<<<< HEAD
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
=======
import React from "react";
/*
const Banner = props => {
const appName = props.appName;
...
*/

const Banner = ({ appName }) => {
  return (
    <div className="banner">
      <div className="container">
        <h1 className="logo-font">{appName.toLowerCase()}</h1>
        <p>A place to meow your knowledge</p>
      </div>
    </div>
  );
};

export default Banner;
>>>>>>> 8fdcd6776794960c824b18c71e0c9052b30e4999
