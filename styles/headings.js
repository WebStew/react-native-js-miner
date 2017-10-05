
import colour 	from '../utilities/colours';

export default ( theme ) => {

	return {

		// H1
		1 : {
			color 			: colour.shade ( theme.body , -0.25 ) 	,
			fontSize 		: 21 									,
			fontWeight 		: 'bold' 								,
			marginBottom 	: 12

		} ,

		// H2
		2 : {
			color 			: colour.shade ( theme.body , -0.25 ) 	,
			fontSize 		: 18 									,
			fontWeight 		: 'bold' 								,
			marginBottom 	: 12
			
		}
	};

};