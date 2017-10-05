
import colour from '../utilities/colours'

const 	common 	= {

		text 	: {
			fontSize 	: 18 	,
			fontWeight 	: 'bold'
		} ,

		view 	: {
			alignItems 			: 'center'	,
			borderRadius 		: 5 		,
			borderWidth 		: 1 		,
			marginBottom 		: 15 		,
			paddingHorizontal 	: 15 		,
			paddingVertical 	: 10
		}
	};	

export default ( theme ) => {

	return {
		
		action : {

			text : {
				...{
					color : theme.brand.action
				} ,
				...common.text
			} ,

			view : {
				...{
					backgroundColor : theme.brand.chrome ,
					borderColor 	: colour.shade ( theme.brand.chrome , -0.5 )
				} ,
				...common.view
			}
		}
	};
};