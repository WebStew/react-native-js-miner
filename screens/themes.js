
import 		React 					from 'react';
import { 	ScrollView 			,
			Text 				,
			TouchableOpacity 	} 	from 'react-native';
import { 	connect 			} 	from 'react-redux';
import { 	Ionicons 			} 	from '@expo/vector-icons';
import 		Back 					from '../components/utilities/back';
import 		Icon 					from '../components/utilities/icon';

import 		actions 				from '../actions/theme';
import 		themes 					from '../properties/themes';
import 		scenes 					from '../styles/scene';
import 		styles 					from '../styles/list-control';

export default connect (

	state => ({
		theme : state.theme
	})

) ( class Themes extends React.Component {

	static navigationOptions = ({ navigation , screenProps }) => {

		return {
			title 		: 'Change Theme' ,	
			headerLeft 	: <Back 
				press 	= {() => navigation.goBack 	()} 
				theme 	= { screenProps.theme 		}
				text 	= { 'Back' 					}
			/>
		};
	};

	themes () {

		const current = this.props.theme;

		return Object.keys ( themes ).map (( theme , index ) => {

			const 	icon 	= theme === current.id 	? 'radio-on' : 'radio-off' 	,
					style 	= styles ( current ) ;

			return (
				<TouchableOpacity 
					key 	= { index 											}
					onPress = {() => this.props.dispatch ( actions.save ( theme ))}
					style 	= { style.control 									}
				>
					<Text style = { style.text 		}>
						{ themes [ theme ].name 	}
					</Text>
					<Icon
						type 	= { icon 			}
						size 	= { 18 				}
						colour 	= { current.action 	}
					/>
				</TouchableOpacity>
			);
		});
	}

	render () {

		const 	theme = this.props.theme 	,
				scene = scenes ( theme ) 	;

		return (
			<ScrollView style = { scene.body }>
				{ this.themes ()}
			</ScrollView>
		);
	}
});
