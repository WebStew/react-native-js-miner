
export default ( theme ) => {

	return {

		control : {
			backgroundColor 	: theme.base 		,
			borderColor 		: theme.border 		,
			borderBottomWidth 	: 1 				,
			flex 				: 1 				,
			flexDirection 		: 'row' 			,
			justifyContent 		: 'space-between' 	,
			padding 			: 15
		} ,

		text 	: {
			color 				: theme.body 		,
			fontSize 			: 16
		}
	};
};