// any js placed here will automatically run on site visit
// 
// When we ran "npm install --save react" we installed it as a package dependency. However, in order to use it,
// it must be called from every JS file that requires it.
// 
// Import the React library
import React from 'react';
import ReactDOM from 'react-dom';
// 'react' takes the string and looks through the node_modules folder for any sub-folder matching that string

// Create a component. A component's job is to produce some (any) amount of HTML.
const App = () => {
	return (
		<div>
			React App #2
		</div>
		);
};

// Render this component to the screen. To do this we need React DOM
ReactDOM.render(<App />, document.querySelector('.container'));

console.log("hello");