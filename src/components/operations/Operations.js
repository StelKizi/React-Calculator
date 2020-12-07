import React from 'react';
import ClearEntry from './ClearEntry';
import Clear from './Clear';
import Backspace from './Backspace';
import Percentage from './Percentage';
import Reciprocal from './Reciprocal';
import Division from './Division';
import Multiplication from './Multiplication';
import Subtraction from './Subtraction';
import Addition from './Addition';
import Equals from './Equals';

import '../../styles/Operations.css';

export default function Operations() {
	return (
		<div className="operationContainer">
			<ClearEntry className="clearEntry" />
			<Clear className="clear" />
			<Backspace className="backspace" />
			<Percentage className="percentage" />
			<Reciprocal className="reciprocal" />
			<Division className="division" />
			<Multiplication className="multiplication" />
			<Subtraction className="subtraction" />
			<Addition className="addition" />
			<Equals className="equals" />
		</div>
	);
}
