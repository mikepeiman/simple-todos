// create image list component
// import React
import React from 'react';
import ImageDetail from './image_detail';

// create a dummy list of images so we have boilerplate data
const IMAGES = [
	{ title: 'Pen', link: 'http://dummyimage.com/300x200/000/fff' },
	{ title: 'Pine Tree', link: 'http://dummyimage.com/300x200/000/fff' },
	{ title: 'Mug', link: 'http://dummyimage.com/300x200/000/fff' }
];

// import is not just used for NPM modules; 
//we can also import components from other files 

// create our component
// props = propeties; anything we pass from a parent to a child
const ImageList = () => {
	const RenderedImages = IMAGES.map(image =>
		 <ImageDetail key={image.title} image={image} />
	);
	return (
		<ul className="media-list list-group">
			{RenderedImages}
		</ul>
	);
};

// export our component
export default ImageList;