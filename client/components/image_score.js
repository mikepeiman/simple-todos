import React from 'react';

const ImageScore = (props) => {
// props.ups is upvotes
// props.downs is downvotes

	const { ups, downs } = props;
	// same as coding
	// const ups = props.ups;
	// const downs = props.downs;

	const upsPercent = `${100 * (ups / (ups + downs))}%`;
	const downsPercent = `${100 * (downs / (ups + downs))}%`;
	return (
		<div>
			Ups/downs
				<div className="progress">
					<div style={{ width: upsPercent }} className="progress-bar progress-bar-success progress-bar-striped" />
					<div style={{ width: downsPercent }} className="progress-bar progress-bar-danger progress-bar-striped" />
				</div>
		</div>

		);


};

export default ImageScore;