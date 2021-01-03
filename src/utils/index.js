/* export const checkPrevAction = (expression) => {
	const actions = /[+/\-x*.]$/;

	return actions.test(expression);
}; */

const handleAddComma = (input) => {
	let output = '';
	let decimal = '';
	let isNegative = false;
	if (input.includes('.')) {
		output = input.substring(0, input.indexOf('.'));
		decimal = input.substring(input.indexOf('.'));
	} else {
		output = input;
	}
	if (parseFloat(input) < 0) {
		isNegative = true;
		output = output.substring(1);
	}

	return isNegative
		? '-' + parseFloat(output).toLocaleString() + decimal
		: parseFloat(output).toLocaleString() + decimal;
};
export default handleAddComma;
