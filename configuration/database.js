
import Expo from 'expo';

const configuration = {
		name 	: 'coinminer' ,
		version : 1
	} ,

	connection 	= Expo.SQLite.openDatabase ( configuration ) ,

	error 		= ( data ) => {
		console.log ( 'DATABASE ERROR - ' , data );
	};

// Return a connection to our database
export default {

	connection 	:  connection ,

	apikeys 	: {
		
		/**
		 * Setup function to create the table to keep our api keys in
		 */
		setup 	: () => { 
			
			return connection.transaction (( transaction ) => {

				transaction.executeSql ( 
					'CREATE TABLE IF NOT EXISTS apikeys ( 	' 	+ 
						'id TEXT NOT NULL PRIMARY KEY , 	' 	+
						'value TEXT NOT NULL ' 					+ 
					');' 
				);
			});
		} ,

		set 	: ( id , value , callback ) => {

			return connection.transaction (( transaction ) => {

				transaction.executeSql ( 
					'INSERT OR REPLACE INTO apikeys ( id , value ) ' 	+
					'VALUES ( ? , ? );' 								,
					[ 
						id 												, 
						value 
					] 													,
					callback 											,
					error
				);
			})
		} ,

		get 	: ( id , callback ) => {

			return connection.transaction (( transaction ) => {

				transaction.executeSql (
					'SELECT * FROM apikeys WHERE id = ?' 	,
					[ 
						id 
					] 										,
					callback 								,
					error 

				);
			});
		}
	} ,

	settings 	: {

		/**
		 * Setup function to create the table to keep our saved settings in
		 */
		setup 	: () => { 
			
			return connection.transaction (( transaction ) => {

				transaction.executeSql ( 
					'CREATE TABLE IF NOT EXISTS settings ( 	' 	+ 
						'id TEXT NOT NULL PRIMARY KEY , 	' 	+
						'value TEXT NOT NULL ' 					+ 
					');' 
				);
			});
		} ,

		set 	: ( id , value , callback ) => {

			return connection.transaction (( transaction ) => {

				transaction.executeSql ( 
					'INSERT OR REPLACE INTO settings ( id , value ) ' 	+
					'VALUES ( ? , ? );' 								,
					[ 
						id 												, 
						value 
					] 													,
					callback 											,
					error
				);
			})
		} ,

		get 	: ( id , callback ) => {

			return connection.transaction (( transaction ) => {

				transaction.executeSql (
					'SELECT * FROM settings WHERE id = ?' 	,
					[ 
						id 
					] 										,
					callback 								,
					error 

				);
			});
		}
	}
};