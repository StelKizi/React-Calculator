export const checkPrevAction = (expression) => {
	const actions = /[+/\-x*.]$/;

	return actions.test(expression);
};

const handleAddComma = (input) => {
	return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
export default handleAddComma;
