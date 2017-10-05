
import constants from '../constants/mining';

export default function (

	// We set the default to the first theme in our theme properties
	state 	= {
		active 		: false ,
		error 		: null 	,
		inactive 	: true 	,
		loading 	: false ,
		name 		: null
	} , 

	action 	= {}

) {

	switch ( action.type ) {

		case constants.error :
		
			return Object.assign (
				{} 		,
				state 	,
				{
					active 		: false			,
					error 		: action.error 	,
					inactive 	: false 		,
					loading 	: false 		,
					name 		: action.name
				}
			);
		
		case constants.get :

			return Object.assign (
				{} 		,
				state 	,
				{
					active 		: false	,
					error 		: null 	,
					inactive 	: false ,
					loading 	: true 	,
					name 		: action.name
				}
			);
			
		case constants.set :

			return Object.assign (
				{} 		,
				state 	,
				{
					active 		: true	,
					error 		: null 	,
					inactive 	: false ,
					loading 	: false	,
					name 		: action.name
				}
			);

		default :
			return state;
	}
};
