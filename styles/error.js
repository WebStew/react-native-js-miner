
import device from '../properties/device';

export default ( theme ) => {

	return { 
		
		control : {
			alignItems 		: 'center' 	,
			flex 			: 1 		,
			flexDirection 	: 'column'  ,
			justifyContent 	: 'center'
		} ,

		text : {
			color 		: theme.body 	,
			fontSize 	: 16 			,
			textAlign 	: 'center'
		} ,

		view : {
			height 				: device.height ,
			paddingHorizontal 	: 15
		}
	};
};