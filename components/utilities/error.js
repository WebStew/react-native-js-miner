
import 		React 					from 'react';
import { 	Text 				, 
			TouchableOpacity 	,
			View 				} 	from 'react-native';
import 		Icon 					from './icon';
import 		styles 					from '../../styles/error';

export default class Error extends React.Component {

	render () {

		const 	text 	= this.props.text || 'There has been an error. Please try again.' ,
				theme 	= this.props.theme ,
				style 	= styles ( theme ) ;

		// If there is no error don't render
		if ( ! this.props.error ) {
			return null;
		}

		return (
			<View style 	= { style.view 			}>
				<TouchableOpacity 
					style 	= { style.control 		} 
					onPress = { this.props.press 	}
				>
					<Icon
						colour 	= { theme.action 	}
						size 	= { 64 				}
						type 	= 'refresh'
					/>
					<Text style = { style.text }>
						{ text }
					</Text>
				</TouchableOpacity>
			</View>
		);
	}	
};