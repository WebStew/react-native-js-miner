
import colours from '../utilities/colours';

export default ( theme ) => {

	return {

		tabBar 				: {
			borderTopWidth 	: 1 											,
			borderTopColor 	: colours.shade ( theme.brand.chrome , -0.25 ) 	,
			backgroundColor : theme.brand.chrome 							,
			flexDirection 	: 'row' 										,
			height 			: 49
		} ,

		tab 				: {
			alignItems 		: 'stretch' 	,
			flex 			: 1 			,
			justifyContent 	: 'flex-end'
		} ,

		icon 				: {
			flexGrow 		: 1
		} ,

		label 				: {
			backgroundColor : 'transparent' ,
			fontSize 		: 10 			,
			marginBottom 	: 1.5 			,
			textAlign 		: 'center'
		}
	}
};
