
import { 	combineReducers } 	from 'redux';
import 		api 				from './api-key';
import 		mining 				from './mining';
import 		theme 				from './theme';

export default combineReducers ({
	api 	,
	mining 	,
	theme
});
