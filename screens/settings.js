
import 		React 					from 'react';
import { 	connect 			} 	from 'react-redux';
import { 	ScrollView 			,
			Text 				,
			TouchableOpacity 	,
			View 				} 	from 'react-native';
import 		Icon 					from '../components/utilities/icon';
import 		scenes 					from '../styles/scene';
import 		styles 					from '../styles/list-control';

export default connect (

	state => ({
		theme : state.theme
	})

) ( class Settings extends React.Component {

	static navigationOptions = ({ screenProps }) => {

		return {
			tabBarIcon 	: ({ focused }) => {

				const theme = screenProps.theme;
				
				return (
					<Icon
						type 	= 'settings'
						size 	= { 32 												}
						colour 	= { focused ? theme.disabled : theme.brand.action	}
					/>
				);
			} ,
			title 		: 'Settings'
		};
	};

	settings () {

		return [
			{
				name 	: 'Set API keys' ,
				url 	: 'api'
			} ,
			{
				name 	: 'Change theme' ,
				url 	: 'themes'
			}
		];
	}

	contents () {

		const 	navigate 	= this.props.navigation.navigate 	,
				theme 		= this.props.theme 					,
				style 		= styles ( theme ) 					;

		return this.settings ().map (( setting , index ) => {

			return (
				<TouchableOpacity 
					key 	= { index 						}
					onPress = {() => navigate ( setting.url )}
					style 	= { style.control 				}
				>
					<Text style = { style.text 	}>
						{ setting.name 			}
					</Text>
					<Icon
						type 	= 'chevron-right'
						size 	= { 18 				}
						colour 	= { theme.action 	}
					/>
				</TouchableOpacity>
			);
		});

	}

	render () {

		const 	theme = this.props.theme ,
				scene = scenes ( theme ) ;

		return 	(
			<ScrollView style = { scene.body }>
				{ this.contents ()}
			</ScrollView>
		);

	}
});
