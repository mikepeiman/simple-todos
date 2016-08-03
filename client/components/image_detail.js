import React from 'react';

const ImageDetail = (props) => {
	// props.image => this si the image object
	// props.image.title
	// props.image.link
	return (
		<div>{props.image.title}</div>
	
	);
};

export default ImageDetail;