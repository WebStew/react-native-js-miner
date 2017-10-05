
export default ( theme ) => {

	return {

		a : {
			color 				: theme.action 	,
			fontSize 			: 16 			,
			textDecorationLine 	: 'underline'
		} ,

		bold : {
			fontWeight : 'bold'
		} ,

		p : {
			color 			: theme.body 	,
			fontSize 		: 16
		}
	};
};