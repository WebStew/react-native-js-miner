
import 		React 		from 'react';
import { 	Linking ,
			Text 	} 	from 'react-native';
import 		styles		from '../../styles/wysiwyg';

export default class Link extends React.Component {

	constructor ( props ) {
		super 	( props );

		this.press = this.press.bind ( this );
	}

	press () {

		Linking.openURL ( this.props.url );
	}

	render () {

		const 	theme 	= this.props.theme ,
				style 	= styles ( theme ) ;

		return (
			<Text 
				onPress = { this.props.press || this.press 	}
				style 	= { style.a 						}
			>
				{ this.props.text }
			</Text>
		);
	}
};
