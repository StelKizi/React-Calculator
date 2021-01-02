import React, { useState } from 'react';
/* import {evaluate} from 'mathjs'; */
import ButtonContainer from './ButtonContainer';
import '../styles/App.css';

function App() {
	const [input, setInput] = useState('0');
	const [previousValue, setPreviousValue] = useState(null);
	const [operator, setOperator] = useState(null);
	const [countDecimal, setCountDecimal] = useState(0);

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

	const handleClick = (content) => {
		const number = parseFloat(input);

		switch (content) {
			case 'C':
				setInput('0');
				setPreviousValue(null);
				setOperator(null);
				return;
			case '+/−':
				setInput((number * -1).toString());
				return;
			case '.':
				if (input.includes('.')) {
					setCountDecimal((count) => count + 1);
				}

				if (countDecimal < 1) {
					setInput((result) => result + '.');
				} else {
					countDecimal(0);
				}

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

		setInput(parseFloat(number + content).toString());
	};

	return (
		<div className="App">
			<div className="display">{input}</div>

			<ButtonContainer handleClick={handleClick} />
		</div>
	);
}

export default App;
