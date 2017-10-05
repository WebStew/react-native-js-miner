
import constants 		from '../constants/api-key';
import configuration 	from '../properties/api-keys';


export default function (

	// We set the default to the first theme in our theme properties
	state 	= {
		coinhive 	: configuration.coinhive ,
		loading 	: true
	} , 

	action 	= {}

) {

	switch ( action.type ) {
		
		case constants.get :

			return Object.assign (
				{} 		,
				state 	,
				{
					loading : true
				}
			);

		case constants.set :

			return Object.assign (
				{} 		,
				state 	,
				{
					[ action.name ] : action.value ,
					loading 		: false
				}
			);

		default :
			return state;
	}
};
