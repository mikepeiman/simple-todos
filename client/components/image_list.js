// create image list component
// import React
import React from 'react';
import ImageDetail from './image_detail';

// create a dummy list of images so we have boilerplate data


// import is not just used for NPM modules; 
//we can also import components from other files 

// create our component
// props = propeties; anything we pass from a parent to a child component
const ImageList = (props) => {
	const validImages = props.images.filter(image => !image.is_album);

	const RenderedImages = validImages.map(image =>
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