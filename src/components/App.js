import React, { useState } from 'react';
import Button from './Button';
import '../styles/App.css';

function App() {
	const [input, setInput] = useState('0');
	const [previousValue, setPreviousValue] = useState(null);
	const [operator, setOperator] = useState(null);

	const handleClick = (content /* , type2 */) => {
		const number = parseFloat(input);

		setInput('0');
		if (content === 'C') {
			setPreviousValue(null);
			return;
		}

		if (content === '+/−') {
			setInput(number * -1).toString();
			return;
		}

		if (content === '%') {
			setInput((number / 100).toString());
			/* setPreviousValue(null); */
			setOperator(null);
			return;
		}

		if (content === '+') {
			setPreviousValue(parseFloat(input));
			setInput('0');
			setOperator('+');
			return;
		}

		if (content === '−') {
			setPreviousValue(parseFloat(input));
			setInput('0');
			setOperator('−');
			return;
		}

		if (content === '×') {
			setPreviousValue(parseFloat(input));
			setInput('0');
			setOperator('×');
			return;
		}

		if (content === '÷') {
			setPreviousValue(parseFloat(input));
			setInput('0');
			setOperator('÷');
			return;
		}

		if (content === '=') {
			setPreviousValue(null);
			setOperator(null);
			return;
		}

		setInput(parseFloat(number + content).toString());
	};

	return (
		<div className="App">
			<div className="display">{input}</div>

			<div className="buttons">
				<Button
					handleClick={handleClick}
					content="C"
					type="functionOrOperator"
				/>
				<Button
					handleClick={handleClick}
					content="⌫"
					type="functionOrOperator"
				/>
				<Button
					handleClick={handleClick}
					content="%"
					type="functionOrOperator"
					/* type2="operator" */
				/>
				<Button
					handleClick={handleClick}
					content="÷"
					type="functionOrOperator"
					/* type2="operator" */
				/>
				<Button handleClick={handleClick} content="7" />
				<Button handleClick={handleClick} content="8" />
				<Button handleClick={handleClick} content="9" />
				<Button
					handleClick={handleClick}
					content="×"
					type="functionOrOperator"
					/* type2="operator" */
				/>
				<Button handleClick={handleClick} content="4" />
				<Button handleClick={handleClick} content="5" />
				<Button handleClick={handleClick} content="6" />
				<Button
					handleClick={handleClick}
					content="−"
					type="functionOrOperator"
					/* type2="operator" */
				/>
				<Button handleClick={handleClick} content="1" />
				<Button handleClick={handleClick} content="2" />
				<Button handleClick={handleClick} content="3" />
				<Button
					handleClick={handleClick}
					content="+"
					type="functionOrOperator"
					/* type2="operator" */
				/>
				<Button handleClick={handleClick} content="+/−" />
				<Button handleClick={handleClick} content="0" />
				<Button handleClick={handleClick} content="." />
				<Button handleClick={handleClick} content="=" />
			</div>
		</div>
	);
}

export default App;
