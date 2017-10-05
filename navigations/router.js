
import 		React 				from 'react';
import { 	StackNavigator 	,
			TabNavigator 	} 	from 'react-navigation';
import 		TabBar 				from '../components/navigations/tabbar-bottom';
import 		ApiKeys 			from '../screens/api-keys';
import 		Mining 				from '../screens/mining';
import 		Settings			from '../screens/settings';
import 		Themes				from '../screens/themes';
import 		styles 				from '../styles/header';

const Root = TabNavigator (
	{
		mining 	: {
			screen 	: Mining
		} ,

		settings 	: {
			screen 	: Settings
		}
	} ,
	{
		animationEnabled 	: true 		,
		swipeEnabled 		: true 		,
		tabBarComponent 	: TabBar 	,
		tabBarPosition 		: 'bottom'	,
		tabBarOptions 		: {
			showLabel 		: false
		}
	}
);

export default StackNavigator ({
	
		Root 		: {
			screen 	: Root
		} ,

		api 		: {
			screen 	: ApiKeys
		} ,

		themes 		: {
			screen 	: Themes
		}
	} ,

	{
		cardStyle 			: {
			backgroundColor : 'transparent' ,
			shadowColor 	: 'transparent' 
		} ,
		navigationOptions 	: ({ screenProps }) => {

			const style = styles ( screenProps.theme );

			return {
				headerStyle 		: style.header ,
				headerTitleStyle 	: style.title
			};
		}
	}
);

