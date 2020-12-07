import React from 'react';
import Zero from './Zero';
import One from './One';
import Two from './Two';
import Three from './Three';
import Four from './Four';
import Five from './Five';
import Six from './Six';
import Seven from './Seven';
import Eight from './Eight';
import Nine from './Nine';
import TogglePlusMinus from './TogglePlusMinus';
import DecimalPoint from './DecimalPoint';

import '../../styles/Numbers.css';

export default function Numbers() {
	return (
		<div className="numberContainer">
			<Seven />
			<Eight />
			<Nine />
			<Four />
			<Five />
			<Six />
			<One />
			<Two />
			<Three />
			<TogglePlusMinus />
			<Zero />
			<DecimalPoint />
		</div>
	);
}
