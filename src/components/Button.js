import React from 'react';
import '../styles/Button.css';

export default function Button({ content }) {
	return (
		<div
			className={`button ${
				content === 'CE' ||
				content === 'C' ||
				content === '%' ||
				content === '1/x'
					? 'larger'
					: ''
			}`}
		>
			{content}
		</div>
	);
}
