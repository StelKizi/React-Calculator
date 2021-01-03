export const checkPrevAction = (expression) => {
	const actions = /[+/\-x*.]$/;

	return actions.test(expression);
};
