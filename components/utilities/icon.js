

import 		React 					from 'react';
import { 	connect 			} 	from 'react-redux';
import { 	Ionicons 			} 	from '@expo/vector-icons';
import 		icons 					from '../../configuration/icons';

export default class Icon extends React.Component {

	render () {

		return (
			<Ionicons
				name 	= { icons [ this.props.type ] 	|| icons.alert 	}
				size 	= { this.props.size 			|| 18 			}
				color 	= { this.props.colour 			||	'#ff0000'	}
			/>
		);
	}
};