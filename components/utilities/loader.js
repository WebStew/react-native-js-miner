
import 		React 					from 'react';
import { 	View 				,
			ActivityIndicator 	} 	from 'react-native';
import 		styles 					from '../../styles/loader';

export default class Loader extends React.Component {

	render () {

		const 	theme 	= this.props.theme 	,
				style 	= styles ( theme ) 	;

		// If we're not in loading state there is no need to render
		if ( ! this.props.loading ) {
			return null;
		}

		return (
			<View 	style 		= { style.view 					}>
				<ActivityIndicator
					animating 	= { this.props.loading 			}
					color 		= { this.props.theme.loader 	}
					size 		= { this.props.size || 'large' 	}
					style 		= { style.icon					}
				/>
			</View>
		);
	}
};