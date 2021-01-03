import React from 'react';
import Button from './Button';

export default function ButtonContainer({ handleClick }) {
	return (
		<div className="buttons">
			<Button handleClick={handleClick} content="C" type="functionOrOperator" />
			<Button handleClick={handleClick} content="⌫" type="functionOrOperator" />
			<Button handleClick={handleClick} content="%" type="functionOrOperator" />
			<Button handleClick={handleClick} content="÷" type="functionOrOperator" />
			<Button handleClick={handleClick} content="7" />
			<Button handleClick={handleClick} content="8" />
			<Button handleClick={handleClick} content="9" />
			<Button handleClick={handleClick} content="×" type="functionOrOperator" />
			<Button handleClick={handleClick} content="4" />
			<Button handleClick={handleClick} content="5" />
			<Button handleClick={handleClick} content="6" />
			<Button handleClick={handleClick} content="−" type="functionOrOperator" />
			<Button handleClick={handleClick} content="1" />
			<Button handleClick={handleClick} content="2" />
			<Button handleClick={handleClick} content="3" />
			<Button handleClick={handleClick} content="+" type="functionOrOperator" />
			<Button handleClick={handleClick} content="+/−" />
			<Button handleClick={handleClick} content="0" />
			<Button handleClick={handleClick} content="." />
			<Button handleClick={handleClick} content="=" />
		</div>
	);
}
