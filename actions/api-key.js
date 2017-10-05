
import constants from '../constants/api-key';

export default {

	get () {

		return {
			type : constants.get
		};
	} ,
	
	read ( name ) {

		return {
			name : name ,
			type : constants.read
		};
	} ,

	save ( name , value ) {

		return {
			name 	: name 	,
			value 	: value ,
			type 	: constants.save
		};
	} ,

	set ( name , value ) {

		return {
			name 	: name 	,
			value 	: value ,
			type 	: constants.set
		};
	}
};
