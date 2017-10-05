
import colours from '../utilities/colours';

export default ( theme ) => {

	return {

		header 	: {
			backgroundColor 	: theme.brand.chrome 							,
			borderBottomColor 	: colours.shade ( theme.brand.chrome , -0.25 ) 	,
			elevation 			: 0
		} ,
	
		title 	: {
			alignSelf 	: 'center' 			,
			color 		: theme.brand.body 	,
			fontSize 	: 18 				,
			fontWeight 	: 'normal' 			,
			textAlign 	: 'center'
		}
	};
};