
import constants 	from '../constants/mining';

const error = ( data ) => {

		return {
			error 	: data ,
			type 	: constants.error
		};
	} ,

	get = ( name ) => {

		return {
			name 	: name ,
			type 	: constants.get
		};
	} ,

	set = ( data ) => {

		return {
			items 	: data ,
			type 	: constants.set
		};
	} ,
	
	update = () => {
	
		return {
			type 	: constants.update
		};
	};

export default {

	update () {

		console.log ( 'UPDATING MINER' )

		return ( dispatch ) => {
			
			dispatch ( update ());
		};

	} ,
	
	setup ( name , key ) {
		
		return ( dispatch ) => {

			//console.log ( dispatch )

			dispatch ( get ( name ));
			dispatch ( set 	( name ));

			//const miner = new CoinHive.Anonymous ( key );




			// // Get the currencies
			// return api [ name ] ()
			// 	.then (( data ) => {
					
			// 		console.log ( 'DATA RECEIVED' );
			// 		console.log ( data );

			// 		//
			// 	})
			// 	.catch (( data ) => {
					
			// 		console.log ('ERROR' , data );
			// 		dispatch ( error 	( data ))
			// 	});
		}
	}
};
