// any js placed here will automatically run on site visit
// 
// When we ran "npm install --save react" we installed it as a package dependency. However, in order to use it,
// it must be called from every JS file that requires it.
// 
// Import the React library
import React, {Component} from 'react';
// 'react' takes the string and looks through the node_modules folder for any sub-folder matching that string
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageList from './components/image_list';


// Create a component. A component's job is to produce some (any) amount of HTML.
class App extends Component {
	componentWillMount() {
		console.log('App is about to render');
	}
	render() {
		return (
		<div>
			<ImageList />
		</div> 
		);
	};
};

// Render this component to the screen. To do this we need React DOM /
Meteor.startup(() => {
	ReactDOM.render(<App />, document.querySelector('.container'));
	axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
	.then(response => console.log(response));
});

// In any React application we make, we're only ever going to use
// ReactDOM.render for our root component. 
// Every other component we want to show we use component nesting.

console.log("hello");