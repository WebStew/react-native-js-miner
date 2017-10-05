
import constants 	from '../constants/theme';
import themes 		from '../properties/themes';

const defaults = themes [ Object.keys ( themes ) [ 0 ]];

export default function (

	// We set the default to the first theme in our theme properties
	state 	= {
		id 			: defaults.id 			,
		action 		: defaults.action 		,
		base 		: defaults.base 		,
		body 		: defaults.body 		,
		border 		: defaults.border 		,
		brand 		: {
			action 	: defaults.brand.action ,
			body 	: defaults.brand.body 	,
			chrome 	: defaults.brand.chrome
		} 									,
		disabled 	: defaults.disabled 	,
		name 		: defaults.name 		,
		negative 	: defaults.negative 	,
		positive 	: defaults.positive 	,
	} , 

	action 	= {}

) {

	switch ( action.type ) {

		case constants.set :

			return Object.assign (
				{} 		,
				state 	,
				themes [ action.id ]
			);

		default :
			return state;
	}
};
