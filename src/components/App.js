import React, { useState } from 'react';
/* import {evaluate} from 'mathjs'; */
import ButtonContainer from './ButtonContainer';
import '../styles/App.css';
import handleAddComma from '../utils';

function App() {
	const [input, setInput] = useState('0');
	const [previousValue, setPreviousValue] = useState(null);
	const [operator, setOperator] = useState(null);

	const handleOperation = () => {
		if (operator === '+') {
			setPreviousValue(previousValue + parseFloat(input));
		} else if (operator === '−') {
			setPreviousValue(previousValue - parseFloat(input));
		} else if (operator === '×') {
			setPreviousValue(previousValue * parseFloat(input));
		} else if (operator === '÷') {
			setPreviousValue(previousValue / parseFloat(input));
		} else {
			setPreviousValue(parseFloat(input));
		}
	};

	/* const handle */

	const handleClick = (content) => {
		const number = parseFloat(input);

		switch (content) {
			case 'C':
				setInput('0');
				setPreviousValue(null);
				setOperator(null);
				return;

			case '⌫':
				setInput(input.substr(0, input.length - 1));
				return;

			case '+/−':
				setInput((number * -1).toString());
				return;

			case '.':
				if (input.includes('.')) return;

				setInput(input + '.');
				return;

			case '%':
				setInput((number / 100).toString());
				setPreviousValue(null);
				setOperator(null);
				return;
			case '+':
				handleOperation();
				setInput('0');
				setOperator('+');
				console.log(operator);
				setInput(input + '+');
				return;

			case '−':
				handleOperation();
				setInput('0');
				setOperator('−');
				return;

			case '×':
				handleOperation();
				setInput('0');
				setOperator('×');
				return;

			case '÷':
				handleOperation();
				setInput('0');
				setOperator('÷');
				return;

			default:
				break;
		}

		if (content === '=') {
			if (!operator) return;
			if (operator === '+') {
				setInput((previousValue + parseFloat(input)).toString());
			} else if (operator === '−') {
				setInput((previousValue - parseFloat(input)).toString());
			} else if (operator === '×') {
				setInput((previousValue * parseFloat(input)).toString());
			} else if (operator === '÷') {
				setInput((previousValue / parseFloat(input)).toString());
			}
			setPreviousValue(null);
			setOperator(null);
			return;
		}

		/* Check if there is a decimal point and add the next number */
		if (input[input.length - 1] === '.') {
			setInput(input + content);
		} else {
			setInput(parseFloat(input + content).toString());
		}
	};

	return (
		<div className="App">
			<div className="display">{handleAddComma(input)}</div>

			<ButtonContainer handleClick={handleClick} />
		</div>
	);
}

export default App;
