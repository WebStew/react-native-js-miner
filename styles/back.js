
export default ( theme ) => {

	return {

		control : {
			alignItems 		: 'center' 	,
			flexDirection 	: 'row' 	,
			paddingLeft 	: 10
		} ,

		text : {
			color 		: theme.brand.action 	,
			fontSize 	: 18 					,
			fontWeight 	: 'normal' 				,
			paddingLeft : 5
		}
	}
};