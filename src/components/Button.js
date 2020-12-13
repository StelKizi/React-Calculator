import React from 'react';
import '../styles/Button.css';

export default function Button({ content, type, handleClick }) {
	return (
		<div
			className={`button ${content === '=' ? 'equals' : ''}${type || ''}`}
			onClick={() => handleClick(content)}
		>
			{content}
		</div>
	);
}
