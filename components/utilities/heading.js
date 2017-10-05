
import 		React 		from 'react';
import { 	Text 	} 	from 'react-native';
import 		styles		from '../../styles/headings';

export default class Heading extends React.Component {

	render () {

		const 	type 	= this.props.type || 1 		,
				theme 	= this.props.theme 			,
				style 	= styles ( theme ) [ type ] ;

		return (
			<Text style = { style 	}>
				{ this.props.text 	}
			</Text>
		);
	}
};
