
import 		React 					from 'react';
import { 	TouchableOpacity 	,
			Text 				} 	from 'react-native';
import 		Icon 					from './icon';
import 		styles 					from '../../styles/back';

export default class Back extends React.Component {

	render () {

		const 	theme 	= this.props.theme ,
				style 	= styles ( theme ) ;

		return (
			<TouchableOpacity 
				style  	= { style.control 		}
				onPress = { this.props.press 	}
			>
				<Icon
					type 	= { 'chevron-left' 		}
					size 	= { 18 					}
					colour 	= { theme.brand.action 	}
				/>
				<Text style = { style.text 	}>
					{ this.props.text 		}
				</Text>
			</TouchableOpacity>
		);

	}
};
