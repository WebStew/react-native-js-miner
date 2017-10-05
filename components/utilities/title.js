
import 		React 					from 'react';
import { 	connect 			} 	from 'react-redux';
import {	Text 				} 	from 'react-native';
import 		styles					from '../../styles/header';

export default connect (

	state => ({
		theme : state.theme
	})

) ( class Title extends React.Component {

	render () {

		const 	title 	= ! this.props.loading ? this.props.titles.loaded : this.props.titles.loading ,
				style 	= style ( this.props.theme );

		return ( 
			<Text 
				numberOfLines 	= { 1 			}
				style 			= { style.title }
			>
				{ title }
			</Text>
		);
	}
});