
import { 	compose 	,
			createStore , 
			applyMiddleware } 	from 'redux';
import 		thunk 				from 'redux-thunk';
//import { 	createLogger 	} 	from 'redux-logger';
import 		reducers 			from '../reducers/index';
import 		api 				from '../middleware/api-key';
import 		theme 				from '../middleware/theme';

export default function ( state : Object = {}) {

	return createStore (
		reducers 	,
		state 		,
		compose (
			applyMiddleware (
				thunk 		,
				api.read 	,
				api.save	,
				theme.get 	,
				theme.save 	,
				//createLogger ()
			)
		)
	);
};
