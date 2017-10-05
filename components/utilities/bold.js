
import 		React 		from 'react';
import { 	Text 	} 	from 'react-native';
import 		styles		from '../../styles/wysiwyg';

export default class Bold extends React.Component {

	render () {

		const 	theme 	= this.props.theme ,
				style 	= styles ( theme ) ;

		return (
			<Text style = {{
				...style.bold ,
				...style.p
			}}>
				{ this.props.text 	}
			</Text>
		);
	}
};
