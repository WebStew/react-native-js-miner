
import 		React 					from 'react';
import { 	Text 				,
			TouchableOpacity 	,
			View 				} 	from 'react-native';
import 		styles 					from '../../styles/buttons';

export default class Button extends React.Component {

	render () {

		const 	theme 	= this.props.theme 								,
				type 	= this.props.type ? this.props.type : 'action' 	,
				style 	= styles ( theme ) [ type ]						;

		return (
			<TouchableOpacity 	onPress = { this.props.press 	}>
				<View 			style 	= { style.view 			}>
					<Text 		style 	= { style.text 			}>
						{ this.props.text.toUpperCase 			()}
					</Text>
				</View>
			</TouchableOpacity>
		);
	}
};
