
import actions 			from '../actions/api-key';
import constants 		from '../constants/api-key';
import database 		from '../configuration/database';
import configuration 	from '../properties/api-keys';

export default {

	read : store => next => action => {

		if ( action.type === constants.read ) {
			
			store.dispatch 			( actions.get 	());
			database.apikeys.get 	( action.name , ( data , results ) => {

				// If the users does not have a Coin Hive API key - use mine!
				const 	users 	= results.rows._array.length ? results.rows._array [ 0 ].value : null ,
						value 	= users ? users : configuration [ action.name ];

				store.dispatch 	( actions.set ( value ));
				next 			( action 			);
			});
		}

		else {
			next ( action );
		}
	} ,

	save : store => next => action => {

		if ( action.type === constants.save ) {

			database.apikeys.set ( action.name , action.value , () => {

				store.dispatch 	( actions.set ( action.value 	));
				next 			( action 						)
			});
		}

		else {
			next ( action );
		}
	}
};
