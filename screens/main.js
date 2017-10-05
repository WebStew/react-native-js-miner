
import 		React 			from 'react';
import { 	Platform 	, 
			StatusBar 	, 
			View 		} 	from 'react-native';
import { 	connect 	} 	from 'react-redux';
import 		Navigation 		from '../navigations/router';
import 		styles			from '../styles/main';

export default connect (

	state => ({
		theme 	: state.theme
	})

) ( class Main extends React.Component {

	constructor ( props ) {
		super 	( props );

		this.navigate = this.navigate.bind ( this );
	}

	navigate () {}

	render () {

		const 	theme = this.props.theme ,
				style = styles ( theme ) ;

		return (
			<View style = { style.main }>
				{ Platform.OS === 'ios' 	&& <StatusBar 	barStyle 	= 'default' 			/> }
				{ Platform.OS === 'android' && <View 		style 		= { style.statusbar } 	/> }
				<Navigation 
					onNavigationStateChange = { this.navigate }
					screenProps 			= {{
						theme : this.props.theme
					}} 
				/>
			</View>
		);
	}
});
