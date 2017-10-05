
import device from '../properties/device';

export default ( theme ) => {
	
	return 		{

		icon : 	{
			alignItems 		: 'center' 	,
			flex 			: 1 		,
			flexDirection 	: 'column'  ,
			justifyContent 	: 'center'
		} ,

		view : 	{
			height 				: device.height ,
			paddingHorizontal 	: 15
		}
	};
};